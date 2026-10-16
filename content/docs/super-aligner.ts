import type { PluginDoc } from './types';

export const superAlignerDoc: PluginDoc = {
    summary:
        'Select parts, models or folders, pick an axis, hover a tool to preview it as translucent ghosts, and click. Every operation lands in one undo step.',
    sections: [
        {
            id: 'align-and-distribute',
            heading: 'Align and distribute',
            blocks: [
                {
                    kind: 'bullets',
                    items: [
                        "Align Min, Center or Max along X, Y or Z. Every object's edge or center lines up with the combined bounds of the selection.",
                        'Distribute equal gaps spaces objects evenly while accounting for their real sizes, not just their centers. The outermost objects stay put. Fixed gap lets you type the spacing.',
                        'Flush slides the selection until it sits against the nearest real surface, with an optional gap. Works per object or on the whole selection as one rigid group.',
                        "Equalize sizes on an axis to the biggest, smallest, average, or the anchor's size."
                    ]
                },
                {
                    kind: 'paragraph',
                    text: 'The anchor decides what "the bounds" means: the selection as a whole, a picked reference object, or the last-selected object. An anchor can also drive the plugin\'s axes ("Ref axes"), which is how you align along a rotated object.'
                }
            ]
        },
        {
            id: 'array-and-mirror',
            heading: 'Array and mirror',
            blocks: [
                {
                    kind: 'paragraph',
                    text: 'These tools create copies.'
                },
                {
                    kind: 'bullets',
                    items: [
                        'Linear, grid and radial arrays with counts, gap or center spacing, a per-copy rise for staircases, fill-to-anchor, and ring facing (revolve, in or out).',
                        'Mirror across a plane through the selection, the anchor or a clicked surface point, as a copy or flipping in place.',
                        'Mirror contents reflects every part inside a model or folder individually, so an asymmetric build comes out as a true mirror image.',
                        'Match spacing samples the gap two objects already have and repeats that rhythm.'
                    ]
                }
            ]
        },
        {
            id: 'arrange',
            heading: 'Arrange',
            blocks: [
                {
                    kind: 'paragraph',
                    text: 'Reflow the selection into a grid, arc, square, spiral, a drawn path or an editable bezier curve. Scatter and jitter modifiers add variation, and drop-to-surface settles each object onto whatever is below it.'
                }
            ]
        },
        {
            id: 'gizmos',
            heading: 'Viewport gizmos and snap guides',
            blocks: [
                {
                    kind: 'paragraph',
                    text: "Align plates, distribute rods, equalize discs, spacing and part-scale handles, and rotate rings with a pickable pivot live in the viewport. Smart snap guides draw Figma-style alignment lines while you drag with Studio's own Move tool."
                }
            ]
        },
        {
            id: 'good-to-know',
            heading: 'Good to know',
            blocks: [
                {
                    kind: 'bullets',
                    items: [
                        'Folders behave like models: they align, arrange, rotate and mirror as one group. Pivots are preserved and nothing is reparented.',
                        'A mirror reflects positions and bounds exactly, but a single chiral part (an asymmetric mesh or union, a corner wedge, a decal) still comes out rotated, because a CFrame cannot express a reflection.',
                        "Smart snap commits on release, so it is a separate undo step from Studio's move.",
                        'Copies do not rewire references between objects. Group into a Model first, then array the Model.'
                    ]
                }
            ]
        }
    ]
};
