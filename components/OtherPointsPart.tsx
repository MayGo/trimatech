import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import type { NextPage } from 'next';

const OtherPointsPart: NextPage = () => {
    return (
        <Box
            as="section"
            bg="background-color-alternate"
            overflow="hidden"
            py={{ base: '47px', md: '73px', lg: '16' }}
            px={{ base: '8', lg: '16' }}
            textAlign="left"
            fontSize="13xl"
        >
            <Flex flexDirection="row" flexWrap="wrap" alignItems="start" justifyContent="start" maxW="full">
                <Flex
                    flex="1"
                    flexDirection="column"
                    alignItems="start"
                    justifyContent="start"
                    pt={{ base: '34px', lg: '52px' }}
                    maxW="full"
                >
                    <Flex
                        flexDirection="column"
                        alignItems="start"
                        justifyContent="start"
                        gap={{ base: '20px', lg: '40px' }}
                        maxW="full"
                    >
                        {[
                            {
                                title: 'Part-time software development services',
                                description:
                                    'Trimatech offers part-time software development services to small and medium-sized companies. Our team of experienced developers can help you fix bugs, add new features, and enhance your existing software.'
                            },
                            {
                                title: 'Flexible development solutions',
                                description:
                                    'With our flexible development solutions, you can choose the plan that suits your needs. Whether you need a steady amount of development time or the ability to pause your subscription during inactive months, we have you covered.'
                            },
                            {
                                title: 'Quality and value',
                                description:
                                    'At Trimatech, we are committed to delivering high-quality work in a short timeframe. Our goal is to provide you with exceptional value, offering more than just bug fixes and feature additions. We strive to transform your software into a reliable, feature-rich, and future-proof asset.'
                            }
                        ].map((point, index) => (
                            <Flex
                                key={index}
                                flexDirection="column"
                                alignItems="start"
                                justifyContent="start"
                                gap="16px"
                                minW={{ base: 'full', lg: '380px' }}
                                maxW="full"
                                flex="1"
                            >
                                <Heading
                                    as="h1"
                                    m="0"
                                    textAlign="inherit"
                                    lineHeight={{ base: '25px', md: '33px', lg: '130%' }}
                                    fontSize={{ base: 'lgi', md: '7xl', lg: '3xl' }}
                                    fontWeight="bold"
                                >
                                    {point.title}
                                </Heading>
                                <Text textAlign="inherit" lineHeight="150%">
                                    {point.description}
                                </Text>
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
                <Image flex="1" maxW="full" objectFit="cover" mr="-64px" src="/placeholder-image-2@2x.png" alt="" />
            </Flex>
        </Box>
    );
};

export default OtherPointsPart;
