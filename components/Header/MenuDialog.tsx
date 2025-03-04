'use client';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Box, IconButton, Text, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import { IoMenu } from 'react-icons/io5';
import Navlinks from './Navlinks';

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

export const MenuDialog: NextPage = () => {
    return (
        <DialogRoot size="xl">
            <DialogTrigger>
                <IconButton as="a" aria-label="Options" variant="outline" colorPalette="blue" rounded="xl">
                    <IoMenu />
                </IconButton>
            </DialogTrigger>
            <DialogContent>
                <DialogCloseTrigger />
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <VStack w="full" gap={6} align="center">
                        <Navlinks />

                        <Box pt={4}>
                            <Text fontSize="sm" mb={2} textAlign="center">
                                Language
                            </Text>
                            <LanguageSwitcher />
                        </Box>
                    </VStack>
                </DialogBody>
                <DialogFooter />
            </DialogContent>
        </DialogRoot>
    );
};
