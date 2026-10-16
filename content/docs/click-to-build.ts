import type { PluginDoc } from './types';

export const clickToBuildDoc: PluginDoc = {
    summary:
        'Every tool in Click to Build works the same way: hover to see a live preview, click to place. Nothing is dragged, sized or rotated by hand.',
    sections: [
        {
            id: 'getting-started',
            heading: 'Getting started',
            blocks: [
                {
                    kind: 'steps',
                    items: [
                        'Install the plugin from the Creator Store and open it from the Studio toolbar.',
                        'Pick a tool in the panel. The viewport shows a translucent preview that follows your mouse.',
                        'Click to place. Grid and surface snapping are on by default, and live measurements show the size you are about to commit.',
                        'Undo and redo work as usual. Turn on "Union on finish" when you want the result as one part.'
                    ]
                },
                {
                    kind: 'note',
                    text: 'The Click to Build Demo place on Roblox is built entirely with the plugin. Open it to see what each tool produces.'
                }
            ]
        },
        {
            id: 'shapes',
            heading: 'Shapes',
            blocks: [
                {
                    kind: 'paragraph',
                    text: 'There are 23 shapes: Block, Wedge, Corner, Cylinder, Sphere, Polygon, Pyramid, Stairs, Arc, Donut, Pipe, Seat and more. Each one is placed with two clicks.'
                },
                {
                    kind: 'steps',
                    items: [
                        'Click once to set the footprint on the surface you are hovering.',
                        'Move the mouse to set the height and click again to commit.'
                    ]
                }
            ]
        },
        {
            id: 'walls-roads-fences',
            heading: 'Walls, roads and fences',
            blocks: [
                {
                    kind: 'paragraph',
                    text: 'Line and Curve tools fill between the points you click. Points stay editable after placement, so you can fix a corner without starting over.'
                },
                {
                    kind: 'bullets',
                    items: [
                        'Corner styles: Round, Chamfer, Bevel or Sharp.',
                        'Close the loop to make a room or an enclosure.',
                        'Use any Part or Model as a template and it repeats along the path. Magic Merge closes the seams between copies.'
                    ]
                }
            ]
        },
        {
            id: 'stamp-and-voxel',
            heading: 'Stamp and Voxel',
            blocks: [
                {
                    kind: 'bullets',
                    items: [
                        'Stamp extrudes a new part off whichever face you hover.',
                        'Voxel stacks or carves grid cells while you drag, like building with blocks.'
                    ]
                }
            ]
        },
        {
            id: 'cut-and-adjust',
            heading: 'Cut and adjust',
            blocks: [
                {
                    kind: 'bullets',
                    items: [
                        'Punch turns any shape into a cutter that removes material from what it overlaps.',
                        'Katana slashes through parts along the line you draw.',
                        'Laser cuts freehand.',
                        'Door hinges a gate into an existing wall.',
                        'Nudger moves a face in small steps.',
                        'Resizer stretches a whole build at once.'
                    ]
                }
            ]
        }
    ]
};
