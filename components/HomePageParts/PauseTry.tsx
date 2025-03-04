import { REFUND_PRICE, WEEK_PRICE } from '@/utils/constants';
import { Box, Flex, Heading, Span, Stack, Text } from '@chakra-ui/react';
import { LuCircleCheck, LuCirclePause } from 'react-icons/lu';
import { mainRound } from '../theme/padding.utils';

const PauseTryItem = ({
    title,
    icon,
    children
}: {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}) => {
    return (
        <Box w="full" rounded={mainRound} p={10} border="2px dashed" borderColor="primary" bg="bgColorWhiteTransparent">
            <Flex align="center" gap={4}>
                {icon}
                <Heading size="4xl" color="fg">
                    {title}
                </Heading>
            </Flex>

            {children}
        </Box>
    );
};

const fontSize = 'md';

export const PauseTry = () => {
    return (
        <Box w="full" px={[2, 0]}>
            <Flex flexDirection={['column', 'column', 'row']} gap={4}>
                <PauseTryItem title="Pause anytime" icon={<LuCirclePause size={40} color="primary" />}>
                    <Stack pt={4}>
                        <Text fontSize={fontSize}>
                            When there’s no work left to be done on your projects, just pause your subscription.
                            Resuming is easy, and your plan picks up right where you left off, ensuring no lost progress
                            or continuity gaps.
                        </Text>
                        <Text fontSize={fontSize}>
                            This flexibility is essential for managing your budget effectively, especially during
                            periods of downtime.
                        </Text>
                        <Text fontSize={fontSize}>Benefits include:</Text>
                        <Stack>
                            <Text fontSize={fontSize}>
                                <Span fontWeight="bold">No Commitment</Span>: Easily pause whenever necessary without
                                financial penalties.
                            </Text>
                            <Text fontSize={fontSize}>
                                <Span fontWeight="bold">Stay on Track</Span>: Return to ongoing work without losing
                                progress.
                            </Text>
                            <Text fontSize={fontSize}>
                                <Span fontWeight="bold">Focused Management</Span>: Use your time and resources
                                efficiently while still having access to quality React maintenance when you need it.
                            </Text>
                        </Stack>
                    </Stack>
                </PauseTryItem>
                <PauseTryItem title="Try it for a week" icon={<LuCircleCheck size={40} color="primary" />}>
                    <Stack pt={4}>
                        <Text fontSize={fontSize}>
                            For €{WEEK_PRICE}, experience the value of senior-level React maintenance for the first
                            week.
                        </Text>
                        <Text fontSize={fontSize}>In one week, you could either:</Text>
                        <Stack>
                            <Text fontSize={fontSize}>
                                <Span fontWeight="bold">Fix</Span> ~8 bugs, from minor UI issues to moderate
                                functionality fixes.
                            </Text>
                            <Text fontSize={fontSize}>
                                <Span fontWeight="bold">Implement</Span> ~2 features, like a custom dashboard component
                                or an interactive form.
                            </Text>
                            <Text fontSize={fontSize}>
                                <Span fontWeight="bold">Update</Span> all libraries to the latest versions and enhance
                                app performance for smoother functionality.
                            </Text>
                            <Text fontSize={fontSize}>
                                <Span fontWeight="bold">Set up</Span> automated testing, laying the groundwork for
                                continuous integration and better long-term reliability.
                            </Text>
                        </Stack>
                        <Text fontSize={fontSize}>
                            If you're not satisfied, you'll be refunded the remaining €{REFUND_PRICE} of your
                            subscription - no strings attached!
                        </Text>
                    </Stack>
                </PauseTryItem>
            </Flex>
        </Box>
    );
};
