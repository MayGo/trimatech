import { Box, Text, VStack, List, Flex, Heading } from '@chakra-ui/react';
import { Button } from '../button';
import { mainHeadingSize, mainRound } from '../padding.utils';
import { shadowSharp } from '../theme.utils';

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
        >
            <Heading fontSize="3xl" fontWeight="bold">
                Monthly Club
            </Heading>
            <Box>
                <Flex justify="center" align="baseline">
                    <Heading size={mainHeadingSize} fontWeight="bold" color="primary" position="relative">
                        €3,995
                    </Heading>
                    <Text fontSize="md" w="0" whiteSpace="nowrap">
                        / month
                    </Text>
                </Flex>
            </Box>
            <VStack gap={3} align="start">
                <List.Root gap={4} variant="plain" align="center">
                    {[
                        'One request at a time',
                        'Average 48-hour delivery',
                        'Unlimited projects',
                        'React maintenance & development',
                        'Direct access to senior developer',
                        'Pause or cancel anytime'
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
            <Button colorPalette="blue" size="lg" mt={4}>
                Join today
            </Button>
        </Flex>
    );
}
