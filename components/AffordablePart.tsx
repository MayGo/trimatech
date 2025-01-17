import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import type { NextPage } from 'next';
import MainActions from './MainActions';

// TODO: Remove this
const AffordablePart: NextPage = () => {
    return (
        <Box as="section" py={{ base: 8, md: 73, lg: 73 }} px={{ base: 8, md: 16 }} textAlign="center">
            <Flex
                direction="row"
                wrap="wrap"
                align="center"
                justify="start"
                gap={{ base: 20, md: 40, lg: 80 }}
                maxW="full"
            >
                <Flex
                    flex="1"
                    direction="column"
                    align="start"
                    justify="start"
                    py={5}
                    px={0}
                    gap={6}
                    minW={{ base: 'full', md: '400px' }}
                    maxW="full"
                >
                    <Flex direction="column" align="start" justify="start" gap={4}>
                        <Text w="77px" fontSize="lg" fontWeight="semibold" lineHeight="150%" minW="77px">
                            Affordable
                        </Text>
                        <Flex direction="column" align="start" justify="start" gap={6} textAlign="left" fontSize="29xl">
                            <Heading as="h1" fontWeight="bold">
                                Cost-effective subscription model for flexibility and savings
                            </Heading>
                            <Text fontSize="lg" lineHeight="150%">
                                Trimatech offers a unique subscription model that provides cost-effective software
                                development solutions. With our plans, you can save money while enjoying the flexibility
                                to fix bugs and add new features to your existing software.
                            </Text>
                        </Flex>
                    </Flex>
                    <MainActions />
                </Flex>
                <Image
                    h="640px"
                    flex="1"
                    maxW="full"
                    objectFit="cover"
                    minW={{ base: 'full', md: '400px' }}
                    loading="lazy"
                    alt="Placeholder"
                    src="/placeholder-image@2x.png"
                />
            </Flex>
        </Box>
    );
};

export default AffordablePart;
