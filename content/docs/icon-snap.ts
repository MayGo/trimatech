import type { PluginDoc } from './types';

export const iconSnapDoc: PluginDoc = {
    summary:
        'Select models or folders of models, press Snap, and every model becomes a transparent PNG icon named after it. Icons can stream straight to disk, upload to Roblox, or export by hand.',
    sections: [
        {
            id: 'how-it-works',
            heading: 'How it works',
            blocks: [
                {
                    kind: 'steps',
                    items: [
                        'Capture: each model is cloned into an offscreen ViewportFrame and photographed twice, on black and on white. Per-pixel differencing recovers the true color and alpha, so edges are anti-aliased with no background fringe.',
                        'Compose: the image is downscaled to the chosen resolution (32 to 1024 px) and the effects are applied: brightness, contrast, saturation, hue, an optional outline and an optional background fill.',
                        'Boards: every icon becomes the texture of a quad MeshPart named after its model, grouped under an IconSnapExport model in Workspace.',
                        'Save: pick one of the three paths below in the Save panel.'
                    ]
                },
                {
                    kind: 'note',
                    text: 'Boards are not saved with the place. Their textures live in memory as EditableImages, so export before closing Studio and delete the IconSnapExport model afterwards to free memory.'
                }
            ]
        },
        {
            id: 'save-to-disk',
            heading: 'Save to disk (recommended)',
            blocks: [
                {
                    kind: 'paragraph',
                    text: 'A small companion runs on your machine and writes each icon the moment it is snapped. You only need Node.js.'
                },
                { kind: 'code', language: 'bash', code: 'npx icon-snap' },
                {
                    kind: 'steps',
                    items: [
                        'Run the command above in the folder where the PNGs should land.',
                        'In the plugin\'s Save panel press "Check connection" and allow the localhost HTTP prompt once.',
                        'Snap. Every icon streams to the companion and is written as <ModelName>.png. Large icons are sent in chunks, because HttpService caps request bodies at about 1 MB.'
                    ]
                }
            ]
        },
        {
            id: 'upload-to-roblox',
            heading: 'Upload to Roblox',
            blocks: [
                { kind: 'code', language: 'bash', code: 'npx icon-snap-upload' },
                {
                    kind: 'paragraph',
                    text: 'The first run asks for an Open Cloud API key with Assets read and write plus a user or group id, then remembers them. Pick the Roblox tab in the Save panel and every snap uploads as a Decal. Turn off "Auto-upload new snaps" to upload per icon or with "Upload all" instead.'
                },
                {
                    kind: 'bullets',
                    items: [
                        'Each uploaded icon shows its asset id on its row. Click to select, Ctrl+C to copy. Ids also append to upload-manifest.json next to the PNG copies.',
                        'Roblox images cannot be replaced, so a re-snap uploads a fresh asset. The demoted <name>_old_N take keeps its old id.',
                        'The API key never leaves your machine. The plugin only talks to the local companion.'
                    ]
                }
            ]
        },
        {
            id: 'manual-export',
            heading: 'Manual OBJ export',
            blocks: [
                {
                    kind: 'steps',
                    items: [
                        'Right-click the IconSnapExport model and choose Export Selection, then save the .obj.',
                        'Run the extract command to copy each texture out as <ModelName>.png.'
                    ]
                },
                { kind: 'code', language: 'bash', code: 'npx icon-snap extract <saved>.obj --out icons/' }
            ]
        },
        {
            id: 'framing',
            heading: 'Framing, lighting and capture modes',
            blocks: [
                {
                    kind: 'bullets',
                    items: [
                        'Camera framing is shared across the batch: exact auto-fit plus Yaw, Pitch, Roll, Zoom, FOV and Pan. Presets include Hero 3/4, Front, Isometric, Top-down and Low angle, and you can save your own.',
                        "Exact fit solves the camera against the rendered geometry's corners, so nothing clips. Fit padding (10% by default) leaves room for glows and drop shadows.",
                        "Lighting is Studio-style shading or flat albedo. The optional key light adds a camera-relative key and fill rig with shadows, and the place's Lighting is restored after every shot.",
                        'Offscreen is the default capture mode. ParticleEmitters, Beams, Fire, Smoke, Neon glow, shadows, BillboardGuis, SurfaceGuis and Highlights do not draw there. Switch Capture to "In world (VFX)" for those: the model is cloned high above the map and photographed with the real renderer.'
                    ]
                }
            ]
        }
    ]
};
