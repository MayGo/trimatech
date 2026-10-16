import type { PluginDoc } from './types';

export const cityBuilderDoc: PluginDoc = {
    summary:
        'Two docks on one toolbar. Procedural Model gives parts, folders and models Figma-style auto layout in 3D. City Builder draws roads, zones and procedurally generated buildings on top of it.',
    sections: [
        {
            id: 'procedural-model',
            heading: 'Procedural Model dock',
            blocks: [
                {
                    kind: 'paragraph',
                    text: 'Every node in a procedural model gets a layout mode per axis: fixed, pinStart, pinEnd, stretch, center or repeat. Resize the parent and the resolver re-lays out the whole tree. Pinned parts stick to their edge, stretch parts absorb the difference, and repeat parts tile copies toward the end edge with configurable padding and end caps.'
                },
                {
                    kind: 'bullets',
                    items: [
                        'Templates serialize to a registry, so a model regenerates from its source at any size.',
                        'The dock has an axis constraint editor, a container layout editor, a mini preview and a template selector.'
                    ]
                }
            ]
        },
        {
            id: 'city-builder',
            heading: 'City Builder dock',
            blocks: [
                {
                    kind: 'bullets',
                    items: [
                        'Roads: click to draw a network on a snapping lattice. Straights, curves, T and four-way intersections, elevation with support piers, lane lines and crosswalks.',
                        'Zones: place building zones and the plugin fills the blocks procedurally.',
                        'Skyscraper catalog: Art Deco, brutalist, cylindrical, tiered and more, all built on the same layout system.'
                    ]
                }
            ]
        },
        {
            id: 'building-designer',
            heading: 'Building Designer',
            blocks: [
                {
                    kind: 'bullets',
                    items: [
                        "Tiled buildings recolor from a named theme: red brick, terracotta, sandstone, ochre, oxblood, moss, seafoam, powder blue, limestone, whitewash, slate and charcoal. A building's Theme attribute pins one; Random lets the Seed roll it.",
                        'The Randomize button rolls a new Seed and Theme in one undo step.',
                        'Tiled buildings join automatically when they overlap or touch. Stack one on a roof or push a smaller extension against a side and the covered parts are trimmed. Set the JoinBuildings attribute to false to keep a building separate.',
                        "Resize with Studio's scale tool. Drag one face and the building grows on that side only; Ctrl-drag to grow from the centre. Footprints snap to whole tiles of the building's Step, normally 7.5 studs."
                    ]
                },
                {
                    kind: 'note',
                    text: "Some models and textures come from Roblox's free Creator Store packs (Modular Building Kit - Modern City, Forest Pack, Landscaping Pack - Duvall Drive, City Props Pack, City Road Pack and Realistic Material Variants - Duvall Drive). Roblox owns them."
                }
            ]
        }
    ]
};
