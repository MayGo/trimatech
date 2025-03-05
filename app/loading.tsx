import { mainRounded } from '@/components/theme/padding.utils';
import { Skeleton } from '@/components/ui/skeleton';
import { Box, SimpleGrid, VStack } from '@chakra-ui/react';

export default function Loading() {
    return (
        <Box maxW="1440px" mx="auto" px={[0, 2, 4]} minH="100vh" w="full">
            <VStack gap={[4, 6, 6, 6, 10]} w="full">
                {/* Hero Section Skeleton */}
                <Box w="full">
                    <Skeleton height="70px" w="full" mb="1px" bg="bgColor" />
                    <Skeleton height="670px" w="full" roundedBottom={mainRounded} bg="bgColor" />
                </Box>

                <Box w="full">
                    <Box pb={5} pl={[4, 0]}>
                        <Skeleton w="300px" rounded="full" h="60px" bg="bgColor" />
                    </Box>
                    <SimpleGrid columns={[1, 1, 2, 2, 4]} gap={4}>
                        <Skeleton w="full" h="500px" rounded={mainRounded} p={6} minW="300px" bg="bgColor" />
                        <Skeleton w="full" h="500px" rounded={mainRounded} p={6} minW="300px" bg="bgColor" />
                        <Skeleton w="full" h="500px" rounded={mainRounded} p={6} minW="300px" bg="bgColor" />
                        <Skeleton w="full" h="500px" rounded={mainRounded} p={6} minW="300px" bg="bgColor" />
                    </SimpleGrid>
                </Box>
            </VStack>
        </Box>
    );
}
