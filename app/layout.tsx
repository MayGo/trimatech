import { Metadata } from 'next';

import { PropsWithChildren, Suspense } from 'react';
import { getURL } from '@/utils/helpers';

import Footer from '@/components/Footer2';
import HeaderNavbar from '@/components/HeaderNavbar';
import { ThemeProvider } from '@/components/ui/ThemeProvider';

import { Box } from '@chakra-ui/react';
import { ParamsToaster } from '@/components/ui/ParamsToaster/ParamsToaster';
import { Toaster } from '@/components/ui/Toaster';

import { Roboto } from 'next/font/google';
import { M_PLUS_Rounded_1c } from 'next/font/google';

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
                    <Box bg="white">
                        <Box maxW="1440px" mx="auto">
                            <HeaderNavbar />

                            {children}
                            <Footer />
                        </Box>
                    </Box>
                    <Suspense>
                        <ParamsToaster />
                        <Toaster />
                    </Suspense>
                </ThemeProvider>
            </body>
        </html>
    );
}
