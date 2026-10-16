import { mainRound, outerPadding } from '@/components/theme/padding.utils';
import { Skeleton } from '@/components/ui/skeleton';
import { Box, SimpleGrid, Stack } from '@chakra-ui/react';

export default function Loading() {
    return (
        <Box maxW="1440px" mx="auto" px={outerPadding} minH="100vh" w="full">
            <Stack gap={16} pt={20}>
                <Stack gap={6} maxW="680px">
                    <Skeleton h="28px" w="160px" rounded="full" bg="surface" />
                    <Skeleton h="140px" w="full" rounded="2xl" bg="surface" />
                    <Skeleton h="60px" w="80%" rounded="2xl" bg="surface" />
                </Stack>
                <SimpleGrid columns={[1, 1, 2, 2, 3]} gap={5}>
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                        <Skeleton key={index} h="260px" w="full" rounded={mainRound} bg="surface" />
                    ))}
                </SimpleGrid>
            </Stack>
        </Box>
    );
}
