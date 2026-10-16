import { BackLink } from '@/app/[locale]/components/detail/BackLink';
import { DocSectionView } from '@/app/[locale]/components/docs/DocSectionView';
import { DocToc } from '@/app/[locale]/components/docs/DocToc';
import { Eyebrow } from '@/app/[locale]/components/Eyebrow';
import { ActionButton } from '@/app/[locale]/components/detail/ActionButton';
import { outerPadding } from '@/components/theme/padding.utils';
import { getPluginDoc } from '@/content/docs';
import {
    findPlugin,
    isPluginSlug,
    PLUGIN_SLUGS,
    pluginDocsPath,
    pluginIconSrc,
    pluginPath,
    storeAssetLink
} from '@/data/roblox';
import { routing } from '@/i18n/routing';
import { Box, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { LuBookOpen } from 'react-icons/lu';
import { SiRobloxstudio } from 'react-icons/si';

type Params = { params: Promise<{ locale: string; slug: string }> };

/** Every slug is known at build time, so anything else is a plain 404. */
export const dynamicParams = false;

export function generateStaticParams() {
    return routing.locales.flatMap((locale) =>
        PLUGIN_SLUGS.filter((slug) => getPluginDoc(slug) !== null).map((slug) => ({ locale, slug }))
    );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { locale, slug } = await params;
    if (!isPluginSlug(slug) || getPluginDoc(slug) === null) {
        return {};
    }
    const plugin = findPlugin(slug);
    const t = await getTranslations({ locale, namespace: 'detail.docs' });
    const title = `${t('title', { name: plugin.name })} - Trimatech`;
    const doc = getPluginDoc(slug);

    return {
        title,
        description: doc?.summary,
        alternates: { canonical: pluginDocsPath(slug) }
    };
}

export default async function PluginDocsPage({ params }: Params) {
    const { locale, slug } = await params;
    if (!isPluginSlug(slug)) {
        notFound();
    }
    const doc = getPluginDoc(slug);
    if (doc === null) {
        notFound();
    }
    setRequestLocale(locale);

    const plugin = findPlugin(slug);
    const t = await getTranslations('detail');

    return (
        <Box px={outerPadding} pt={[6, 8, 10]} pb={10}>
            <Stack gap={8}>
                <BackLink href={pluginPath(slug)} label={t('docs.backToPlugin', { name: plugin.name })} />

                <Flex gap={5} align="center">
                    <Box
                        flexShrink={0}
                        w="64px"
                        h="64px"
                        rounded="xl"
                        overflow="hidden"
                        border="1px solid"
                        borderColor="line"
                        position="relative"
                    >
                        <Image src={pluginIconSrc(slug)} alt="" fill sizes="64px" />
                    </Box>
                    <Stack gap={2}>
                        <Eyebrow icon={<LuBookOpen />}>{t('docs.eyebrow')}</Eyebrow>
                        <Heading
                            as="h1"
                            fontSize={['3xl', '4xl']}
                            fontWeight="800"
                            letterSpacing="-0.02em"
                            lineHeight="1.1"
                        >
                            {t('docs.title', { name: plugin.name })}
                        </Heading>
                    </Stack>
                </Flex>

                <Text fontSize="lg" color="fg.muted" lineHeight="1.7" maxW="760px">
                    {doc.summary}
                </Text>

                {locale !== 'en' && (
                    <Text fontSize="sm" color="fg.subtle">
                        {t('docs.englishOnly')}
                    </Text>
                )}

                <HStack>
                    <ActionButton
                        target={{ kind: 'external', href: storeAssetLink(plugin.assetId) }}
                        icon={<SiRobloxstudio />}
                        primary
                    >
                        {t('getOnStore')}
                    </ActionButton>
                </HStack>

                <Flex direction={['column', 'column', 'column', 'row']} gap={[8, 8, 8, 12]} align="flex-start">
                    <Box w={['full', 'full', 'full', '240px']} flexShrink={0}>
                        <DocToc title={t('docs.onThisPage')} sections={doc.sections} />
                    </Box>
                    <Stack gap={12} flex="1" minW={0} maxW="760px">
                        {doc.sections.map((section) => (
                            <DocSectionView key={section.id} section={section} />
                        ))}
                    </Stack>
                </Flex>
            </Stack>
        </Box>
    );
}
