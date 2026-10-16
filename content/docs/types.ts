/** One renderable unit inside a docs section. Kept as data so docs need no markdown pipeline. */
export type DocBlock =
    | { readonly kind: 'paragraph'; readonly text: string }
    | { readonly kind: 'bullets'; readonly items: readonly string[] }
    | { readonly kind: 'steps'; readonly items: readonly string[] }
    | { readonly kind: 'note'; readonly text: string }
    | { readonly kind: 'code'; readonly language: 'lua' | 'bash'; readonly code: string };

export type DocSection = {
    /** Used as the anchor id, so keep it url-safe. */
    readonly id: string;
    readonly heading: string;
    readonly blocks: readonly DocBlock[];
};

export type PluginDoc = {
    readonly summary: string;
    readonly sections: readonly [DocSection, ...DocSection[]];
};
