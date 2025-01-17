import type { NextPage } from 'next';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { ContactForm } from './ContactForm';

const Contact: NextPage = () => {
    return (
        <Box
            as="section"
            bg="background-color-alternate"
            overflow="hidden"
            display="flex"
            flexDirection="row"
            alignItems="start"
            justifyContent="start"
            py={{ base: '47px', md: '73px', lg: '112px' }}
            px={{ base: 8, md: 16 }}
            textAlign="center"
            gap={{ base: '20px', md: '40px' }}
        >
            <Flex flex="1" flexDirection="row" alignItems="start" justifyContent="start" gap="21px" maxW="full">
                <Flex
                    flexDirection="column"
                    alignItems="start"
                    justifyContent="start"
                    gap="8"
                    minW="350px"
                    maxW="full"
                    flex={{ lg: 1 }}
                >
                    <Flex flexDirection="column" alignItems="start" justifyContent="start" gap="16px" w="full">
                        <Text w="60px" lineHeight="150%" fontWeight="semibold" display="inline-block" minW="60px">
                            Efficient
                        </Text>
                        <Flex
                            flexDirection="column"
                            alignItems="start"
                            justifyContent="start"
                            gap="24px"
                            textAlign="left"
                            fontSize="29xl"
                            w="full"
                        >
                            <Heading as="h1" m="0" fontWeight="bold" w="full">
                                Get in touch
                            </Heading>
                            <Text fontSize="lg" lineHeight="150%" w="full">
                                Have a question or want to learn more? Contact us!
                            </Text>
                        </Flex>
                    </Flex>
                    <ContactForm />
                </Flex>
                <Image
                    flex="1"
                    maxW="full"
                    objectFit="cover"
                    alt=""
                    src="/placeholder-image-3@2x.png"
                    alignSelf="center"
                />
            </Flex>
        </Box>
    );
};

export default Contact;
