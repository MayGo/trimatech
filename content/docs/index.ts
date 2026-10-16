import type { PluginSlug } from '@/data/roblox';
import { cityBuilderDoc } from './city-builder';
import { iconSnapDoc } from './icon-snap';
import { npcOutfitCreatorDoc } from './npc-outfit-creator';
import { perfAuditorDoc } from './perf-auditor';
import { quickActionsDoc } from './quick-actions';
import { superAlignerDoc } from './super-aligner';
import { terrainToolsDoc } from './terrain-tools';
import type { PluginDoc } from './types';
import { voxelizerDoc } from './voxelizer';

/** Plugins without an entry here have no docs page; their detail page links to the store and DevForum instead. */
const pluginDocs: Partial<Record<PluginSlug, PluginDoc>> = {
    'city-builder': cityBuilderDoc,
    'perf-auditor': perfAuditorDoc,
    'super-aligner': superAlignerDoc,
    'terrain-tools': terrainToolsDoc,
    voxelizer: voxelizerDoc,
    'icon-snap': iconSnapDoc,
    'quick-actions': quickActionsDoc,
    'npc-outfit-creator': npcOutfitCreatorDoc
};

export const getPluginDoc = (slug: PluginSlug): PluginDoc | null => pluginDocs[slug] ?? null;

export const hasPluginDoc = (slug: PluginSlug): boolean => slug in pluginDocs;

export type { DocBlock, DocSection, PluginDoc } from './types';
