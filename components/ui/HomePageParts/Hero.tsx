import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { HeroImage } from './animations/HeroImage';

export const Hero = () => {
    return (
        <Box bg="bgColor" w="full" h="600px" roundedBottom={20} p={4 * 4}>
            <Flex justify="center" align="center" h="full" gap={4 * 4}>
                <Box flex="1">
                    <Heading size="6xl">Expert React Maintenance & Development</Heading>
                    <Text fontSize="lg" pt={4}>
                        Keep your React applications running smoothly with dedicated senior-level support. No mid-level
                        teams, no overhead—just direct access to expert maintenance when you need it.
                    </Text>
                </Box>
                <Box flex="1" h="full">
                    <HeroImage />
                </Box>
            </Flex>
        </Box>
    );
};
