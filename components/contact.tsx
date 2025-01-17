import type { NextPage } from 'next';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { ContactForm } from './ContactForm';

const Contact: NextPage = () => {
    return (
        <Box
            as="section"
            display="flex"
            flexDirection="row"
            alignItems="start"
            justifyContent="start"
            textAlign="center"
            gap={8}
            py={16}
        >
            <Flex flex="1" flexDirection="row" alignItems="start" justifyContent="start" gap={8} maxW="full">
                <Flex
                    flexDirection="column"
                    alignItems="start"
                    justifyContent="start"
                    gap={8}
                    minW="350px"
                    maxW="full"
                    flex={0.7}
                >
                    <Flex flexDirection="column" alignItems="start" justifyContent="start" gap={8} w="full">
                        <Flex
                            flexDirection="column"
                            alignItems="start"
                            justifyContent="start"
                            gap={8}
                            textAlign="left"
                            w="full"
                        >
                            <Heading fontWeight="bold" w="full" fontSize="3xl">
                                Get in touch
                            </Heading>
                            <Text lineHeight="150%" w="full">
                                Have a question or want to learn more? Contact us!
                            </Text>
                        </Flex>
                    </Flex>
                    <ContactForm />
                </Flex>
                <Box
                    bgImage="url('/placeholder-image-3@2x.png')"
                    bgSize="contain"
                    bgRepeat="no-repeat"
                    bgPos="center"
                    w="full"
                    h="500px"
                    flex={1}
                />
            </Flex>
        </Box>
    );
};

export default Contact;
