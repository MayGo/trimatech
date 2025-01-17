import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import ListItem from './list-item';

const UnlockPotentialPart: NextPage = () => {
    return (
        <Box
            as="section"
            bg="background-color-alternate"
            py={{ base: '47px', lg: '73px' }}
            gap={{ base: '20px', lg: '80px' }}
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
            textAlign="left"
            fontSize="21xl"
        >
            <Flex
                flexDirection="row"
                flexWrap="wrap"
                alignItems="start"
                justifyContent="start"
                px={{ base: '20px', lg: '10px' }}
                gap={{ base: '20px', lg: '40px' }}
                maxW="full"
            >
                <Flex
                    flex="1"
                    overflow="hidden"
                    flexDirection="column"
                    alignItems="start"
                    justifyContent="start"
                    minW={{ base: 'full', lg: '390px' }}
                    maxW="full"
                >
                    <Heading as="h1" m="0" textAlign="inherit" fontSize="3xl">
                        Unlock your software's full potential with trimatech
                    </Heading>
                </Flex>
                <Flex
                    flex="1"
                    overflow="hidden"
                    flexDirection="column"
                    alignItems="start"
                    justifyContent="start"
                    gap={{ base: '16px', lg: '32px' }}
                    minW={{ base: 'full', lg: '390px' }}
                    maxW="full"
                    fontSize="lg"
                >
                    <Text textAlign="inherit" lineHeight="150%">
                        Trimatech offers cost-effective software development solutions to continuously improve and
                        maintain your software. Our unique subscription model provides high-quality work in a short
                        timeframe, delivering more value than hiring a full-time developer.
                    </Text>
                    <Flex
                        flexDirection="row"
                        alignItems="start"
                        justifyContent="start"
                        py="2"
                        gap="24px"
                        fontSize="xl"
                        flexWrap={{ base: 'wrap', lg: 'nowrap' }}
                    >
                        <ListItem
                            iconAlarm="/icon--alarm.svg"
                            heading="Save Time"
                            text="Focus on your core business while we handle your software development needs."
                        />
                        <ListItem
                            iconAlarm="/icon--moneywithdraw.svg"
                            heading="Cost Savings"
                            text="Get high-quality work done at a fraction of the cost of hiring a full-time developer."
                        />
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
};

export default UnlockPotentialPart;
