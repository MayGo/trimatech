import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { DedicatedMaintananceImage } from './animations/DedicatedMaintananceImage';
import { TurnaroundImage } from './animations/TurnaroundImage';
import { UpgradeImage } from './animations/UpgradeImage';
import { CommunicationImage } from './animations/CommunicationImage';

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
        <Flex flexDirection="column" bg="bgColor" w="full" h="container.height" rounded={20} p={6} gap={4}>
            <Box h="200px">{children}</Box>
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
            <Box pb={2}>
                <Heading size="5xl">Benefits</Heading>
            </Box>
            <Flex flexDirection="row" gap={4}>
                <BenefitItem
                    title="Dedicated Maintenance for Your Existing Projects"
                    description="No need for a full team—one senior developer focuses on ensuring your React application remains performant and up-to-date."
                >
                    <DedicatedMaintananceImage />
                </BenefitItem>
                <BenefitItem
                    title="Quick Turnaround for Bug Fixes & Updates"
                    description="Rapid response for bug fixes and feature requests, starting within 48 hours. Keep your application running optimally!"
                >
                    <TurnaroundImage />
                </BenefitItem>
                <BenefitItem
                    title="Upgrade and Enhance Your Application"
                    description="Seamlessly add new features and upgrade libraries to leverage the latest React capabilities without disrupting your workflow."
                >
                    <UpgradeImage />
                </BenefitItem>
                <BenefitItem
                    title="Streamlined Ticket-Based Communication"
                    description="All updates and requests are tracked through our ticketing system, ensuring transparency and organization for every task."
                >
                    <CommunicationImage />
                </BenefitItem>
            </Flex>
        </Box>
    );
};
