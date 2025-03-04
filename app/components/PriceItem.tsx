import { MAIN_PRICE, PRODUCT_LINK } from '@/utils/constants';
import { Box, Flex, Heading, List, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import { mainHeadingSize, mainRound } from '../../components/theme/padding.utils';
import { shadowSharp } from '../../components/theme/theme.utils';
import { PriceItemButton } from './PriceItemButton';

export function PriceItem() {
    return (
        <Flex
            flexDirection="column"
            borderWidth="1px"
            borderRadius={mainRound}
            borderColor="borderColor"
            overflow="hidden"
            boxShadow="md"
            p={8}
            bg="white"
            textAlign="center"
            height="fit-content"
            gap={4}
            shadow={shadowSharp}
            maxW={['full', 'full', 'full', '450px']}
            position="relative"
        >
            <Heading fontSize="3xl" fontWeight="bold">
                Monthly Club
            </Heading>
            <Box>
                <Flex justify="center" align="baseline">
                    <Heading size={mainHeadingSize} fontWeight="bold" color="primary" position="relative">
                        €{MAIN_PRICE}
                    </Heading>
                    <Text fontSize="md" w="0" whiteSpace="nowrap">
                        / month
                    </Text>
                </Flex>
            </Box>
            <Box pb={4} alignSelf="center">
                <Text fontSize="lg" fontWeight="light" maxW="300px">
                    React development & maintenance by a senior developer
                </Text>
            </Box>
            <VStack gap={3} align="start">
                <List.Root gap={4} variant="plain" align="center">
                    {[
                        'One task handled at a time for complete focus',
                        'New tasks begin within ~48 hours of completion',
                        'Unlimited projects managed under one unified backlog',
                        'Direct communication with the developer working on your tasks',
                        'Flexible subscription to fit your needs - pause or cancel anytime',
                        'Full transparency, with tasks tracked in your preferred system (Jira, Trello, etc)'
                    ].map((feature, index) => (
                        <List.Item key={index} fontWeight={'semibold'}>
                            <List.Indicator asChild>
                                <Flex
                                    fontFamily={'heading'}
                                    align="center"
                                    justify="center"
                                    bg="bgColor"
                                    color="primary"
                                    borderRadius="full"
                                    w={'40px'}
                                    h={'40px'}
                                    mr={4}
                                >
                                    {index + 1}
                                </Flex>
                            </List.Indicator>
                            <Text textAlign="left">{feature}</Text>
                        </List.Item>
                    ))}
                </List.Root>
            </VStack>
            <NextLink href={PRODUCT_LINK}>
                <PriceItemButton />
            </NextLink>
        </Flex>
    );
}
