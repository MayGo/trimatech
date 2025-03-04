import { mainHeadingSize } from '@/components/theme/padding.utils';
import { Box, Heading } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import TechScrollingLogos from './TechScrollingLogos';

export const TechScroll = () => {
    const t = useTranslations('techScroll');

    return (
        <Box>
            <Box pb={4} pl={[4, 0]}>
                <Heading size={mainHeadingSize}>{t('heading')}</Heading>
            </Box>

            <TechScrollingLogos />
        </Box>
    );
};
