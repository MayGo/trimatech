import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { Toaster } from '@/components/ui/Toaster';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { M_PLUS_Rounded_1c, Roboto } from 'next/font/google';
import type { ReactNode } from 'react';
import { Suspense } from 'react';

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto'
});

const mPlusRounded = M_PLUS_Rounded_1c({
    weight: ['500', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-mplus',
    preload: false
});

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#070A12'
};

interface Props {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: Props) {
    const { locale } = await params;

    return (
        <html suppressHydrationWarning lang={locale} className={`${roboto.variable} ${mPlusRounded.variable} dark`}>
            <body>
                <ThemeProvider enableColorScheme={false} enableSystem={false} forcedTheme="dark" defaultTheme="dark">
                    {children}
                    <Suspense>
                        <Toaster />
                    </Suspense>
                </ThemeProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
