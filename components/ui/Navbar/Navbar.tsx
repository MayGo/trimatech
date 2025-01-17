import { createClient } from '@/utils/supabase/server';
import { Box, Link, Flex } from '@chakra-ui/react';
import Navlinks from './Navlinks';

export default async function Navbar() {
    const supabase = await createClient();

    const {
        data: { user }
    } = await supabase.auth.getUser();

    return (
        <Box as="nav">
            <Link href="#skip" className="sr-only focus:not-sr-only">
                Skip to content
            </Link>
            <Flex maxW="6xl" px="6" mx="auto" alignItems="center" justifyContent="space-between">
                <Navlinks user={user} />
            </Flex>
        </Box>
    );
}
