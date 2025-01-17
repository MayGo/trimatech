import { Box, Flex, Text } from '@chakra-ui/react';

interface SeparatorProps {
    text: string;
}

export default function Separator({ text }: SeparatorProps) {
    return (
        <Box position="relative">
            <Flex position="relative" alignItems="center">
                <Box flex="1" borderTop="1px" borderColor="gray.700" borderStyle="solid" />
                <Text mx={3} flexShrink={0} fontSize="sm" color="gray.500">
                    {text}
                </Text>
                <Box flex="1" borderTop="1px" borderColor="gray.700" borderStyle="solid" />
            </Flex>
        </Box>
    );
}
