import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
import { defaultLocale } from './settings';

export const routing = defineRouting({
    localeDetection: false,
    locales: ['en', 'et'],
    defaultLocale: defaultLocale,
    pathnames: {},
    domains: [
        {
            domain: 'trimatech.ee',
            defaultLocale: 'et',
            locales: ['et']
        },
        {
            domain: 'trimatech.dev',
            defaultLocale: 'en'
        },
        {
            domain: 'localhost:3000',
            defaultLocale: 'et'
        }
    ]
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, permanentRedirect, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
