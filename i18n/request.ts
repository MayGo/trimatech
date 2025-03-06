import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, locales } from './settings';

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale;

    // Ensure that a valid locale is used
    if (!locale || !locales.includes(locale as any)) {
        locale = defaultLocale;
    }

    // Dynamic import with better error handling
    const messages = await import(`../messages/${locale}/page.json`);

    return {
        locale,
        messages: {
            ...messages
        }
    };
});
