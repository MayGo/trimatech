import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { LuCircleCheck, LuCirclePause } from 'react-icons/lu';
import { mainRound, mainRounded } from '../padding.utils';

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
        <Box w="full" rounded={mainRound} p={10} border="2px dashed" borderColor="primary" bg="bgColorWhiteTransparent">
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
        <Box w="full" px={[2, 0]}>
            <Flex flexDirection={['column', 'column', 'row']} gap={4}>
                <PauseTryItem
                    title="Pause anytime"
                    description="When everything’s running smoothly and there’s no work left, simply pause your subscription. Resume when new tasks come in - your plan picks up right where you left off."
                >
                    <LuCirclePause size={40} color="primary" />
                </PauseTryItem>
                <PauseTryItem
                    title="Try it for a week"
                    description="Test the service for a week. If you're not satisfied, get 3 weeks of your subscription fee back, no strings attached."
                >
                    <LuCircleCheck size={40} color="primary" />
                </PauseTryItem>
            </Flex>
        </Box>
    );
};
