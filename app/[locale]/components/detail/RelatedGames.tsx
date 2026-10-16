import { games, type GameSlug } from '@/data/roblox';
import type { GameStatsByUniverse } from '@/lib/roblox-stats';
import { SimpleGrid } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { GameCard } from '../GameCard';
import { DetailSection } from './DetailSection';

type Props = {
    current: GameSlug;
    stats: GameStatsByUniverse;
};

export const RelatedGames = ({ current, stats }: Props) => {
    const t = useTranslations('detail');
    const others = games.filter((game) => game.slug !== current).slice(0, 3);

    return (
        <DetailSection heading={t('moreGames')}>
            <SimpleGrid columns={[1, 1, 2, 3]} gap={5}>
                {others.map((game) => (
                    <GameCard key={game.slug} game={game} stats={stats.get(game.universeId)} />
                ))}
            </SimpleGrid>
        </DetailSection>
    );
};
