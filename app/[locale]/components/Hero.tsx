import { mainHeadingSize, mainRounded, mainSubtextSize, outerPadding } from '@/components/theme/padding.utils';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { GiEuropeanFlag } from 'react-icons/gi';
import { AbstractBg } from './animations/AbstractBg';
import { IntroCallCard } from './IntroCallCard';

export const Hero = () => {
    const t = useTranslations('hero');

    return (
        <Box position="relative" bg="bgColor" w="full" roundedBottom={mainRounded} p={outerPadding} overflow="hidden">
            <Flex
                flexDirection={['column', 'column', 'row', 'row', 'row']}
                justify="center"
                align="center"
                h="full"
                gap={outerPadding}
            >
                <Flex flexDirection="column" flex="1" gap={6}>
                    <Heading size={mainHeadingSize}>{t('heading')}</Heading>
                    <Text fontSize={mainSubtextSize}>{t('description')}</Text>
                    <Flex align="center">
                        <Box bg="primary" p={1} rounded="full">
                            <GiEuropeanFlag color="yellow" size="36px" />
                        </Box>
                        <Text ml={2} fontWeight="medium" fontSize="md">
                            {t('euBased')}
                        </Text>
                    </Flex>
                    <Box flex="1" />
                    <Heading as="h2" size="xl" color="primary">
                        {t('mission')}
                    </Heading>
                </Flex>
                <Box flex="1" h="full" position="relative" justifyItems="center">
                    <Box position="absolute" top="-200px" left="-300px" opacity={0.3}>
                        <AbstractBg />
                    </Box>
                    <IntroCallCard />
                </Box>
            </Flex>
        </Box>
    );
};
