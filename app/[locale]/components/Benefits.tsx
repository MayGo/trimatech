import { mainHeadingSize, mainRounded } from '@/components/theme/padding.utils';
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { AdaptiveInterface } from './animations/AdaptiveInterface';
import { DeveloperCommunications } from './animations/DeveloperCommunications';
import { WebDevelopment } from './animations/WebDevelopment';
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
    const t = useTranslations('benefits');
    const items = useTranslations('benefits.items');

    return (
        <Box w="full">
            <Box pb={4} pl={[4, 0]}>
                <Heading size={mainHeadingSize}>{t('heading')}</Heading>
            </Box>
            <SimpleGrid columns={[1, 1, 2, 2, 4]} gap={4}>
                <BenefitItem title={items('maintenance.title')} description={items('maintenance.description')}>
                    <WorkingHome />
                </BenefitItem>
                <BenefitItem title={items('bugFixes.title')} description={items('bugFixes.description')}>
                    <WebDevelopment />
                </BenefitItem>
                <BenefitItem title={items('upgrade.title')} description={items('upgrade.description')}>
                    <AdaptiveInterface />
                </BenefitItem>
                <BenefitItem title={items('communication.title')} description={items('communication.description')}>
                    <DeveloperCommunications />
                </BenefitItem>
            </SimpleGrid>
        </Box>
    );
};
