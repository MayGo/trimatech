import type { NextPage } from 'next';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Column from './column';
import MainActions from './MainActions';

const EngagePart: NextPage = () => {
    return (
        <Box
            as="section"
            bgImage="url('/placeholder-image-1@2x.png')"
            bgSize="cover"
            bgRepeat="no-repeat"
            bgPos="center"
            py={{ base: 0, md: '47px', lg: '73px' }}
            px={{ base: 8, md: 16 }}
            gap={{ base: '20px', md: '40px', lg: '60px' }}
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
            textAlign="center"
        >
            <Flex
                flexDirection="column"
                alignItems="start"
                justifyContent="start"
                gap="16px"
                maxW="full"
                bg="indigo.500"
                backdropOpacity="0.2"
                p={8}
                rounded="3xl"
                backdropFilter="blur(10px)"
            >
                <Text lineHeight="150%" fontWeight="semibold" display="inline-block">
                    Streamline
                </Text>
                <Flex
                    flexDirection="column"
                    alignItems="start"
                    justifyContent="start"
                    gap="8"
                    textAlign="left"
                    fontSize="29xl"
                >
                    <Heading fontWeight="bold" fontSize="4xl">
                        Engage with Trimatech: from video calls to Trello
                    </Heading>
                    <Text fontSize="lg" lineHeight="150%">
                        At Trimatech, we make it easy to get started. Simply schedule a video call with our team to
                        discuss your software development needs. Once we determine that we're a good fit, we'll set up a
                        collaborative Trello board to keep track of the progress.
                    </Text>
                </Flex>
            </Flex>
            <Flex
                flexDirection="column"
                alignItems="start"
                justifyContent="start"
                gap={{ base: '24px', md: '48px' }}
                maxW="full"
                textAlign="left"
                fontSize="13xl"
                bg="indigo.500"
                backdropOpacity="0.2"
                p={8}
                rounded="3xl"
                backdropFilter="blur(10px)"
            >
                <Flex
                    flexDirection="row"
                    flexWrap="wrap"
                    alignItems="start"
                    justifyContent="start"
                    gap={{ base: '24px', md: '48px' }}
                    maxW="full"
                >
                    <Column
                        iconCalendar="/icon--calendar.svg"
                        heading="Schedule a Video Call with Our Team"
                        text="Book a video call with our team to discuss your software development needs and ensure we're a good fit for your project."
                    />
                    <Column
                        iconCalendar="/icon--award.svg"
                        heading="Start Building Your Software Solution Today"
                        text="Take the first step towards improving your software by scheduling a video call with our team and setting up a collaborative Trello board."
                    />
                    <Column
                        iconCalendar="/icon--spreadsheet.svg"
                        heading="Collaborative Trello Board for Progress Tracking"
                        text="We'll set up a Trello board where you can collaborate with our team, track the progress of your project, and provide feedback."
                    />
                </Flex>
                <MainActions />
            </Flex>
        </Box>
    );
};

export default EngagePart;
