import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
import { defaultLocale, locales } from './settings';

export const routing = defineRouting({
    localeDetection: false,
    locales,
    defaultLocale
});

export type Locale = (typeof routing.locales)[number];

export const { Link, permanentRedirect, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
