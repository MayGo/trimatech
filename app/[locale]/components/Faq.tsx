import { mainHeadingSize, mainRounded, mainSubtextSize, outerPadding } from '@/components/theme/padding.utils';
import { CustomAccordion, CustomAccordionItem } from '@/components/ui/custom-accordion';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { Questions } from './animations/Questions';

interface FaqItem {
    title: string;
    text: string;
}

export const Faq = () => {
    const t = useTranslations('faq');

    return (
        <Flex
            flexDirection={['column', 'column', 'row']}
            bg="bgColor"
            w="full"
            rounded={mainRounded}
            p={outerPadding}
            gap={outerPadding}
        >
            <Flex flexDirection="column" h="full" gap={10} flex="1">
                <Box flex="1">
                    <Heading size={mainHeadingSize}>{t('heading')}</Heading>
                    <Text fontSize={mainSubtextSize} pt={4}>
                        {t('description')}
                    </Text>
                </Box>
                <Box w="full">
                    <CustomAccordion variant="subtle">
                        {t.raw('items').map((item: FaqItem, index: number) => (
                            <CustomAccordionItem key={index} title={item.title}>
                                <Text fontSize="md">{item.text}</Text>
                            </CustomAccordionItem>
                        ))}
                    </CustomAccordion>
                </Box>
            </Flex>
            <Flex justifyContent="center" alignItems="start" flex="1" pt={8}>
                <Questions />
            </Flex>
        </Flex>
    );
};
