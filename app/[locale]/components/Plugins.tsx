import { outerPadding } from '@/components/theme/padding.utils';
import { plugins } from '@/data/roblox';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { LuPuzzle } from 'react-icons/lu';
import { PluginCard } from './PluginCard';
import { SectionHeading } from './SectionHeading';

export const Plugins = () => {
    const t = useTranslations('plugins');

    return (
        <Box as="section" id="plugins" px={outerPadding}>
            <SectionHeading
                eyebrow={t('eyebrow')}
                heading={t('heading')}
                description={t('description')}
                icon={<LuPuzzle />}
            />
            <SimpleGrid columns={[1, 2, 2, 3, 4]} gap={4}>
                {plugins.map((plugin) => (
                    <PluginCard key={plugin.slug} plugin={plugin} />
                ))}
            </SimpleGrid>
        </Box>
    );
};
