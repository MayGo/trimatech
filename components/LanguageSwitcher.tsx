'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { locales } from '@/i18n/settings';
import { Flex, Text } from '@chakra-ui/react';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { Button } from './ui/button';

export default function LanguageSwitcher() {
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLocaleChange = (newLocale: (typeof locales)[number]) => {
        startTransition(() => {
            router.replace(pathname, { locale: newLocale });
        });
    };

    return (
        <Flex>
            {locales.map((l) => {
                const isActive = l === locale;
                return (
                    <Button
                        size="sm"
                        variant="ghost"
                        colorPalette="blue"
                        disabled={isPending}
                        onClick={() => handleLocaleChange(l)}
                    >
                        <Text textDecoration={isActive ? 'underline' : 'none'}>{l.toUpperCase()}</Text>
                    </Button>
                );
            })}
        </Flex>
    );
}
