import { games, plugins } from '@/data/roblox';
import { formatCompact } from '@/utils/format';
import { Flex } from '@chakra-ui/react';
import { useLocale, useTranslations } from 'next-intl';
import { StatPill } from './StatPill';

type Props = {
    totalVisits: number;
    memberCount: number | null;
};

export const HeroStats = ({ totalVisits, memberCount }: Props) => {
    const t = useTranslations('hero.stats');
    const locale = useLocale();

    return (
        <Flex gap={[6, 8]} flexWrap="wrap" pt={4} borderTop="1px solid" borderColor="line">
            <StatPill value={String(games.length)} label={t('games')} />
            <StatPill value={String(plugins.length)} label={t('plugins')} />
            {totalVisits > 0 && <StatPill value={formatCompact(totalVisits, locale)} label={t('visits')} />}
            {memberCount !== null && <StatPill value={formatCompact(memberCount, locale)} label={t('members')} />}
        </Flex>
    );
};
