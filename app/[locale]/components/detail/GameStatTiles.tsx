import type { GameStats } from '@/lib/roblox-stats';
import { formatCompact } from '@/utils/format';
import { Flex } from '@chakra-ui/react';
import { useLocale, useTranslations } from 'next-intl';
import { StatTile } from './StatTile';

export const GameStatTiles = ({ stats }: { stats: GameStats }) => {
    const t = useTranslations('detail.stats');
    const locale = useLocale();

    return (
        <Flex gap={3} flexWrap="wrap">
            <StatTile value={formatCompact(stats.visits, locale)} label={t('visits')} />
            <StatTile value={formatCompact(stats.favorites, locale)} label={t('favorites')} />
            {stats.playing > 0 && <StatTile value={String(stats.playing)} label={t('playing')} />}
        </Flex>
    );
};
