import LanguageSwitcher from '@/components/LanguageSwitcher';
import { outerPadding } from '@/components/theme/padding.utils';
import { Box, Flex } from '@chakra-ui/react';
import { Logo } from './Logo';
import { MenuDialog } from './MenuDialog';
import Navlinks from './Navlinks';

export const HeaderNavbar = () => {
    return (
        <Box
            as="header"
            position="sticky"
            top={0}
            zIndex={50}
            bg="rgba(7, 10, 18, 0.72)"
            backdropFilter="blur(14px)"
            borderBottom="1px solid"
            borderColor="line"
        >
            <Flex align="center" justify="space-between" gap={5} px={outerPadding} py={3} maxW="1440px" mx="auto">
                <Logo />

                <Flex display={{ base: 'none', lg: 'flex' }} align="center" gap={3}>
                    <Navlinks />
                    <LanguageSwitcher />
                </Flex>

                <Flex display={{ base: 'flex', lg: 'none' }} align="center" gap={2}>
                    <LanguageSwitcher />
                    <MenuDialog />
                </Flex>
            </Flex>
        </Box>
    );
};
