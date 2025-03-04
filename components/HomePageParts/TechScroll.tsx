import { Box, Heading } from '@chakra-ui/react';
import { mainHeadingSize } from '../theme/padding.utils';
import TechScrollingLogos from './TechScrollingLogos';

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
