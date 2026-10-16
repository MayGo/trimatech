'use client';

/**
 * next-intl's server-side Link resolves the locale with React.use(), so React streams it as a
 * lazy node. Chakra's asChild calls React.Children.only on it and throws. Re-exporting the
 * client Link from a client module gives server components a plain element to pass instead.
 */
export { Link as LocaleLink } from '@/i18n/routing';
