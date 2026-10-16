'use client';

import { Button } from '@/components/ui/button';
import { ROBLOX_GROUP_LINK } from '@/utils/constants';
import { Flex } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { SiRoblox } from 'react-icons/si';

const sections = ['games', 'plugins', 'mission', 'contact'] as const;

type Props = {
    stacked?: boolean;
    /** Called after any link is clicked, so a containing menu can close itself. */
    onNavigate?: () => void;
};

export default function Navlinks({ stacked = false, onNavigate }: Props) {
    const t = useTranslations('navLinks');
    const fullWidth = stacked ? 'full' : 'auto';

    return (
        <Flex direction={stacked ? 'column' : 'row'} align="center" gap={stacked ? 2 : 1} w={fullWidth}>
            {sections.map((section) => (
                <Button
                    key={section}
                    asChild
                    variant="ghost"
                    size="md"
                    color="fg.muted"
                    _hover={{ color: 'fg', bg: 'surfaceRaised' }}
                    w={fullWidth}
                >
                    <Link href={`/#${section}`} onClick={onNavigate}>
                        {t(section)}
                    </Link>
                </Button>
            ))}
            <Button asChild colorPalette="blue" size="md" ml={stacked ? 0 : 2} mt={stacked ? 2 : 0} w={fullWidth}>
                <a href={ROBLOX_GROUP_LINK} target="_blank" rel="noreferrer" onClick={onNavigate}>
                    <SiRoblox />
                    {t('playOnRoblox')}
                </a>
            </Button>
        </Flex>
    );
}
