'use client';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { InlineWidget } from 'react-calendly';
import {
    mainHeadingSize,
    mainRound,
    mainRounded,
    mainSubtextSize,
    outerPadding
} from '../../components/theme/padding.utils';
import { shadowSharp } from '../../components/theme/theme.utils';
import { OnlineVideoChatting } from './animations/OnlineVideoChatting';

export const Discuss = () => {
    return (
        <Flex
            flexDirection={['column', 'column', 'row']}
            bg="bgColor"
            w="full"
            rounded={mainRounded}
            p={outerPadding}
            gap={outerPadding}
            id="book"
        >
            <Flex flexDirection="column" justifyContent="center" alignItems="center" h="full" gap={outerPadding}>
                <Box flex="1">
                    <Heading size={mainHeadingSize}>Let's discuss your project</Heading>
                    <Text fontSize={mainSubtextSize} pt={4}>
                        Schedule a quick call to discuss your React maintenance needs and see if we're a good fit.
                    </Text>
                </Box>
                <Box h="450px" display="flex" alignItems="center" justifyContent="center">
                    <OnlineVideoChatting />
                </Box>
            </Flex>
            <Flex justifyContent="center" alignItems="center" flex="1">
                <Box w="400px" h="fit-content" rounded={mainRound} bg="white" overflow="hidden" shadow={shadowSharp}>
                    <InlineWidget url="https://calendly.com/maigo-erit/30min?hide_event_type_details=1&hide_gdpr_banner=1" />
                </Box>
            </Flex>
        </Flex>
    );
};
