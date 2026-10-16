import type { PluginDoc } from './types';

export const voxelizerDoc: PluginDoc = {
    summary:
        'Pick a part, model or union, set the block size, press Generate. The result lands in place or beside the original with one undo for the lot.',
    sections: [
        {
            id: 'output',
            heading: 'Blocks or mesh',
            blocks: [
                {
                    kind: 'bullets',
                    items: [
                        'Blocks gives you separate parts. Adjacent blocks with the same color and material are greedy-merged into larger parts to keep the count down.',
                        'Mesh builds MeshParts right in Studio, so tens of thousands of blocks become a handful of parts.',
                        'Mesh colors can be baked into a generated texture (fewest triangles) or painted on the vertices (crisp edges, no image). Faces nobody can see are skipped.'
                    ]
                }
            ]
        },
        {
            id: 'colors',
            heading: 'Colors',
            blocks: [
                {
                    kind: 'bullets',
                    items: [
                        'True colors are photographed off your own model, so textures and decals come out as they look, not as Part.Color says.',
                        'Max colors groups look-alike shades, so a dozen near-pinks come back as one pink.',
                        'Layer and core colors decide whether interior voxels keep their true color or blend the surface color inward.'
                    ]
                }
            ]
        },
        {
            id: 'shape',
            heading: 'Shape and detail',
            blocks: [
                {
                    kind: 'bullets',
                    items: [
                        'Meshes voxelize to their real silhouette, not their bounding box. Pick box, fast (a 6-view carve of the whole model) or precise (per-part renders).',
                        'Roundness adds extra carve angles so round meshes come out round instead of stepped.',
                        'Solid or hollow fill, with block sizes down to 0.05 studs.',
                        'Per-voxel templates place any part or model at each voxel instead of a plain block.'
                    ]
                }
            ]
        }
    ]
};
