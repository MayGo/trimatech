import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { PriceItem } from './PriceItem';
import { PricingImage } from './animations/PricingImage';

export const Pricing = () => {
    return (
        <Box bg="bgColor" w="full" rounded={20} p={4 * 4}>
            <Box textAlign="center" pb={4 * 4}>
                <Heading size="6xl">Simple & transparent pricing</Heading>
                <Text fontSize="lg" pt={4}>
                    One comprehensive plan for all your React maintenance needs.
                </Text>
            </Box>
            <Flex flexDirection="row" gap={4}>
                <Box>
                    <PriceItem />
                </Box>
                <Box flex="1">
                    <PricingImage />
                </Box>
            </Flex>
        </Box>
    );
};
