import { Box, Flex, Heading, SimpleGrid, Span, Text } from '@chakra-ui/react';
import { mainHeadingSize, mainRounded, outerPadding } from '../padding.utils';
import { MoneyValueImage } from './animations/MoneyValueImage';
import { BusinessAgreement } from './animations/BusinessAgreement';
import { CustomerAssistance } from './animations/CustomerAssistance';

const headingSize = '2xl';

const headingGap = 8;

const textGap = 4;

const TextRow = ({ heading, text }: { heading: string; text: string }) => (
    <Text fontSize="md">
        <Span fontWeight="semibold">{heading}: </Span>
        {text}
    </Text>
);

const FullTimeEngineer = () => (
    <Flex flexDirection="column" gap={headingGap} flex="1" bg="bgColor" rounded={mainRounded} p={outerPadding}>
        <Box w="full" h="200px">
            <CustomerAssistance />
        </Box>
        <Heading as="h2" size={headingSize} mb={2}>
            Hiring a full-time engineer
        </Heading>
        <Flex flexDirection="column" gap={textGap}>
            <TextRow heading="Cost" text="~€8,000-€10,000/month (gross, including taxes, benefits, and overhead)." />
            <TextRow
                heading="Commitment"
                text="160 hours/month, but not all those hours will be productive if the workload is small or inconsistent."
            />
            <TextRow
                heading="Downsides"
                text="Recruitment effort, onboarding time, managing idle hours for smaller workloads, and possible challenges with developer turnover."
            />
        </Flex>
        <Box flex="1" />
        <Heading as="h2" size={headingSize} color="primary">
            With our subscription:
        </Heading>
        <Flex flexDirection="column" gap={textGap}>
            <TextRow heading="Cost" text={`~50% savings compared to a full-time senior React developer.`} />
            <TextRow
                heading="Flexibility"
                text="Perfect for projects with small, steady workloads where a full-time employee isn't needed."
            />
            <TextRow
                heading="Efficiency"
                text="Tasks are based on your priorities: ~8-12 significant tasks completed per month. Less wasted time - get results, not idle hours."
            />
            <TextRow
                heading="Hassle-Free Start"
                text="Begin immediately with no recruitment, onboarding, or admin overhead."
            />
            <TextRow
                heading="On-Demand Results"
                text="Quality-backed deliverables tailored to your project priorities, without delays or inefficiencies."
            />
        </Flex>
    </Flex>
);

export const HiringCompany = () => (
    <Flex flexDirection="column" gap={headingGap} flex="1" bg="bgColor" rounded={mainRounded} p={outerPadding}>
        <Box w="full" h="200px">
            <BusinessAgreement />
        </Box>
        <Heading as="h2" size={headingSize}>
            Hiring a development company
        </Heading>
        <Flex flexDirection="column" gap={textGap}>
            <TextRow
                heading="Cost"
                text="€100-€150/hour. For 160 hours, this is ~€16,000-€24,000/month. Even smaller workloads (e.g., 50 hours) cost €5,000-€7,500."
            />
            <TextRow
                heading="Commitment"
                text="Many companies require minimum monthly contracts or long-term retainers (e.g., 3-6 months), making it difficult to pause during inconsistent workloads. After pausing, they may not have capacity when you need to resume."
            />
            <TextRow
                heading="Downsides"
                text="Overestimation padding, possible involvement of junior developers, and slower communication through middle management."
            />
        </Flex>
        <Box flex="1" />
        <Heading as="h2" size={headingSize} color="primary">
            With our subscription:
        </Heading>
        <Flex flexDirection="column" gap={textGap}>
            <TextRow
                heading="Cost"
                text={`~25% savings compared to 50 hours with a company, and significantly less for larger workloads.`}
            />
            <TextRow heading="Flexible Commitment" text="Pause or cancel anytime based on your workload." />
            <TextRow
                heading="Direct Expertise"
                text="Work is handled exclusively by a senior React developer - no juniors or inflated estimates."
            />
            <TextRow
                heading="Streamlined Communication"
                text="Direct collaboration ensures faster feedback and no time wasted on unnecessary middlemen or delays."
            />
        </Flex>
    </Flex>
);

const SubscriptionValue = () => (
    <Flex
        flexDirection={['column', 'column', 'row']}
        gap={headingGap}
        w="full"
        bg="bgColor"
        rounded={mainRounded}
        p={outerPadding}
    >
        <Flex flexDirection="column" gap={headingGap} w="full" flex="1">
            <Heading as="h2" size={headingSize}>
                Subscription value at a glance
            </Heading>
            <Flex flexDirection="column" gap={textGap}>
                <TextRow
                    heading="Monthly Output"
                    text="~8-12 tasks per month (equivalent to 50 hours of senior-level work)."
                />
                <TextRow
                    heading="Cost Savings"
                    text="Save ~50% compared to hiring a full-time engineer and ~25% compared to outsourcing to a company."
                />
                <TextRow
                    heading="Hassle-Free Start"
                    text="Begin without recruitment, onboarding, or management overhead - just quality focused results when you need them."
                />
                <TextRow
                    heading="Flexibility & Simplicity"
                    text="No long term contracts, commitments, or penalties - pause or cancel anytime. Start immediately with no delays or onboarding required."
                />
                <TextRow
                    heading="Exclusive Expertise"
                    text="Work is completed by a senior React developer who provides dedicated attention to your needs - no juniors, no middle management, and no compromises on quality."
                />

                <TextRow
                    heading="Efficiency Through AI and Modern Practices"
                    text="Using AI-powered solutions like Cursor.ai and the latest development methodologies, combined with continuous improvements in workflows, results are delivered with a speed and proficiency comparable to small software teams of just a few years ago. This ensures exceptional quality and faster project delivery."
                />
            </Flex>
        </Flex>
        <Box
            w="full"
            flex="1"
            h="300px"
            mt={9}
            display="flex"
            justifyContent="center"
            alignItems="center"
            alignSelf="center"
        >
            <MoneyValueImage />
        </Box>
    </Flex>
);

export const ComparePricing = () => {
    return (
        <Box w="full">
            <Box pb={4} pl={[4, 0]}>
                <Heading size={mainHeadingSize}>How does this compare?</Heading>
            </Box>
            <SimpleGrid columns={[1, 1, 2]} gap={4}>
                <FullTimeEngineer />
                <HiringCompany />
            </SimpleGrid>
            <Box w="full" pt={4}>
                <SubscriptionValue />
            </Box>
        </Box>
    );
};
