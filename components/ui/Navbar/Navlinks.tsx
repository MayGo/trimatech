import { Flex } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Button } from '../button';
import { LuCalendarDays } from 'react-icons/lu';
import { LOGIN_LINK } from '@/utils/constants';

export default function Navlinks() {
    return (
        <Flex flexDirection="row" alignItems="center" justifyContent="center" gap="8" maxW="full">
            <Flex flex="1" flexDirection={['column', 'row']} alignItems="end" gap="4">
                <NextLink href={LOGIN_LINK}>
                    <Button variant="outline" w="150px" colorPalette="blue">
                        Sign In
                    </Button>
                </NextLink>

                <NextLink href="#book">
                    <Button variant="outline" w="150px" colorPalette="blue">
                        <LuCalendarDays />
                        Book a Call
                    </Button>
                </NextLink>
                <NextLink href="#pricing">
                    <Button variant="solid" colorPalette="blue" w="150px">
                        See pricing
                    </Button>
                </NextLink>
            </Flex>
        </Flex>
    );
}
