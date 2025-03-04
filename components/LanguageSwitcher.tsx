'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { locales } from '@/i18n/settings';
import { Button, Flex } from '@chakra-ui/react';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLocaleChange = (newLocale: (typeof locales)[number]) => {
        startTransition(() => {
            // Navigate to the same page with the new locale
            router.replace(pathname, { locale: newLocale });
        });
    };

    return (
        <Flex gap={2}>
            {locales.map((l) => (
                <Button
                    key={l}
                    size="sm"
                    variant={l === locale ? 'solid' : 'ghost'}
                    disabled={isPending || l === locale}
                    onClick={() => handleLocaleChange(l)}
                >
                    {l.toUpperCase()}
                </Button>
            ))}
        </Flex>
    );
}
