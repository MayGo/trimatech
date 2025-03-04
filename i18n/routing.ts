import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
import { defaultLocale } from './settings';

export const routing = defineRouting({
    locales: ['en', 'et'],
    defaultLocale: defaultLocale,
    pathnames: {}
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, permanentRedirect, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
