import { Box, Heading, Text } from '@chakra-ui/react';
import { mainRound } from '../padding.utils';

export const PriceForOthers = ({ title, price, subtext }: { title: string; price: string; subtext: string }) => {
    return (
        <Box borderWidth="1px" borderRadius={mainRound} borderColor="borderColor" p={8} w="full">
            <Text fontSize="larger" fontWeight="semibold" mb={2}>
                {title}
            </Text>
            <Text fontSize="lg" fontWeight="light" mb={2}>
                up to{' '}
                <Heading as="span" size={'3xl'} fontWeight="bold" color="red.500">
                    €{price}
                </Heading>{' '}
                / month
            </Text>
            <Text fontSize="lg" fontWeight="light">
                {subtext}
            </Text>
        </Box>
    );
};
