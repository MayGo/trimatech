'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import Navlinks from './ui/Navbar/Navlinks';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { User } from '@supabase/supabase-js';
import { NextPage } from 'next';

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
        <Box
            as="header"
            bg="background-color-alternate"
            py={3}
            borderBottom="1px solid"
            borderColor="text-alternate"
            textAlign="left"
            fontSize="13xl"
            color="background-color-alternate"
        >
            <Flex align="center" justify="space-between" gap={5} maxW="full">
                <Link href="/" aria-label="Logo">
                    <Flex align="center" justify="center" gap={2.5} w="201px">
                        <Image
                            h="50px"
                            flex="1"
                            maxW="full"
                            objectFit="cover"
                            loading="lazy"
                            alt=""
                            src="/trimatech-logo-1@2x.png"
                        />
                        <Text
                            h="42px"
                            w="147px"
                            lineHeight="130%"
                            textTransform="capitalize"
                            display="none"
                            whiteSpace="nowrap"
                        >
                            Trimatech
                        </Text>
                    </Flex>
                </Link>

                <Navlinks user={user} />
            </Flex>
        </Box>
    );
};

export default HeaderNavbar;
