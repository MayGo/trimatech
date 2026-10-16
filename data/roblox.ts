export const GAME_SLUGS = [
    'slash-for-brainrots',
    'outfits-on-a-budget',
    'territory-takeover',
    'dead-end-road',
    'city-states',
    'dunkeep'
] as const;

export type GameSlug = (typeof GAME_SLUGS)[number];

export type GameStatus = 'live' | 'new' | 'alpha';

export type Game = {
    readonly slug: GameSlug;
    readonly name: string;
    readonly universeId: number;
    readonly placeId: number;
    readonly status: GameStatus;
    readonly year: number;
};

export const games: readonly Game[] = [
    {
        slug: 'slash-for-brainrots',
        name: 'Slash for Brainrots',
        universeId: 10256692448,
        placeId: 134292164686124,
        status: 'live',
        year: 2026
    },
    {
        slug: 'outfits-on-a-budget',
        name: 'Outfits on a Budget',
        universeId: 10579210099,
        placeId: 139766713339164,
        status: 'live',
        year: 2026
    },
    {
        slug: 'territory-takeover',
        name: 'Territory Takeover',
        universeId: 8776849277,
        placeId: 137091142050829,
        status: 'live',
        year: 2025
    },
    {
        slug: 'dead-end-road',
        name: 'Dead End Road',
        universeId: 10769385898,
        placeId: 83776498463950,
        status: 'new',
        year: 2026
    },
    {
        slug: 'city-states',
        name: 'City States',
        universeId: 10757406620,
        placeId: 131616599328788,
        status: 'alpha',
        year: 2026
    },
    {
        slug: 'dunkeep',
        name: 'Dunkeep',
        universeId: 6595433886,
        placeId: 98982516069917,
        status: 'alpha',
        year: 2024
    }
];

export const PLUGIN_SLUGS = [
    'click-to-build',
    'city-builder',
    'perf-auditor',
    'super-aligner',
    'terrain-tools',
    'voxelizer',
    'icon-snap',
    'quick-actions',
    'material-picker',
    'npc-outfit-creator',
    'grip-a-tool',
    'pose-a-dude',
    'drop-a-dude'
] as const;

export type PluginSlug = (typeof PLUGIN_SLUGS)[number];

export type Plugin = {
    readonly slug: PluginSlug;
    readonly name: string;
    readonly assetId: number;
    readonly version: string;
    /** Public place that demos the plugin, when one exists. */
    readonly demoPlaceId: number | null;
};

export const plugins: readonly Plugin[] = [
    {
        slug: 'click-to-build',
        name: 'Click to Build',
        assetId: 125786968176382,
        version: '1.18',
        demoPlaceId: 111890734008547
    },
    { slug: 'city-builder', name: 'City Builder', assetId: 136382184501618, version: '1.0', demoPlaceId: null },
    { slug: 'perf-auditor', name: 'Perf Auditor', assetId: 115623728130733, version: '0.4', demoPlaceId: null },
    { slug: 'super-aligner', name: 'Super Aligner', assetId: 98043920579002, version: '0.2', demoPlaceId: null },
    { slug: 'terrain-tools', name: 'Terrain Tools', assetId: 121693306028761, version: '1.2', demoPlaceId: null },
    { slug: 'voxelizer', name: 'Voxelizer', assetId: 101736114589503, version: '1.6', demoPlaceId: null },
    { slug: 'icon-snap', name: 'Icon Snap', assetId: 110634454048264, version: '1.9', demoPlaceId: null },
    { slug: 'quick-actions', name: 'Quick Actions', assetId: 125216167900972, version: '0.4', demoPlaceId: null },
    { slug: 'material-picker', name: 'Material Picker', assetId: 77493849143801, version: '1.7', demoPlaceId: null },
    {
        slug: 'npc-outfit-creator',
        name: 'NPC Outfit Creator',
        assetId: 130088527626653,
        version: '1.3',
        demoPlaceId: null
    },
    { slug: 'grip-a-tool', name: 'Grip a Tool', assetId: 95296834697980, version: '1.4', demoPlaceId: null },
    { slug: 'pose-a-dude', name: 'Pose a Dude', assetId: 122263820400772, version: '1.7', demoPlaceId: null },
    { slug: 'drop-a-dude', name: 'Drop a Dude', assetId: 84149878612124, version: '1.3', demoPlaceId: null }
];

export const gameIconSrc = (slug: GameSlug) => `/roblox/games/${slug}.png`;
export const pluginIconSrc = (slug: PluginSlug) => `/roblox/plugins/${slug}.png`;

export const placeLink = (placeId: number) => `https://www.roblox.com/games/${placeId}`;
export const storeAssetLink = (assetId: number) => `https://create.roblox.com/store/asset/${assetId}`;
