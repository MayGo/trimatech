'use client';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';

interface GridBackgroundProps {
    title: string;
    description: string;
    showAvailability?: boolean;
}

export function GridBackground({ title, description, showAvailability = true }: GridBackgroundProps) {
    return (
        <Box
            px="10"
            py="20"
            rounded="md"
            position="relative"
            mx="18"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="rgba(15, 15, 15, 1)"
            backgroundImage={`
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `}
            backgroundSize="20px 20px"
        >
            <Box
                w="3"
                h="3"
                rounded="full"
                position="absolute"
                boxShadow="0 0 15px"
                shadowColor="currentColor"
                zIndex={10}
                bg="currentColor"
                animation="borderFollow 6s linear infinite, colorChange 6s linear infinite"
                m={'-10px'}
            />

            <Box
                position="absolute"
                inset="0"
                border="2px solid"
                rounded="md"
                animation="borderColorChange 6s linear infinite"
            />

            <Flex direction="column" align="center" position="relative" zIndex={20} textAlign="center" maxW="7xl">
                <Heading fontSize="6xl" fontWeight="bold" color="white">
                    {title}
                </Heading>

                {description && (
                    <Text mt={5} color="gray.300">
                        {description}
                    </Text>
                )}

                {showAvailability && (
                    <Flex align="center" justify="center" mt={5} color="#20bb5a" fontSize="sm">
                        <Box
                            w="2"
                            h="2"
                            bg="#20bb5a"
                            rounded="full"
                            mr="2"
                            animation="pulse 2s infinite"
                            boxShadow="0 0 8px #20bb5a"
                        />
                        Call Now
                    </Flex>
                )}
            </Flex>
        </Box>
    );
}
