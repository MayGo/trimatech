import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import ListItem from './list-item';

const UnlockPotentialPart: NextPage = () => {
    return (
        <Box
            as="section"
            py={16}
            gap={8}
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
                px={4}
                gap={8}
                maxW="full"
            >
                <Flex
                    flex="1"
                    flexDirection="column"
                    alignItems="start"
                    justifyContent="start"
                    minW={{ base: 'full', lg: '390px' }}
                    maxW="full"
                    gap={8}
                >
                    <Heading as="h1" m="0" textAlign="inherit" fontSize="3xl">
                        Unlock your software's full potential with trimatech
                    </Heading>
                    <Text textAlign="inherit" lineHeight="150%">
                        Trimatech offers cost-effective software development solutions to continuously improve and
                        maintain your software. Our unique subscription model provides high-quality work in a short
                        timeframe, delivering more value than hiring a full-time developer.
                    </Text>
                </Flex>
                <Flex
                    flex="1"
                    flexDirection="row"
                    alignItems="start"
                    justifyContent="start"
                    gap={8}
                    minW={{ base: 'full', lg: '390px' }}
                    maxW="full"
                    fontSize="lg"
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
        </Box>
    );
};

export default UnlockPotentialPart;
