import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { GiEuropeanFlag } from 'react-icons/gi';
import { mainHeadingSize, mainRounded, mainSubtextSize, outerPadding } from '../padding.utils';
import { AbstractBg } from './animations/AbstractBg';
import { IntroCallCard } from './IntroCallCard';

export const Hero = () => {
    return (
        <Box position="relative" bg="bgColor" w="full" roundedBottom={mainRounded} p={outerPadding} overflow="hidden">
            <Flex
                flexDirection={['column', 'column', 'row', 'row', 'row']}
                justify="center"
                align="center"
                h="full"
                gap={outerPadding}
            >
                <Flex flexDirection="column" flex="1" gap={6}>
                    <Heading size={mainHeadingSize}>Expert React Maintenance & Development</Heading>
                    <Text fontSize={mainSubtextSize}>
                        Keep your React applications running smoothly with dedicated senior level support. No mid-level
                        teams, no overhead - just direct access to expert maintenance when you need it.
                    </Text>
                    <Flex align="center">
                        <Box bg="primary" p={1} rounded="full">
                            <GiEuropeanFlag color="yellow" size="36px" />
                        </Box>
                        <Text ml={2} fontWeight="medium" fontSize="md">
                            EU-Based
                        </Text>
                    </Flex>
                    <Box flex="1" />
                    <Heading as="h2" size="xl" color="primary">
                        Mission: Make all React apps fast, modern, and user-friendly
                    </Heading>
                </Flex>
                <Box flex="1" h="full" position="relative" justifyItems="center">
                    <Box position="absolute" top="-200px" left="-300px" opacity={0.3}>
                        <AbstractBg />
                    </Box>
                    <IntroCallCard />
                </Box>
            </Flex>
        </Box>
    );
};
