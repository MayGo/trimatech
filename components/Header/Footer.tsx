import { mainRounded, outerPadding } from '@/components/theme/padding.utils';
import { PRIVACY_POLICY_LINK, TERMS_AND_CONDITIONS_LINK } from '@/utils/constants';
import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useTranslations } from 'next-intl';
import NextLink from 'next/link';
import { Logo } from './Logo';

export const Footer: NextPage = () => {
    const t = useTranslations('footer');

    return (
        <Box as="footer" bg="bgColor" w="full" roundedTop={mainRounded} mt={6} px={outerPadding}>
            <Flex
                flexDirection={['column', 'column', 'column', 'row']}
                justifyContent="space-between"
                alignItems="center"
                w="full"
                h="full"
            >
                <Flex alignItems="center" gap={4}>
                    <Logo size="sm" />
                    <Text textStyle="sm" fontWeight="extralight" py={4}>
                        {t('location')}
                    </Text>
                </Flex>
                <Flex gap={6} py={[4, 4, 4, 8]}>
                    <NextLink href={PRIVACY_POLICY_LINK} passHref>
                        <Text textStyle="sm" fontWeight="bold">
                            {t('privacyPolicy')}
                        </Text>
                    </NextLink>
                    <NextLink href={TERMS_AND_CONDITIONS_LINK} passHref>
                        <Text textStyle="sm" fontWeight="bold">
                            {t('termsOfService')}
                        </Text>
                    </NextLink>
                </Flex>
            </Flex>
        </Box>
    );
};
