import { Footer } from '@/components/Header/Footer';
import { HeaderNavbar } from '@/components/Header/HeaderNavbar';
import { routing } from '@/i18n/routing';
import { getURL } from '@/utils/helpers';
import { Box } from '@chakra-ui/react';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';

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
    const { locale } = params;

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
            locale: locale === 'et' ? 'et_EE' : 'en_US'
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

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

interface LayoutProps {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
    const { locale } = await params;

    // Enable static rendering for this locale
    setRequestLocale(locale);

    // Get messages for this locale
    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            <Box>
                <Box maxW="1440px" mx="auto" px={[0, 2, 4]}>
                    <HeaderNavbar />

                    {children}

                    <Footer />
                </Box>
            </Box>
        </NextIntlClientProvider>
    );
}
