import { Metadata } from 'next';

import { PropsWithChildren, Suspense } from 'react';
import { getURL } from '@/utils/helpers';

import { ThemeProvider } from '@/components/ui/ThemeProvider';

import { Box } from '@chakra-ui/react';
import { Toaster } from '@/components/ui/Toaster';

import { Roboto } from 'next/font/google';
import { M_PLUS_Rounded_1c } from 'next/font/google';
import { HeaderNavbar } from '@/components/ui/Header/HeaderNavbar';
import { Footer } from '@/components/ui/Header/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { AnimatedGradient } from '@/components/ui/AnimatedGradient';
import { GridBackground } from '@/components/ui/HomePageParts/GridBackground';
import { GlowingDotBox } from '@/components/ui/GlowingDotBox';
import { Hero } from '@/components/ui/HomePageParts/Hero';

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto'
});

const mPlusRounded = M_PLUS_Rounded_1c({
    weight: ['700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-mplus',
    preload: false // Add this to prevent the font loading error
});

const meta = {
    title: 'Trimatech',
    description: 'Get access to affordable part-time software development services of high quality.',
    cardImage: '/og.png',
    robots: 'follow, index',
    favicon: '/favicon.ico',
    url: getURL()
};

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: meta.title,
        description: meta.description,
        referrer: 'origin-when-cross-origin',
        keywords: ['Vercel', 'Supabase', 'Next.js', 'Stripe', 'Subscription'],
        authors: [{ name: 'Vercel', url: 'https://vercel.com/' }],
        creator: 'Vercel',
        publisher: 'Vercel',
        robots: meta.robots,
        icons: { icon: meta.favicon },
        metadataBase: new URL(meta.url),
        openGraph: {
            url: meta.url,
            title: meta.title,
            description: meta.description,
            images: [meta.cardImage],
            type: 'website',
            siteName: meta.title
        },
        twitter: {
            card: 'summary_large_image',
            site: '@Vercel',
            creator: '@Vercel',
            title: meta.title,
            description: meta.description,
            images: [meta.cardImage]
        }
    };
}

export default async function RootLayout({ children }: PropsWithChildren) {
    return (
        <html suppressHydrationWarning lang="en" className={`${roboto.variable} ${mPlusRounded.variable}`}>
            <body>
                <ThemeProvider enableColorScheme={false} defaultTheme="light">
                    <Box>
                        <Box maxW="1440px" mx="auto" px={[0, 2, 4]}>
                            <HeaderNavbar />

                            {children}
                            <SpeedInsights />
                            <Footer />
                        </Box>
                    </Box>

                    <Suspense>
                        <Toaster />
                    </Suspense>
                </ThemeProvider>
            </body>
        </html>
    );
}
