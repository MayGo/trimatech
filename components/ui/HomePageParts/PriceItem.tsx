import { Box, Text, VStack, List, Flex, Heading } from '@chakra-ui/react';
import { LuCircleCheck } from 'react-icons/lu';
import { Button } from '../button';

export function PriceItem() {
    return (
        <Flex
            flexDirection="column"
            borderWidth="1px"
            borderRadius={20}
            borderColor="borderColor"
            overflow="hidden"
            boxShadow="md"
            p={8}
            bg="white"
            textAlign="center"
            height="fit-content"
            gap={4}
        >
            <Heading fontSize="3xl" fontWeight="bold">
                Monthly Club
            </Heading>
            <Box position="relative">
                <Flex justify="center" align="center">
                    <Heading size="6xl" fontWeight="bold" color="primary">
                        €3,995
                    </Heading>
                    <Text fontSize="md" mb={6} position="absolute" top={'40px'} right={'-6px'}>
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
                            {feature}
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
