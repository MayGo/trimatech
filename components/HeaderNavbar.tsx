'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import Navlinks from './ui/Navbar/Navlinks';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { User } from '@supabase/supabase-js';
import { NextPage } from 'next';
import { Logo } from './Logo';

const HeaderNavbar: NextPage = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const supabase = await createClient();
            const { data } = await supabase.auth.getUser();
            setUser(data.user);
        };

        fetchUser();
    }, []);

    return (
        <Box as="header" py={3} borderBottom="1px solid" borderColor="white" textAlign="left">
            <Flex align="center" justify="space-between" gap={5} maxW="full">
                <Logo />

                <Navlinks user={user} />
            </Flex>
        </Box>
    );
};

export default HeaderNavbar;
