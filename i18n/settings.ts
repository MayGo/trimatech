export const locales = ['en', 'et'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
