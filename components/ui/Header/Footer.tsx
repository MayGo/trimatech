import { Box, Flex, Text, Container, HStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import type { NextPage } from 'next';
import { Logo } from './Logo';
import { mainRounded, outerPadding } from '../padding.utils';
import Link from 'next/link';
import { PRIVACY_POLICY_LINK, TERMS_AND_CONDITIONS_LINK } from '@/utils/constants';

export const Footer: NextPage = () => {
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
                        Headquartered in Tallinn, Estonia
                    </Text>
                </Flex>
                <Flex gap={6} py={[4, 4, 4, 8]}>
                    <NextLink href={PRIVACY_POLICY_LINK} passHref>
                        <Text textStyle="sm" fontWeight="bold">
                            Privacy Policy
                        </Text>
                    </NextLink>
                    <NextLink href={TERMS_AND_CONDITIONS_LINK} passHref>
                        <Text textStyle="sm" fontWeight="bold">
                            Terms of service
                        </Text>
                    </NextLink>
                </Flex>
            </Flex>
        </Box>
    );
};
