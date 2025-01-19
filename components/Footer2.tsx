import { Box, Flex, Image, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import type { NextPage } from 'next';
import { Logo } from './Logo';
import { mainRounded, outerPadding } from './ui/padding.utils';

const Footer: NextPage = () => {
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
                        © 2024 Trimatech. All rights reserved.
                    </Text>
                </Flex>
                <Flex gap={6} py={[4, 4, 4, 8]}>
                    <NextLink href="/privacy-policy" passHref>
                        <Text textStyle="sm" fontWeight="bold">
                            Privacy Policy
                        </Text>
                    </NextLink>
                    <NextLink href="/terms-and-conditions" passHref>
                        <Text textStyle="sm" fontWeight="bold">
                            Terms and Conditions
                        </Text>
                    </NextLink>
                    <NextLink href="/cookies-settings" passHref>
                        <Text textStyle="sm" fontWeight="bold">
                            Cookies Settings
                        </Text>
                    </NextLink>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;
