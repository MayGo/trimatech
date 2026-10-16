import { Footer } from '@/components/Header/Footer';
import { HeaderNavbar } from '@/components/Header/HeaderNavbar';
import { routing } from '@/i18n/routing';
import { isLocale } from '@/i18n/settings';
import { getURL } from '@/utils/helpers';
import { Box } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';

const meta = {
    cardImage: '/og.png',
    robots: 'follow, index',
    favicon: '/favicon.ico',
    url: getURL()
};

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata' });
    const title = t('title');
    const description = t('description');

    return {
        title,
        description,
        referrer: 'origin-when-cross-origin',
        keywords: t.raw('keywords'),
        authors: [
            { name: 'Trimatech', url: 'https://trimatech.dev/' },
            { name: 'Maigo Erit', url: 'https://trimatech.dev/' }
        ],
        creator: 'Trimatech',
        publisher: 'Trimatech',
        robots: meta.robots,
        icons: {
            icon: meta.favicon,
            apple: [{ url: '/apple-icon.png' }]
        },
        metadataBase: new URL(meta.url),
        alternates: {
            canonical: '/'
        },
        openGraph: {
            url: meta.url,
            title,
            description,
            images: [{ url: meta.cardImage, width: 1200, height: 630, alt: t('ogAlt') }],
            type: 'website',
            siteName: 'Trimatech Games',
            locale: locale === 'et' ? 'et_EE' : 'en_US'
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [{ url: meta.cardImage, alt: t('twitterAlt') }]
        }
    };
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

type Props = {
    children: ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    if (!isLocale(locale)) {
        notFound();
    }

    // Enable static rendering for this locale
    setRequestLocale(locale);

    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            <HeaderNavbar />
            <Box as="main" maxW="1440px" mx="auto">
                {children}
            </Box>
            <Box maxW="1440px" mx="auto">
                <Footer />
            </Box>
        </NextIntlClientProvider>
    );
}
