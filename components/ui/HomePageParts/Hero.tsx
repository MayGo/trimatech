import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { HeroImage } from './animations/HeroImage';
import { mainHeadingSize, mainRounded, mainSubtextSize, outerPadding } from '../padding.utils';

export const Hero = () => {
    return (
        <Box bg="bgColor" w="full" roundedBottom={mainRounded} p={outerPadding}>
            <Flex
                flexDirection={['column', 'column', 'row', 'row', 'row']}
                justify="center"
                align="center"
                h="full"
                gap={outerPadding}
            >
                <Box flex="1">
                    <Heading size={mainHeadingSize}>Expert React Maintenance & Development</Heading>
                    <Text fontSize={mainSubtextSize} pt={4}>
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
