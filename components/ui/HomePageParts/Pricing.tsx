import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { PriceItem } from './PriceItem';
import { PricingImage } from './animations/PricingImage';
import { mainHeadingSize, mainRounded, mainSubtextSize, outerPadding } from '../padding.utils';

export const Pricing = () => {
    return (
        <Box bg="bgColor" w="full" rounded={mainRounded} p={outerPadding}>
            <Box textAlign="center" pb={outerPadding}>
                <Heading size={mainHeadingSize}>Simple & transparent pricing</Heading>
                <Text fontSize={mainSubtextSize} pt={4}>
                    One comprehensive plan for all your React maintenance needs.
                </Text>
            </Box>
            <Flex flexDirection={['column', 'column', 'row']} gap={4}>
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
