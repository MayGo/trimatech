import type { PluginDoc } from './types';

export const terrainToolsDoc: PluginDoc = {
    summary:
        'Select parts or a whole model, pick a tool, and check the see-through preview before you apply. Green is terrain that will be added, red is terrain that will be removed. Everything is one undo step.',
    sections: [
        {
            id: 'workflow',
            heading: 'Workflow',
            blocks: [
                {
                    kind: 'steps',
                    items: [
                        'Select the parts or the model the terrain should respond to.',
                        'Pick a tool. The preview updates in place, green for added voxels and red for removed ones.',
                        'Adjust the tool settings until the preview looks right, then apply.',
                        'Ctrl+Z reverts the whole operation.'
                    ]
                }
            ]
        },
        {
            id: 'tools',
            heading: 'Tools',
            blocks: [
                {
                    kind: 'bullets',
                    items: [
                        'Convert turns the selected parts into terrain, either one part at a time or merged into one landmass with gap closing and interior solidify.',
                        'Skirt raises terrain up to the underside of a road or platform so it stops floating, with sloped aprons that blend into the ground.',
                        'Tunnel carves clearance above a path. The ceiling can be flat or round and follows each segment, so a curved road bores a curved tunnel.',
                        "Flatten levels terrain to a part's bottom plane within a reach around it. Hills are carved away and dips filled in one pass.",
                        'Moat digs a water channel along the selected parts and fills it to a level.',
                        'Paint repaints the terrain material under and around a build without changing its shape.',
                        'Smooth softens harsh voxel steps by blending nearby voxels.',
                        'Cut Grass swaps animated Grass voxels for a blade-free material (LeafyGrass by default) so blades stop poking through floors.'
                    ]
                },
                {
                    kind: 'note',
                    text: 'Grass blades only render on the Grass material, which is why Cut Grass is a material swap rather than a height change.'
                }
            ]
        }
    ]
};
