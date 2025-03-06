import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { Toaster } from '@/components/ui/Toaster';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { M_PLUS_Rounded_1c, Roboto } from 'next/font/google';
import Head from 'next/head';
import type { ReactNode } from 'react';
import { Suspense } from 'react';

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

interface Props {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: Props) {
    const { locale } = await params;

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="Content-Language" content={locale} />
            </Head>
            <html suppressHydrationWarning lang={locale} className={`${roboto.variable} ${mPlusRounded.variable}`}>
                <body>
                    <ThemeProvider enableColorScheme={false} defaultTheme="light">
                        {children}
                        <Suspense>
                            <Toaster />
                        </Suspense>
                    </ThemeProvider>
                    <Analytics />
                    <SpeedInsights />
                </body>
            </html>
        </>
    );
}
