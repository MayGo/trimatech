import { Box, Flex, Image, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import type { NextPage } from 'next';
import { Logo } from './Logo';

const Footer: NextPage = () => {
    return (
        <Box as="footer" bg="bgColor" w="full" h="72px" roundedTop={20} mt={6} px={6}>
            <Flex justifyContent="space-between" alignItems="center" w="full" h="full">
                <Flex alignItems="center" gap="12px">
                    <Logo size="sm" />
                    <Text textStyle="sm" fontWeight="extralight">
                        © 2024 Trimatech. All rights reserved.
                    </Text>
                </Flex>
                <Flex gap={6}>
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
