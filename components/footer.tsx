import { Box, Flex, Image, Text, Link as ChakraLink } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Footer: NextPage = () => {
    return (
        <Box
            as="footer"
            bg="background-color-alternate"
            overflow="hidden"
            py={{ base: '20', md: '52' }}
            px={{ base: '16', md: '8' }}
            gap={{ base: '8px', md: '40px', sm: '20px' }}
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
            textAlign="left"
            fontSize="sm"
        >
            <Flex
                w="full"
                flexDirection="row"
                alignItems="start"
                justifyContent="space-between"
                gap={{ base: '8px', lg: '32px', sm: '16px' }}
                flexWrap={{ lg: 'wrap' }}
            >
                <Box w="189px" h="75px" overflow="hidden" flexShrink={0}>
                    <Image
                        position="absolute"
                        top="16px"
                        left="15px"
                        w="157px"
                        h="42px"
                        objectFit="cover"
                        loading="lazy"
                        alt="Trimatech Logo"
                        src="/trimatech-logo33real1-1@2x.png"
                    />
                </Box>
                <Flex flexDirection="column" alignItems="start" justifyContent="start" gap="24px">
                    <Flex flexDirection="row" alignItems="start" justifyContent="start" gap="12px">
                        {['facebook', 'instagram', 'x', 'linkedin'].map((icon) => (
                            <Image
                                key={icon}
                                h="6"
                                w="6"
                                objectFit="cover"
                                loading="lazy"
                                alt={`${icon} icon`}
                                src={`/icon--${icon}.svg`}
                            />
                        ))}
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                w="full"
                flexDirection="column"
                alignItems="start"
                justifyContent="start"
                gap={{ base: '32px', md: '16px' }}
            >
                <Box h="1px" bg="background-color-alternate" border="1px solid" />
                <Flex
                    w="full"
                    flexDirection="row"
                    alignItems="start"
                    justifyContent="space-between"
                    gap="20px"
                    flexWrap={{ md: 'wrap' }}
                >
                    <Text h="21px" w="240px" lineHeight="150%">
                        © 2024 Trimatech. All rights reserved.
                    </Text>
                    <Flex
                        w="377px"
                        flexDirection="row"
                        alignItems="start"
                        justifyContent="start"
                        gap="24px"
                        flexWrap={{ sm: 'wrap' }}
                    >
                        {['Privacy Policy', 'Terms and Conditions', 'Cookies Settings'].map((text, index) => (
                            <ChakraLink
                                key={index}
                                h="21px"
                                lineHeight="150%"
                                textDecoration="underline"
                                minW={index === 1 ? '89px' : 'auto'}
                            >
                                {text}
                            </ChakraLink>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;
