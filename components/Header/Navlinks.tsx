import { LOGIN_LINK } from '@/utils/constants';
import { SimpleGrid } from '@chakra-ui/react';
import NextLink from 'next/link';
import { LuCalendarDays } from 'react-icons/lu';
import { Button } from '../ui/button';

export default function Navlinks() {
    return (
        <SimpleGrid columns={[1, 3]} gap="4" flex="1" maxW="500px" w="full">
            <NextLink href={LOGIN_LINK} passHref legacyBehavior>
                <Button as="a" variant="outline" w="full" colorPalette="blue">
                    Sign In
                </Button>
            </NextLink>

            <NextLink href="#book" passHref legacyBehavior>
                <Button variant="outline" w="full" colorPalette="blue">
                    <LuCalendarDays />
                    Book a Call
                </Button>
            </NextLink>

            <NextLink href="#pricing" passHref legacyBehavior>
                <Button variant="solid" w="full" colorPalette="blue">
                    See pricing
                </Button>
            </NextLink>
        </SimpleGrid>
    );
}
