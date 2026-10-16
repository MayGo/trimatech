'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { locales, type Locale } from '@/i18n/settings';
import { Flex } from '@chakra-ui/react';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { Button } from './ui/button';

export default function LanguageSwitcher() {
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLocaleChange = (newLocale: Locale) => {
        startTransition(() => {
            router.replace(pathname, { locale: newLocale });
        });
    };

    return (
        <Flex bg="surfaceRaised" rounded="full" p={0.5} border="1px solid" borderColor="line">
            {locales.map((l) => {
                const isActive = l === locale;
                return (
                    <Button
                        key={l}
                        size="xs"
                        px={3}
                        variant={isActive ? 'solid' : 'ghost'}
                        colorPalette={isActive ? 'blue' : 'gray'}
                        color={isActive ? 'white' : 'fg.muted'}
                        disabled={isPending}
                        aria-pressed={isActive}
                        onClick={() => handleLocaleChange(l)}
                    >
                        {l.toUpperCase()}
                    </Button>
                );
            })}
        </Flex>
    );
}
