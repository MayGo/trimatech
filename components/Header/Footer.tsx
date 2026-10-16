import { outerPadding } from '@/components/theme/padding.utils';
import { GITHUB_LINK, PRIVACY_POLICY_LINK, ROBLOX_GROUP_LINK, TERMS_AND_CONDITIONS_LINK } from '@/utils/constants';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { Logo } from './Logo';

export const Footer = () => {
    const t = useTranslations('footer');

    const links = [
        { label: t('robloxGroup'), href: ROBLOX_GROUP_LINK },
        { label: t('github'), href: GITHUB_LINK },
        { label: t('privacyPolicy'), href: PRIVACY_POLICY_LINK },
        { label: t('termsOfService'), href: TERMS_AND_CONDITIONS_LINK }
    ];

    return (
        <Box as="footer" w="full" borderTop="1px solid" borderColor="line" mt={[16, 20, 24]} px={outerPadding} py={8}>
            <Flex
                direction={['column', 'column', 'row']}
                justify="space-between"
                align={['flex-start', 'flex-start', 'center']}
                gap={6}
            >
                <Flex align="center" gap={4} flexWrap="wrap">
                    <Logo size="sm" />
                    <Text fontSize="sm" color="fg.subtle">
                        {t('location')}
                    </Text>
                </Flex>
                <Flex gap={6} flexWrap="wrap">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            fontSize="sm"
                            color="fg.muted"
                            _hover={{ color: 'fg', textDecoration: 'none' }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </Flex>
            </Flex>
        </Box>
    );
};
