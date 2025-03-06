import { Button } from '@/components/ui/button';
import { LOGIN_LINK } from '@/utils/constants';
import { SimpleGrid } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import NextLink from 'next/link';
import { LuCalendarDays } from 'react-icons/lu';

export default function Navlinks() {
    const t = useTranslations('navLinks');

    return (
        <SimpleGrid columns={[1, 3]} gap="4" flex="1" maxW="500px" w="full">
            <NextLink href={LOGIN_LINK} passHref legacyBehavior>
                <Button as="a" variant="outline" w="full" colorPalette="blue">
                    {t('signIn')}
                </Button>
            </NextLink>

            <NextLink href="#book" passHref legacyBehavior>
                <Button variant="outline" w="full" colorPalette="blue">
                    <LuCalendarDays />
                    {t('bookCall')}
                </Button>
            </NextLink>

            <NextLink href="#pricing" passHref legacyBehavior>
                <Button variant="solid" w="full" colorPalette="blue">
                    {t('seePricing')}
                </Button>
            </NextLink>
        </SimpleGrid>
    );
}
