'use client';

import { Flex, Link as ChakraLink } from '@chakra-ui/react';
import { SignOut } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { usePathname, useRouter } from 'next/navigation';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';
import NextLink from 'next/link';
import { Button } from '../button';
interface NavlinksProps {
    user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
    const router = getRedirectMethod() === 'client' ? useRouter() : null;

    return (
        <Flex flexDirection="row" alignItems="center" justifyContent="center" gap="8" maxW="full">
            <Flex flex="1" overflow="hidden" flexDirection="row" alignItems="end" gap="8">
                <ChakraLink href="/pricing" fontWeight="semibold">
                    About Us
                </ChakraLink>
                <ChakraLink href="/pricing" fontWeight="semibold">
                    Services
                </ChakraLink>
                <ChakraLink href="/pricing" fontWeight="semibold">
                    Contact Us
                </ChakraLink>
                <ChakraLink href="/pricing" fontWeight="semibold">
                    Pricing
                </ChakraLink>
                {user && (
                    <ChakraLink href="/account" fontWeight="semibold">
                        Account
                    </ChakraLink>
                )}
            </Flex>

            {user ? (
                <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
                    <input type="hidden" name="pathName" value={usePathname()} />
                    <Button type="submit" variant="outline">
                        Sign out
                    </Button>
                </form>
            ) : (
                <NextLink href="/signin">
                    <Button variant="solid" bg="primary" w="150px" color="white">
                        Sign In
                    </Button>
                </NextLink>
            )}
        </Flex>
    );
}
