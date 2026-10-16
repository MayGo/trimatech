'use client';
import { IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import Navlinks from './Navlinks';

import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';

export const MenuDialog = () => {
    const [open, setOpen] = useState(false);

    return (
        <DialogRoot size="xs" placement="top" open={open} onOpenChange={(event) => setOpen(event.open)}>
            <DialogTrigger asChild>
                <IconButton aria-label="Menu" variant="outline" rounded="full" borderColor="lineStrong">
                    <IoMenu />
                </IconButton>
            </DialogTrigger>
            <DialogContent bg="surface" borderWidth="1px" borderColor="line">
                <DialogCloseTrigger />
                <DialogHeader>
                    <DialogTitle />
                </DialogHeader>
                <DialogBody pb={6}>
                    <Navlinks stacked onNavigate={() => setOpen(false)} />
                </DialogBody>
            </DialogContent>
        </DialogRoot>
    );
};
