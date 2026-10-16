import type { PluginDoc } from './types';

export const perfAuditorDoc: PluginDoc = {
    summary:
        'Perf Auditor has three views in one dockable panel: Audit scans the place for problems, Live shows engine stats while you play, and Network logs remote traffic.',
    sections: [
        {
            id: 'audit',
            heading: 'Audit',
            blocks: [
                {
                    kind: 'steps',
                    items: [
                        'Open the Audit tab and choose whether to scan the whole place or only the current selection.',
                        'Read the score. It runs from 0 to 100 with an A to F grade. Each critical finding costs 15 points, each warning 5.',
                        'Expand a finding and press Select to highlight its offenders in the Explorer.',
                        'Press Fix where it is offered. Every fix is a single Ctrl+Z step.'
                    ]
                },
                {
                    kind: 'paragraph',
                    text: 'Findings cover mesh and collision fidelity, CSG unions, semi-transparent overdraw, decals and unique textures, particle rates, shadow-casting lights and parts, unanchored parts, legacy body movers, legacy wait, spawn and delay calls, streaming and ReplicatedStorage bloat, sounds and UIStrokes. Workspace also gets a ranking of its heaviest models.'
                },
                {
                    kind: 'bullets',
                    items: [
                        'One-click fixes: RenderFidelity to Automatic, CollisionFidelity to Default, disable light shadows, disable CastShadow on invisible or Neon parts, clamp particle Rate, disable CanTouch on anchored parts.',
                        'The CanTouch fix skips Seats and parts with an active Touched listener.',
                        'Every offender list can switch between a flat list and a location tree, grouped by container, so you can select or skip a whole branch.'
                    ]
                }
            ]
        },
        {
            id: 'crowded-cells',
            heading: 'Crowded grid cells',
            blocks: [
                {
                    kind: 'paragraph',
                    text: 'The audit splits Workspace into an origin-aligned 3D grid and counts parts by their centers. It warns above 500 BaseParts per 64-stud cube and marks a cell critical above twice that. Both numbers are review budgets, not engine limits, and you can change them under Advanced Settings as "Grid cell size" and "Parts per grid cell".'
                },
                {
                    kind: 'bullets',
                    items: [
                        'The finding lists the eight busiest cells, labeled by their minimum XYZ corner in studs.',
                        'Invisible parts count. Terrain, stored templates and attached instances do not.',
                        'Large parts and clusters across cell edges can be undercounted, so treat the result as a pointer, then measure on your target devices.'
                    ]
                }
            ]
        },
        {
            id: 'live',
            heading: 'Live',
            blocks: [
                {
                    kind: 'paragraph',
                    text: 'Engine stats sampled once a second: FPS with a sparkline, frame, heartbeat, physics and render timings, draw calls, scene and shadow triangles, physics primitives and contacts, memory per category and network KB/s. The "Worst frame" row catches hitches that the FPS average hides.'
                }
            ]
        },
        {
            id: 'network',
            heading: 'Network',
            blocks: [
                {
                    kind: 'paragraph',
                    text: 'Start a playtest and the Network tab hooks every RemoteEvent and UnreliableRemoteEvent. You get per-remote totals (messages, total and average estimated bytes), in and out rate sparklines, and a live packet log with an argument preview and a direction filter.'
                },
                {
                    kind: 'bullets',
                    items: [
                        'Warnings flag oversized packets (10 KB and up), repeated packets and high-frequency remotes (more than 20 per second).',
                        'RemoteFunctions appear in the inventory only. Their callbacks cannot be observed from a plugin.'
                    ]
                }
            ]
        }
    ]
};
