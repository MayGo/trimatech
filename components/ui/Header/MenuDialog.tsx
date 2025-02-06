'use client';
import Navlinks from './Navlinks';
import { Box, IconButton } from '@chakra-ui/react';
import { NextPage } from 'next';
import { IoMenu } from 'react-icons/io5';

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
                <IconButton aria-label="Options" variant="outline" colorPalette="blue" rounded="xl">
                    <IoMenu />
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
    );
};
