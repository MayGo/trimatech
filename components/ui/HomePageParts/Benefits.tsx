import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { mainHeadingSize, mainRounded } from '../padding.utils';
import { DeveloperCommunications } from './animations/DeveloperCommunications';
import { WebDevelopment } from './animations/WebDevelopment';
import { AdaptiveInterface } from './animations/AdaptiveInterface';
import { WorkingHome } from './animations/WorkingHome';

const BenefitItem = ({
    title,
    description,
    children
}: {
    title: string;
    description: string;
    children: React.ReactNode;
}) => {
    return (
        <Flex
            flexDirection="column"
            bg="bgColor"
            w="full"
            h="container.height"
            rounded={mainRounded}
            p={6}
            gap={4}
            minW="300px"
        >
            <Box h="200px" display="flex" alignItems="center" justifyContent="center">
                {children}
            </Box>
            <Heading size="lg">{title}</Heading>
            <Text fontSize="md" textAlign="justify">
                {description}
            </Text>
        </Flex>
    );
};

export const Benefits = () => {
    return (
        <Box w="full">
            <Box pb={4} pl={[4, 0]}>
                <Heading size={mainHeadingSize}>Benefits</Heading>
            </Box>
            <SimpleGrid columns={[1, 1, 2, 2, 4]} gap={4}>
                <BenefitItem
                    title="Dedicated Maintenance for Your Existing Projects"
                    description="No need for a full team - one senior developer focuses on ensuring your React application remains performant and up-to-date."
                >
                    <WorkingHome />
                </BenefitItem>
                <BenefitItem
                    title="Quick Turnaround for Bug Fixes & Updates"
                    description="Rapid response for bug fixes and feature requests, starting within 48 hours. Keep your application running optimally!"
                >
                    <WebDevelopment />
                </BenefitItem>
                <BenefitItem
                    title="Upgrade and Enhance Your Application"
                    description="Seamlessly add new features and upgrade libraries to leverage the latest React capabilities without disrupting your workflow."
                >
                    <AdaptiveInterface />
                </BenefitItem>
                <BenefitItem
                    title="Streamlined Ticket-Based Communication"
                    description="All updates and requests are tracked through our ticketing system, ensuring transparency and organization for every task."
                >
                    <DeveloperCommunications />
                </BenefitItem>
            </SimpleGrid>
        </Box>
    );
};
