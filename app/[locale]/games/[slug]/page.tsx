import { GameCard } from '@/app/[locale]/components/GameCard';
import { ActionButton } from '@/app/[locale]/components/detail/ActionButton';
import { DetailHero } from '@/app/[locale]/components/detail/DetailHero';
import { DetailSection } from '@/app/[locale]/components/detail/DetailSection';
import { FeatureList } from '@/app/[locale]/components/detail/FeatureList';
import { GameStatTiles } from '@/app/[locale]/components/detail/GameStatTiles';
import { MetaChip } from '@/app/[locale]/components/detail/MetaChip';
import { RelatedGames } from '@/app/[locale]/components/detail/RelatedGames';
import { ScreenshotGallery } from '@/app/[locale]/components/detail/ScreenshotGallery';
import { StatusBadge } from '@/app/[locale]/components/StatusBadge';
import { sectionGap } from '@/components/theme/padding.utils';
import { findGame, GAME_SLUGS, gameIconSrc, gamePath, games, isGameSlug, placeLink } from '@/data/roblox';
import { routing } from '@/i18n/routing';
import { fetchGameStats } from '@/lib/roblox-stats';
import { isStringArray } from '@/utils/guards';
import { Flex, Stack, Text } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { SiRoblox } from 'react-icons/si';

type Params = { params: Promise<{ locale: string; slug: string }> };

/** Every slug is known at build time, so anything else is a plain 404. */
export const dynamicParams = false;

export function generateStaticParams() {
    return routing.locales.flatMap((locale) => GAME_SLUGS.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { locale, slug } = await params;
    if (!isGameSlug(slug)) {
        return {};
    }
    const game = findGame(slug);
    const t = await getTranslations({ locale, namespace: 'games' });
    const title = `${game.name} - Trimatech Games`;
    const description = t(`items.${slug}.tagline`);

    return {
        title,
        description,
        alternates: { canonical: gamePath(slug) },
        openGraph: {
            title,
            description,
            type: 'website',
            images: [{ url: gameIconSrc(slug), width: 512, height: 512, alt: game.name }]
        },
        twitter: { card: 'summary', title, description, images: [gameIconSrc(slug)] }
    };
}

export default async function GamePage({ params }: Params) {
    const { locale, slug } = await params;
    if (!isGameSlug(slug)) {
        notFound();
    }
    setRequestLocale(locale);

    const game = findGame(slug);
    const [t, tGames, tDetails, stats] = await Promise.all([
        getTranslations('detail'),
        getTranslations('games'),
        getTranslations(`gameDetails.${slug}`),
        fetchGameStats(games.map((candidate) => candidate.universeId))
    ]);
    const rawFeatures: unknown = tDetails.raw('features');
    const features = isStringArray(rawFeatures) ? rawFeatures : [];
    const gameStats = stats.get(game.universeId);

    return (
        <Flex flexDirection="column" gap={sectionGap} pb={4}>
            <DetailHero
                back={{ href: '/#games', label: t('backToGames') }}
                iconSrc={gameIconSrc(slug)}
                title={game.name}
                tagline={tGames(`items.${slug}.tagline`)}
                badges={<StatusBadge status={game.status} />}
                meta={
                    <>
                        <MetaChip label={t('meta.genre')}>{tGames(`items.${slug}.genre`)}</MetaChip>
                        <MetaChip label={t('meta.released')}>{game.year}</MetaChip>
                        <MetaChip label={t('meta.status')}>{tGames(`status.${game.status}`)}</MetaChip>
                    </>
                }
                actions={
                    <ActionButton
                        target={{ kind: 'external', href: placeLink(game.placeId) }}
                        icon={<SiRoblox />}
                        primary
                    >
                        {t('playOnRoblox')}
                    </ActionButton>
                }
            />

            <DetailSection heading={t('about')}>
                <Stack gap={6}>
                    <Text fontSize="lg" color="fg.muted" lineHeight="1.7" maxW="760px">
                        {tDetails('intro')}
                    </Text>
                    {gameStats && <GameStatTiles stats={gameStats} />}
                </Stack>
            </DetailSection>

            {features.length > 0 && (
                <DetailSection heading={t('features')}>
                    <FeatureList items={features} />
                </DetailSection>
            )}

            {game.screenshots > 0 && (
                <DetailSection heading={t('screenshots')}>
                    <ScreenshotGallery slug={slug} count={game.screenshots} />
                </DetailSection>
            )}

            <RelatedGames current={slug} stats={stats} />
        </Flex>
    );
}

// Keep the import used so the card type stays colocated with the page that renders it.
export type { GameCard };
