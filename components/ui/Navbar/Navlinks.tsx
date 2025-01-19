'use client';

import { Flex, Link as ChakraLink } from '@chakra-ui/react';
import { SignOut } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { usePathname, useRouter } from 'next/navigation';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';
import NextLink from 'next/link';
import { Button } from '../button';
import { LuCalendar, LuCalendar1, LuCalendarDays } from 'react-icons/lu';
interface NavlinksProps {
    user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
    const router = getRedirectMethod() === 'client' ? useRouter() : null;

    return (
        <Flex flexDirection="row" alignItems="center" justifyContent="center" gap="8" maxW="full">
            <Flex flex="1" flexDirection="row" alignItems="end" gap="8">
                {user ? (
                    <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
                        <input type="hidden" name="pathName" value={usePathname()} />
                        <Button type="submit" variant="outline">
                            Sign out
                        </Button>
                    </form>
                ) : (
                    <NextLink href="/signin">
                        <Button variant="outline" w="150px" colorPalette="blue">
                            Sign In
                        </Button>
                    </NextLink>
                )}
                <NextLink href="/signin">
                    <Button variant="outline" w="150px" colorPalette="blue">
                        <LuCalendarDays />
                        Book a Call
                    </Button>
                </NextLink>
                <NextLink href="/signin">
                    <Button variant="solid" colorPalette="blue" w="150px">
                        See pricing
                    </Button>
                </NextLink>
                {/* {user && (
                    <ChakraLink href="/account" fontWeight="semibold">
                        Account
                    </ChakraLink>
                )} */}
            </Flex>
        </Flex>
    );
}
