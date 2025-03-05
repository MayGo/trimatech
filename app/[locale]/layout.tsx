import { Metadata } from 'next';
import Head from 'next/head';

import { getURL } from '@/utils/helpers';
import { Suspense } from 'react';

import { ThemeProvider } from '@/components/theme/ThemeProvider';

import { Toaster } from '@/components/ui/Toaster';
import { Box } from '@chakra-ui/react';

import { Footer } from '@/components/Header/Footer';
import { HeaderNavbar } from '@/components/Header/HeaderNavbar';
import { routing } from '@/i18n/routing';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { M_PLUS_Rounded_1c, Roboto } from 'next/font/google';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto'
});

const mPlusRounded = M_PLUS_Rounded_1c({
    weight: ['300', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-mplus',
    preload: false // Add this to prevent the font loading error
});

const meta = {
    title: 'Expert React Maintenance & Development',
    description:
        'Keep your React applications running smoothly with dedicated senior level support. No mid-level teams, no overhead - just direct access to expert maintenance when you need it.',
    cardImage: '/og.png',
    robots: 'follow, index',
    favicon: '/favicon.ico',
    url: getURL()
};

type MetadataTranslation = {
    title: string;
    description: string;
    keywords: string[];
    ogAlt: string;
    twitterAlt: string;
};

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
    const messages = await getMessages();
    const metadata = (messages as unknown as { metadata: MetadataTranslation }).metadata;

    return {
        title: metadata.title,
        description: metadata.description,
        referrer: 'origin-when-cross-origin',
        keywords: metadata.keywords,
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
            title: metadata.title,
            description: metadata.description,
            images: [
                {
                    url: meta.cardImage,
                    width: 1200,
                    height: 630,
                    alt: metadata.ogAlt
                }
            ],
            type: 'website',
            siteName: metadata.title,
            locale: params.locale === 'et' ? 'et_EE' : 'en_US'
        },
        twitter: {
            card: 'summary_large_image',
            site: '@Trimatech',
            creator: '@Trimatech',
            title: metadata.title,
            description: metadata.description,
            images: [
                {
                    url: meta.cardImage,
                    alt: metadata.twitterAlt
                }
            ]
        }
    };
}

type Props = {
    children: ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href={meta.url} />
                <meta http-equiv="Content-Language" content={locale} />
            </Head>
            <html suppressHydrationWarning lang={locale} className={`${roboto.variable} ${mPlusRounded.variable}`}>
                <body>
                    <NextIntlClientProvider messages={messages}>
                        <ThemeProvider enableColorScheme={false} defaultTheme="light">
                            <Box>
                                <Box maxW="1440px" mx="auto" px={[0, 2, 4]}>
                                    <HeaderNavbar />

                                    {children}

                                    <Footer />
                                </Box>
                            </Box>

                            <Suspense>
                                <Toaster />
                            </Suspense>
                        </ThemeProvider>
                    </NextIntlClientProvider>
                    <Analytics />
                    <SpeedInsights />
                </body>
            </html>
        </>
    );
}
