import { plugins, type PluginSlug } from '@/data/roblox';
import { SimpleGrid } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { PluginCard } from '../PluginCard';
import { DetailSection } from './DetailSection';

export const RelatedPlugins = ({ current }: { current: PluginSlug }) => {
    const t = useTranslations('detail');
    const index = plugins.findIndex((plugin) => plugin.slug === current);
    // Take the next four in catalog order so every plugin page suggests something different.
    const others = [...plugins.slice(index + 1), ...plugins.slice(0, index)].slice(0, 4);

    return (
        <DetailSection heading={t('morePlugins')}>
            <SimpleGrid columns={[1, 2, 2, 4]} gap={4}>
                {others.map((plugin) => (
                    <PluginCard key={plugin.slug} plugin={plugin} />
                ))}
            </SimpleGrid>
        </DetailSection>
    );
};
