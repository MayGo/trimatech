import { Box, Flex } from '@chakra-ui/react';

const PauseTryItem = () => {
    return (
        <Box w="full" h="200px" rounded={20} p={6} border="2px dashed" borderColor="primary">
            Pause Try Item
        </Box>
    );
};

export const PauseTry = () => {
    return (
        <Box w="full">
            <Flex flexDirection="row" gap={4}>
                <PauseTryItem />
                <PauseTryItem />
            </Flex>
        </Box>
    );
};
