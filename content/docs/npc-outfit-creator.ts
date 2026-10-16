import type { PluginDoc } from './types';

export const npcOutfitCreatorDoc: PluginDoc = {
    summary:
        'Build NPC outfits from Marketplace asset ids with a live rig preview. No HumanoidDescription editing by hand.',
    sections: [
        {
            id: 'editor',
            heading: 'Outfit editor',
            blocks: [
                {
                    kind: 'bullets',
                    items: [
                        'Asset id fields for shirt, pants, t-shirt and face, plus every accessory slot: hair, hat, face, neck, shoulder, front, back and waist. A slot can hold several ids.',
                        "Body colors with a color picker and avatar scaling sliders kept within Roblox's valid limits.",
                        'The rig preview updates as you type. A bad asset id shows a warning instead of crashing, and duplicate accessories are removed automatically.'
                    ]
                }
            ]
        },
        {
            id: 'create-and-apply',
            heading: 'Create and apply',
            blocks: [
                {
                    kind: 'bullets',
                    items: [
                        'Create places a ready-anchored R15 NPC in Workspace with one click.',
                        'Apply puts the outfit on any selected R15 NPC. Its scripts and PrimaryPart are preserved.'
                    ]
                }
            ]
        },
        {
            id: 'import-and-presets',
            heading: 'Import, presets and randomize',
            blocks: [
                {
                    kind: 'bullets',
                    items: [
                        "Import any user's current avatar by UserId, or browse a user's friends and grab their outfits, then tweak the result.",
                        'Save unlimited named presets and load, rename or delete them later.',
                        'Randomize the hair, hats, clothing or the whole outfit from a curated catalog.'
                    ]
                }
            ]
        }
    ]
};
