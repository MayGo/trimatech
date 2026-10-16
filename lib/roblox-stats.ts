import 'server-only';

import { ROBLOX_GROUP_ID } from '@/utils/constants';
import { z } from 'zod';

/** Roblox public API responses are re-fetched at most once an hour. */
const REVALIDATE_SECONDS = 60 * 60;

export type GameStats = {
    readonly playing: number;
    readonly visits: number;
    readonly favorites: number;
};

export type GameStatsByUniverse = ReadonlyMap<number, GameStats>;

const gamesResponse = z.object({
    data: z.array(
        z.object({
            id: z.number(),
            playing: z.number(),
            visits: z.number(),
            favoritedCount: z.number()
        })
    )
});

const groupResponse = z.object({
    memberCount: z.number()
});

const fetchJson = async (url: string): Promise<unknown> => {
    const response = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!response.ok) {
        throw new Error(`Roblox API ${response.status} for ${url}`);
    }
    return response.json();
};

/**
 * Live visit / player counts for the given universes.
 * Returns an empty map when Roblox is unreachable, so the page still renders.
 */
export const fetchGameStats = async (universeIds: readonly number[]): Promise<GameStatsByUniverse> => {
    try {
        const json = await fetchJson(`https://games.roblox.com/v1/games?universeIds=${universeIds.join(',')}`);
        const parsed = gamesResponse.safeParse(json);
        if (!parsed.success) {
            return new Map();
        }
        return new Map(
            parsed.data.data.map((game) => [
                game.id,
                { playing: game.playing, visits: game.visits, favorites: game.favoritedCount }
            ])
        );
    } catch {
        return new Map();
    }
};

/** Member count of the Trimatech Games group, or null when unavailable. */
export const fetchGroupMemberCount = async (): Promise<number | null> => {
    try {
        const json = await fetchJson(`https://groups.roblox.com/v1/groups/${ROBLOX_GROUP_ID}`);
        const parsed = groupResponse.safeParse(json);
        return parsed.success ? parsed.data.memberCount : null;
    } catch {
        return null;
    }
};

export const sumVisits = (stats: GameStatsByUniverse): number => {
    let total = 0;
    for (const game of stats.values()) {
        total += game.visits;
    }
    return total;
};
