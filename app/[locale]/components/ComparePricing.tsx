import { mainHeadingSize, mainRounded, outerPadding } from '@/components/theme/padding.utils';
import { Box, Flex, Heading, SimpleGrid, Span, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { BusinessAgreement } from './animations/BusinessAgreement';
import { CustomerAssistance } from './animations/CustomerAssistance';
import { MoneyValueImage } from './animations/MoneyValueImage';

const headingSize = '2xl';

const headingGap = 8;

const textGap = 4;

const TextRow = ({ heading, text }: { heading: string; text: string }) => (
    <Text fontSize="md">
        <Span fontWeight="semibold">{heading}: </Span>
        {text}
    </Text>
);

const FullTimeEngineer = () => {
    const t = useTranslations('comparePricing.fullTimeEngineer');

    return (
        <Flex
            flexDirection="column"
            gap={headingGap}
            flex="1"
            bg="bgColor"
            rounded={mainRounded}
            p={outerPadding}
            id="full-time-engineer"
        >
            <Box w="full" h="200px">
                <CustomerAssistance />
            </Box>
            <Heading as="h2" size={headingSize} mb={2}>
                {t('title')}
            </Heading>
            <Flex flexDirection="column" gap={textGap}>
                <TextRow heading={t('cost.title')} text={t('cost.text')} />
                <TextRow heading={t('commitment.title')} text={t('commitment.text')} />
                <TextRow heading={t('downsides.title')} text={t('downsides.text')} />
            </Flex>
            <Box flex="1" />
            <Heading as="h2" size={headingSize} color="primary">
                {t('withSubscription')}
            </Heading>
            <Flex flexDirection="column" gap={textGap}>
                <TextRow heading={t('subscriptionCost.title')} text={t('subscriptionCost.text')} />
                <TextRow heading={t('flexibility.title')} text={t('flexibility.text')} />
                <TextRow heading={t('efficiency.title')} text={t('efficiency.text')} />
                <TextRow heading={t('hassleStart.title')} text={t('hassleStart.text')} />
                <TextRow heading={t('onDemand.title')} text={t('onDemand.text')} />
            </Flex>
        </Flex>
    );
};

export const HiringCompany = () => {
    const t = useTranslations('comparePricing.hiringCompany');

    return (
        <Flex
            flexDirection="column"
            gap={headingGap}
            flex="1"
            bg="bgColor"
            rounded={mainRounded}
            p={outerPadding}
            id="development-company"
        >
            <Box w="full" h="200px">
                <BusinessAgreement />
            </Box>
            <Heading as="h2" size={headingSize}>
                {t('title')}
            </Heading>
            <Flex flexDirection="column" gap={textGap}>
                <TextRow heading={t('cost.title')} text={t('cost.text')} />
                <TextRow heading={t('commitment.title')} text={t('commitment.text')} />
                <TextRow heading={t('downsides.title')} text={t('downsides.text')} />
            </Flex>
            <Box flex="1" />
            <Heading as="h2" size={headingSize} color="primary">
                {t('withSubscription')}
            </Heading>
            <Flex flexDirection="column" gap={textGap}>
                <TextRow heading={t('subscriptionCost.title')} text={t('subscriptionCost.text')} />
                <TextRow heading={t('flexibility.title')} text={t('flexibility.text')} />
                <TextRow heading={t('expertise.title')} text={t('expertise.text')} />
                <TextRow heading={t('communication.title')} text={t('communication.text')} />
            </Flex>
        </Flex>
    );
};

const SubscriptionValue = () => {
    const t = useTranslations('comparePricing.subscriptionValue');

    return (
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
                    {t('title')}
                </Heading>
                <Flex flexDirection="column" gap={textGap}>
                    <TextRow heading={t('monthlyOutput.title')} text={t('monthlyOutput.text')} />
                    <TextRow heading={t('costSavings.title')} text={t('costSavings.text')} />
                    <TextRow heading={t('hassleStart.title')} text={t('hassleStart.text')} />
                    <TextRow heading={t('flexibility.title')} text={t('flexibility.text')} />
                    <TextRow heading={t('expertise.title')} text={t('expertise.text')} />
                    <TextRow heading={t('efficiency.title')} text={t('efficiency.text')} />
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
};

export const ComparePricing = () => {
    const t = useTranslations('comparePricing');

    return (
        <Box w="full">
            <Box pb={4} pl={[4, 0]}>
                <Heading size={mainHeadingSize}>{t('heading')}</Heading>
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
