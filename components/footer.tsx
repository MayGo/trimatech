import { Box, Flex, Image, Text, Link as ChakraLink } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Logo } from './Logo';

const Footer: NextPage = () => {
    return (
        <Box
            as="footer"
            bg="background-color-alternate"
            overflow="hidden"
            py={8}
            gap={6}
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
        >
            <Flex
                w="full"
                flexDirection="row"
                alignItems="start"
                justifyContent="space-between"
                gap={{ base: '8px', lg: '32px', sm: '16px' }}
                flexWrap={{ lg: 'wrap' }}
            >
                <Logo size="sm" />
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

            <Box flex="1" borderTop="1px" borderColor="white" borderStyle="solid" h="1px" w="full" />
            <Flex
                w="full"
                flexDirection="row"
                alignItems="start"
                justifyContent="space-between"
                gap="20px"
                flexWrap={{ md: 'wrap' }}
                fontSize="sm"
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
        </Box>
    );
};

export default Footer;
