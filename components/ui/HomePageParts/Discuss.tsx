'use client';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { DiscussImage } from './animations/DiscussImage';

import { InlineWidget } from 'react-calendly';

export const Discuss = () => {
    return (
        <Flex bg="bgColor" w="full" rounded={20} p={4 * 4} gap={4 * 4}>
            <Flex flexDirection="column" justifyContent="center" alignItems="center" h="full" gap={4 * 4}>
                <Box flex="1">
                    <Heading size="6xl">Let's discuss your project</Heading>
                    <Text fontSize="lg" pt={4}>
                        Schedule a quick call to discuss your React maintenance needs and see if we're a good fit.
                    </Text>
                </Box>
                <Box h="400px">
                    <DiscussImage />
                </Box>
            </Flex>
            <Flex justifyContent="center" alignItems="center" flex="1">
                <Box w="400px" h="fit-content" rounded={20} bg="white" overflow="hidden">
                    <InlineWidget url="https://calendly.com/maigo-erit/30min?hide_event_type_details=1&hide_gdpr_banner=1" />
                </Box>
            </Flex>
        </Flex>
    );
};
