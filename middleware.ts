import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n/settings';

export default createMiddleware({
    locales,
    defaultLocale: 'en',
    localeDetection: false, // Disable locale detection from Accept-Language header
    localePrefix: 'never', // Don't use locale prefixes in URLs
    domains: [
        {
            domain: 'trimatech.ee',
            defaultLocale: 'et'
        },
        {
            domain: 'trimatech.dev',
            defaultLocale: 'en'
        },
        {
            domain: 'localhost:3000',
            defaultLocale: 'en'
        }
    ]
});

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)']
};
