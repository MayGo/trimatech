import OtherPointsPart from '@/components/OtherPointsPart';
import EngagePart from '@/components/EngagePart';
import UnlockPotentialPart from '@/components/UnlockPotentialPart';
import AffordablePart from '@/components/AffordablePart';
import Testimonial from '@/components/testimonial';
import MainActions from '@/components/MainActions';
import Contact from '@/components/contact';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export default async function HomePage() {
    return (
        <>
            <Flex
                direction="row"
                align="center"
                justify="start"
                py={{ base: '98px', md: '130px', lg: '151px' }}
                px={{ base: 8, md: 16 }}
                bgImage="url('/header--5@3x.png')"
                bgPos="center"
                bgSize="cover"
                bgRepeat="no-repeat"
                textAlign="left"
                fontSize={{ base: '34px', md: '45px' }}
            >
                <Box
                    w="full"
                    maxW="760px"
                    bg="rgba(75, 0, 130, 0.2)"
                    p={8}
                    borderRadius="3xl"
                    backdropFilter="blur(10px)"
                >
                    <Heading fontWeight="bold" lineHeight="moderate" mb="8">
                        Get access to affordable part-time software development services of high quality.
                    </Heading>
                    <Text fontSize="lg" lineHeight="150%" mb="8" fontWeight="light">
                        Maintain and update your apps with subscription
                    </Text>

                    <MainActions />
                </Box>
            </Flex>

            <UnlockPotentialPart />
            <EngagePart />
            <OtherPointsPart />
            <Flex
                direction="column"
                align="start"
                justify="start"
                py={{ base: '84px', md: '129px' }}
                px={{ base: 8, md: 16 }}
                bgImage="url('/cta--3@3x.png')"
                bgSize="cover"
                bgRepeat="no-repeat"
                bgPos="top"
                textAlign="left"
                fontSize={{ base: '10xl', md: '19xl', lg: '29xl' }}
            >
                <Box
                    w="full"
                    maxW="768px"
                    bg="rgba(75, 0, 130, 0.2)"
                    p={8}
                    borderRadius="3xl"
                    backdropFilter="blur(10px)"
                >
                    <Box>
                        <Heading as="h1" fontWeight="bold" textShadow="2px 2px 0px #000">
                            Transform your software development experience
                        </Heading>
                        <Text fontSize="lg" lineHeight="150%" textShadow="2px 2px 0px #000">
                            Unlock the potential of your software with Trimatech's unique subscription model.
                        </Text>
                    </Box>
                    <MainActions />
                </Box>
            </Flex>
            <Contact />
        </>
    );
}
