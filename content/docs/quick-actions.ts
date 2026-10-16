import type { PluginDoc } from './types';

export const quickActionsDoc: PluginDoc = {
    summary:
        'A home for the small Luau snippets that are not worth a whole plugin. Save one with a name and icon, run it on your selection, or pin it to the Studio toolbar.',
    sections: [
        {
            id: 'usage',
            heading: 'Usage',
            blocks: [
                {
                    kind: 'steps',
                    items: [
                        'Press the Quick Actions toolbar button to open the panel.',
                        'Press New Action, give it a name, icon, description and Luau code, then save.',
                        'Select instances in the workspace and click the action to run it on that selection.',
                        'Pin an action and it gets its own toolbar button that works even with the panel closed.'
                    ]
                },
                {
                    kind: 'paragraph',
                    text: 'Actions save themselves and follow you across every place and Studio session. Star your favorites and search the list by name. The plugin ships with ready-to-run examples: select all parts, anchor, snap to grid, weld, set material, randomize colors, explode view and more.'
                }
            ]
        },
        {
            id: 'writing-an-action',
            heading: 'Writing an action',
            blocks: [
                {
                    kind: 'paragraph',
                    text: 'Each action runs with plugin, Selection, getSelection(), setSelection() and alert() already in scope.'
                },
                {
                    kind: 'code',
                    language: 'lua',
                    code: `local anchored = 0
for _, instance in ipairs(getSelection()) do
    if instance:IsA("BasePart") then
        instance.Anchored = true
        anchored += 1
    end
end
alert("Anchored " .. anchored .. " parts")`
                },
                {
                    kind: 'bullets',
                    items: [
                        'alert(message, kind) reports your own result. kind is "success" (default), "info", "warning" or "error".',
                        'When an action alerts, the plugin skips its generic confirmation toast.',
                        'Every action runs your own code. There is no loadstring, no require by asset id, nothing hidden.'
                    ]
                }
            ]
        }
    ]
};
