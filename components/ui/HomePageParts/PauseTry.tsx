import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { LuCircleCheck, LuCirclePause } from 'react-icons/lu';

const PauseTryItem = ({
    title,
    description,
    children
}: {
    title: string;
    description: string;
    children: React.ReactNode;
}) => {
    return (
        <Box w="full" rounded={20} p={10} border="2px dashed" borderColor="primary">
            <Flex align="center" gap={4}>
                {children}
                <Heading size="4xl" color="fg">
                    {title}
                </Heading>
            </Flex>
            <Text fontSize="lg" pt={4}>
                {description}
            </Text>
        </Box>
    );
};

export const PauseTry = () => {
    return (
        <Box w="full">
            <Flex flexDirection="row" gap={4}>
                <PauseTryItem
                    title="Pause anytime"
                    description="Temporarily pause your subscription anytime, no sweat."
                >
                    <LuCirclePause size={40} color="primary" />
                </PauseTryItem>
                <PauseTryItem
                    title="Try it for a week"
                    description="Not loving it after a week? Get 75% back, no questions asked."
                >
                    <LuCircleCheck size={40} color="primary" />
                </PauseTryItem>
            </Flex>
        </Box>
    );
};
