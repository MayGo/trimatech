'use client';
import Navlinks from './Navlinks';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { NextPage } from 'next';
import { Logo } from './Logo';
import { outerPadding } from '../padding.utils';
import { useState } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';

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
                    <DialogRoot size="xl">
                        <DialogTrigger>
                            <IconButton aria-label="Options" variant="outline" colorPalette="blue" rounded="xl">
                                <HamburgerIcon />
                            </IconButton>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogCloseTrigger />
                            <DialogHeader>
                                <DialogTitle></DialogTitle>
                            </DialogHeader>
                            <DialogBody>
                                <Box w="full" justifyItems="center">
                                    <Navlinks />
                                </Box>
                            </DialogBody>
                            <DialogFooter />
                        </DialogContent>
                    </DialogRoot>
                </Box>
            </Flex>
        </Box>
    );
};
