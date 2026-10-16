import { ActionButton } from '@/app/[locale]/components/detail/ActionButton';
import { DetailHero } from '@/app/[locale]/components/detail/DetailHero';
import { DetailSection } from '@/app/[locale]/components/detail/DetailSection';
import { FeatureList } from '@/app/[locale]/components/detail/FeatureList';
import { MetaChip } from '@/app/[locale]/components/detail/MetaChip';
import { RelatedPlugins } from '@/app/[locale]/components/detail/RelatedPlugins';
import { sectionGap } from '@/components/theme/padding.utils';
import { getPluginDoc } from '@/content/docs';
import {
    findPlugin,
    isPluginSlug,
    PLUGIN_SLUGS,
    placeLink,
    pluginDocsPath,
    pluginIconSrc,
    pluginPath,
    storeAssetLink
} from '@/data/roblox';
import { routing } from '@/i18n/routing';
import { isStringArray } from '@/utils/guards';
import { Badge, Flex, Text } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { LuBookOpen, LuMessageSquare, LuPlay } from 'react-icons/lu';
import { SiRobloxstudio } from 'react-icons/si';

type Params = { params: Promise<{ locale: string; slug: string }> };

/** Every slug is known at build time, so anything else is a plain 404. */
export const dynamicParams = false;

export function generateStaticParams() {
    return routing.locales.flatMap((locale) => PLUGIN_SLUGS.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { locale, slug } = await params;
    if (!isPluginSlug(slug)) {
        return {};
    }
    const plugin = findPlugin(slug);
    const t = await getTranslations({ locale, namespace: 'plugins' });
    const title = `${plugin.name} - Roblox Studio plugin by Trimatech`;
    const description = t(`items.${slug}.tagline`);

    return {
        title,
        description,
        alternates: { canonical: pluginPath(slug) },
        openGraph: {
            title,
            description,
            type: 'website',
            images: [{ url: pluginIconSrc(slug), width: 420, height: 420, alt: plugin.name }]
        },
        twitter: { card: 'summary', title, description, images: [pluginIconSrc(slug)] }
    };
}

export default async function PluginPage({ params }: Params) {
    const { locale, slug } = await params;
    if (!isPluginSlug(slug)) {
        notFound();
    }
    setRequestLocale(locale);

    const plugin = findPlugin(slug);
    const doc = getPluginDoc(slug);
    const [t, tPlugins, tDetails] = await Promise.all([
        getTranslations('detail'),
        getTranslations('plugins'),
        getTranslations(`pluginDetails.${slug}`)
    ]);
    const rawFeatures: unknown = tDetails.raw('features');
    const features = isStringArray(rawFeatures) ? rawFeatures : [];

    return (
        <Flex flexDirection="column" gap={sectionGap} pb={4}>
            <DetailHero
                back={{ href: '/#plugins', label: t('backToPlugins') }}
                iconSrc={pluginIconSrc(slug)}
                title={plugin.name}
                tagline={tPlugins(`items.${slug}.tagline`)}
                badges={
                    <Badge colorPalette="purple" variant="subtle" rounded="full" px={2.5} fontSize="xs">
                        Roblox Studio
                    </Badge>
                }
                meta={
                    <>
                        <MetaChip label={t('meta.version')}>
                            {tPlugins('version', { version: plugin.version })}
                        </MetaChip>
                        <MetaChip label={t('meta.docs')}>{doc ? t('meta.docsHere') : t('meta.docsStore')}</MetaChip>
                    </>
                }
                actions={
                    <>
                        <ActionButton
                            target={{ kind: 'external', href: storeAssetLink(plugin.assetId) }}
                            icon={<SiRobloxstudio />}
                            primary
                        >
                            {t('getOnStore')}
                        </ActionButton>
                        {doc && (
                            <ActionButton
                                target={{ kind: 'internal', href: pluginDocsPath(slug) }}
                                icon={<LuBookOpen />}
                            >
                                {t('readDocs')}
                            </ActionButton>
                        )}
                        {plugin.demoPlaceId !== null && (
                            <ActionButton
                                target={{ kind: 'external', href: placeLink(plugin.demoPlaceId) }}
                                icon={<LuPlay />}
                            >
                                {t('tryDemo')}
                            </ActionButton>
                        )}
                        {plugin.devForumLink !== null && (
                            <ActionButton
                                target={{ kind: 'external', href: plugin.devForumLink }}
                                icon={<LuMessageSquare />}
                            >
                                {t('devForum')}
                            </ActionButton>
                        )}
                    </>
                }
            />

            <DetailSection heading={t('about')}>
                <Text fontSize="lg" color="fg.muted" lineHeight="1.7" maxW="760px">
                    {tDetails('intro')}
                </Text>
            </DetailSection>

            {features.length > 0 && (
                <DetailSection heading={t('features')}>
                    <FeatureList items={features} />
                </DetailSection>
            )}

            <RelatedPlugins current={slug} />
        </Flex>
    );
}
