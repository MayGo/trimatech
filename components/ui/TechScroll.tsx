import { Box, Heading } from '@chakra-ui/react';
import TechScrollingLogos from './TechScrollingLogos';
import { mainHeadingSize } from './padding.utils';

export const TechScroll = () => {
    return (
        <Box>
            <Box pb={4} pl={[4, 0]}>
                <Heading size={mainHeadingSize}>Technology Stack</Heading>
            </Box>

            <TechScrollingLogos />
        </Box>
    );
};
