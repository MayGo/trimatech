import type { NextPage } from 'next';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Column1 from './column1';

// TODO: Remove this
const Testimonial: NextPage = () => {
    return (
        <Box
            as="section"
            bg="background-color-alternate"
            overflow="hidden"
            py={{ base: 3, md: 16 }}
            px={{ base: 4, md: 8 }}
            gap={{ base: '20px', md: '40px', lg: '80px' }}
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
            textAlign="left"
            fontSize="29xl"
        >
            <Box
                w={{ base: 'full', md: '560px' }}
                display="flex"
                flexDirection="column"
                alignItems="start"
                justifyContent="start"
                gap={6}
                maxW="full"
            >
                <Heading as="h1" m={0} w="full" fontWeight="bold">
                    Client stories
                </Heading>
                <Text w="full" fontSize="lg" lineHeight="150%">
                    Hear what our clients have to say
                </Text>
            </Box>
            <Flex
                w={{ base: 'full', md: '1280px' }}
                flexDirection="row"
                flexWrap="wrap"
                alignItems="start"
                justifyContent="start"
                gap={{ base: '16px', md: '32px', lg: '64px' }}
                maxW="full"
                fontSize="xl"
            >
                <Column1
                    quote="Our experience with Trimatech has been exceptional. Their team consistently delivers high-quality work and has helped us improve our software significantly."
                    text="John Doe"
                    text1="CTO, ABC Company"
                />
                <Column1
                    quote="Trimatech has been a valuable partner in our software development journey. Their expertise and dedication have made a significant impact on our application's performance and user experience."
                    text="Jane Smith"
                    text1="CEO, XYZ Corporation"
                    propWidth="unset"
                    propFlex="unset"
                    propMinWidth="unset"
                    propMinWidth1="82px"
                    propFlex1="unset"
                    propMinWidth2="unset"
                    propHeight="58.5px"
                    propWidth1="140px"
                    propHeight1="unset"
                    propFlex2="1"
                    propMaxHeight="100%"
                />
            </Flex>
        </Box>
    );
};

export default Testimonial;
