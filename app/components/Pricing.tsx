import { mainHeadingSize, mainRounded, mainSubtextSize, outerPadding } from '@/components/theme/padding.utils';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { BusinessValue } from './animations/BusinessValue';
import { PriceForOthers } from './PriceForOthers';
import { PriceItem } from './PriceItem';

export const Pricing = () => {
    const t = useTranslations('pricing');
    const options = useTranslations('pricing.options');

    return (
        <Box bg="bgColor" w="full" rounded={mainRounded} p={outerPadding} id="pricing">
            <Box textAlign="center" pb={outerPadding}>
                <Heading size={mainHeadingSize}>{t('heading')}</Heading>
                <Text fontSize={mainSubtextSize} pt={4}>
                    {t('description')}
                </Text>
            </Box>
            <Flex flexDirection={['column', 'column', 'column', 'row']} gap={4}>
                <Box>
                    <PriceItem />
                </Box>
                <Box flex="1" display="flex" flexDirection="column" gap={4}>
                    <Flex
                        w="full"
                        justifyContent="center"
                        gap={4}
                        flexDirection={['column', 'column', 'column', 'column', 'row']}
                    >
                        <PriceForOthers
                            title={options('fullTime.title')}
                            price={options('fullTime.price')}
                            subtext={options('fullTime.subtext')}
                            href="#full-time-engineer"
                        />
                        <PriceForOthers
                            title={options('company.title')}
                            price={options('company.price')}
                            subtext={options('company.subtext')}
                            href="#development-company"
                        />
                    </Flex>
                    <Box display="flex" alignItems="center" justifyContent="center" height={'530px'}>
                        <BusinessValue />
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};
