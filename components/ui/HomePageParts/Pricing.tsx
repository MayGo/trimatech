import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { PriceItem } from './PriceItem';
import { mainHeadingSize, mainRounded, mainSubtextSize, outerPadding } from '../padding.utils';
import { BusinessValue } from './animations/BusinessValue';
import { PriceForOthers } from './PriceForOthers';

export const Pricing = () => {
    return (
        <Box bg="bgColor" w="full" rounded={mainRounded} p={outerPadding} id="pricing">
            <Box textAlign="center" pb={outerPadding}>
                <Heading size={mainHeadingSize}>Simple & transparent pricing</Heading>
                <Text fontSize={mainSubtextSize} pt={4}>
                    One comprehensive plan for all your React maintenance needs.
                </Text>
            </Box>
            <Flex flexDirection={['column', 'column', 'column', 'row']} gap={4}>
                <Box>
                    <PriceItem />
                </Box>
                <Box flex="1" display="flex" flexDirection="column" gap={4}>
                    <Flex
                        w="full"
                        justifyContent="center"
                        gap={4}
                        flexDirection={['column', 'column', 'column', 'column', 'row']}
                    >
                        <PriceForOthers
                            title="Hiring a full time senior developer"
                            price="10,000"
                            subtext="with the overhead"
                            href="#full-time-engineer"
                        />
                        <PriceForOthers
                            title="Hiring a good development company"
                            price="16,000"
                            subtext="or €100 / hour"
                            href="#development-company"
                        />
                    </Flex>
                    <Box display="flex" alignItems="center" justifyContent="center" height={'530px'}>
                        <BusinessValue />
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};
