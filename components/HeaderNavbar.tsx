'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import Navlinks from './ui/Navbar/Navlinks';
import { Box, Flex } from '@chakra-ui/react';
import { User } from '@supabase/supabase-js';
import { NextPage } from 'next';
import { Logo } from './Logo';
import { outerPadding } from './ui/padding.utils';

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
        <Box as="header" borderBottom="1px solid" borderColor="white" bg="bgColor" textAlign="left" pb={[4, 4, 0]}>
            <Flex
                flexDirection={['column', 'column', 'row', 'row', 'row']}
                align="center"
                justify="space-between"
                gap={5}
                maxW="full"
                px={outerPadding}
            >
                <Logo />

                <Navlinks user={user} />
            </Flex>
        </Box>
    );
};

export default HeaderNavbar;
