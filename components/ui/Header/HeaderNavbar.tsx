import Navlinks from './Navlinks';
import { Box, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { Logo } from './Logo';
import { outerPadding } from '../padding.utils';
import { MenuDialog } from './MenuDialog';

export const HeaderNavbar: NextPage = () => {
    return (
        <Box as="header" borderBottom="1px solid" borderColor="white" bg="bgColor" textAlign="left" pb={[4, 4, 0]}>
            <Flex
                flexDirection={['row', 'row']}
                align="center"
                justify="space-between"
                gap={5}
                maxW="full"
                px={outerPadding}
            >
                <Logo />

                <Box display={{ base: 'none', md: 'flex' }}>
                    <Navlinks />
                </Box>

                <Box display={{ base: 'flex', md: 'none' }}>
                    <MenuDialog />
                </Box>
            </Flex>
        </Box>
    );
};
