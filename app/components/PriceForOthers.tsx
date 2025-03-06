import { mainRound } from '@/components/theme/padding.utils';
import { Box, Heading, IconButton, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import NextLink from 'next/link';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';

export const PriceForOthers = ({
    title,
    price,
    subtext,
    href
}: {
    title: string;
    price: string;
    subtext: string;
    href: string;
}) => {
    const t = useTranslations('priceForOthers');

    return (
        <Box borderWidth="1px" borderRadius={mainRound} borderColor="borderColor" p={8} w="full" position="relative">
            <Text fontSize="larger" fontWeight="semibold" mb={2}>
                {title}
            </Text>
            <Text fontSize="lg" fontWeight="light" mb={2}>
                {t('upTo')}{' '}
                <Heading as="span" size={'3xl'} fontWeight="bold" color="red.500">
                    €{price}
                </Heading>{' '}
                {t('perMonth')}
            </Text>
            <Text fontSize="lg" fontWeight="light">
                {subtext}
            </Text>
            <NextLink href={href} passHref legacyBehavior>
                <IconButton as="a" aria-label={t('goToSection')} position="absolute" bottom="4" right="4">
                    <MdOutlineKeyboardDoubleArrowDown />
                </IconButton>
            </NextLink>
        </Box>
    );
};
