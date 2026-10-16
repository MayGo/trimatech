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
    /** Number of screenshots checked in under public/roblox/games/<slug>/shot-N.png. */
    readonly screenshots: number;
};

export const games: readonly Game[] = [
    {
        slug: 'slash-for-brainrots',
        name: 'Slash for Brainrots',
        universeId: 10256692448,
        placeId: 134292164686124,
        status: 'live',
        year: 2026,
        screenshots: 2
    },
    {
        slug: 'outfits-on-a-budget',
        name: 'Outfits on a Budget',
        universeId: 10579210099,
        placeId: 139766713339164,
        status: 'live',
        year: 2026,
        screenshots: 1
    },
    {
        slug: 'territory-takeover',
        name: 'Territory Takeover',
        universeId: 8776849277,
        placeId: 137091142050829,
        status: 'live',
        year: 2025,
        screenshots: 2
    },
    {
        slug: 'dead-end-road',
        name: 'Dead End Road',
        universeId: 10769385898,
        placeId: 83776498463950,
        status: 'new',
        year: 2026,
        screenshots: 0
    },
    {
        slug: 'city-states',
        name: 'City States',
        universeId: 10757406620,
        placeId: 131616599328788,
        status: 'alpha',
        year: 2026,
        screenshots: 0
    },
    {
        slug: 'dunkeep',
        name: 'Dunkeep',
        universeId: 6595433886,
        placeId: 98982516069917,
        status: 'alpha',
        year: 2024,
        screenshots: 1
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
    /** DevForum thread for the plugin, when one exists. */
    readonly devForumLink: string | null;
    /** Dedicated documentation site, when one exists. Plugins without one may have docs in content/docs. */
    readonly docsLink: string | null;
};

export const plugins: readonly Plugin[] = [
    {
        slug: 'click-to-build',
        name: 'Click to Build',
        assetId: 125786968176382,
        version: '1.18',
        demoPlaceId: 111890734008547,
        devForumLink: 'https://devforum.roblox.com/t/click-and-build-easily-create-walls-paths-and-more/3633000',
        docsLink: 'https://click-to-build.trimatech.dev/docs/intro'
    },
    {
        slug: 'city-builder',
        name: 'City Builder',
        assetId: 136382184501618,
        version: '1.0',
        demoPlaceId: null,
        devForumLink: null,
        docsLink: null
    },
    {
        slug: 'perf-auditor',
        name: 'Perf Auditor',
        assetId: 115623728130733,
        version: '0.4',
        demoPlaceId: null,
        devForumLink: null,
        docsLink: null
    },
    {
        slug: 'super-aligner',
        name: 'Super Aligner',
        assetId: 98043920579002,
        version: '0.2',
        demoPlaceId: null,
        devForumLink: null,
        docsLink: null
    },
    {
        slug: 'terrain-tools',
        name: 'Terrain Tools',
        assetId: 121693306028761,
        version: '1.2',
        demoPlaceId: null,
        devForumLink: null,
        docsLink: null
    },
    {
        slug: 'voxelizer',
        name: 'Voxelizer',
        assetId: 101736114589503,
        version: '1.6',
        demoPlaceId: null,
        devForumLink: 'https://devforum.roblox.com/t/voxelizer-roblox-studio-plugin/4678335',
        docsLink: null
    },
    {
        slug: 'icon-snap',
        name: 'Icon Snap',
        assetId: 110634454048264,
        version: '1.9',
        demoPlaceId: null,
        devForumLink: null,
        docsLink: null
    },
    {
        slug: 'quick-actions',
        name: 'Quick Actions',
        assetId: 125216167900972,
        version: '0.4',
        demoPlaceId: null,
        devForumLink: null,
        docsLink: null
    },
    {
        slug: 'material-picker',
        name: 'Material Picker',
        assetId: 77493849143801,
        version: '1.7',
        demoPlaceId: null,
        devForumLink: 'https://devforum.roblox.com/t/yoink-n-slap-visuals-roblox-studio-plugin/4336986',
        docsLink: null
    },
    {
        slug: 'npc-outfit-creator',
        name: 'NPC Outfit Creator',
        assetId: 130088527626653,
        version: '1.3',
        demoPlaceId: null,
        devForumLink: null,
        docsLink: null
    },
    {
        slug: 'grip-a-tool',
        name: 'Grip a Tool',
        assetId: 95296834697980,
        version: '1.4',
        demoPlaceId: null,
        devForumLink: 'https://devforum.roblox.com/t/grip-a-tool-roblox-studio-plugin/4670012',
        docsLink: null
    },
    {
        slug: 'pose-a-dude',
        name: 'Pose a Dude',
        assetId: 122263820400772,
        version: '1.7',
        demoPlaceId: null,
        devForumLink: 'https://devforum.roblox.com/t/pose-a-dude-roblox-studio-plugin/4283748',
        docsLink: null
    },
    {
        slug: 'drop-a-dude',
        name: 'Drop a Dude',
        assetId: 84149878612124,
        version: '1.3',
        demoPlaceId: null,
        devForumLink: 'https://devforum.roblox.com/t/drop-a-dude-roblox-studio-plugin/4221589',
        docsLink: null
    }
];

export const isGameSlug = (value: string): value is GameSlug => GAME_SLUGS.some((slug) => slug === value);
export const isPluginSlug = (value: string): value is PluginSlug => PLUGIN_SLUGS.some((slug) => slug === value);

export const findGame = (slug: GameSlug): Game => {
    const game = games.find((candidate) => candidate.slug === slug);
    if (!game) {
        throw new Error(`Game data missing for slug ${slug}`);
    }
    return game;
};

export const findPlugin = (slug: PluginSlug): Plugin => {
    const plugin = plugins.find((candidate) => candidate.slug === slug);
    if (!plugin) {
        throw new Error(`Plugin data missing for slug ${slug}`);
    }
    return plugin;
};

export const gameIconSrc = (slug: GameSlug) => `/roblox/games/${slug}.png`;
export const gameScreenshotSrc = (slug: GameSlug, index: number) => `/roblox/games/${slug}/shot-${index + 1}.png`;
export const gamePath = (slug: GameSlug) => `/games/${slug}`;
export const pluginPath = (slug: PluginSlug) => `/plugins/${slug}`;
export const pluginDocsPath = (slug: PluginSlug) => `/plugins/${slug}/docs`;
export const pluginIconSrc = (slug: PluginSlug) => `/roblox/plugins/${slug}.png`;

export const placeLink = (placeId: number) => `https://www.roblox.com/games/${placeId}`;
export const storeAssetLink = (assetId: number) => `https://create.roblox.com/store/asset/${assetId}`;
