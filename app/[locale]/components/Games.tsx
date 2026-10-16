import { outerPadding } from '@/components/theme/padding.utils';
import { games } from '@/data/roblox';
import type { GameStatsByUniverse } from '@/lib/roblox-stats';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { LuGamepad2 } from 'react-icons/lu';
import { GameCard } from './GameCard';
import { SectionHeading } from './SectionHeading';

export const Games = ({ stats }: { stats: GameStatsByUniverse }) => {
    const t = useTranslations('games');

    return (
        <Box as="section" id="games" px={outerPadding}>
            <SectionHeading
                eyebrow={t('eyebrow')}
                heading={t('heading')}
                description={t('description')}
                icon={<LuGamepad2 />}
            />
            <SimpleGrid columns={[1, 1, 2, 2, 3]} gap={5}>
                {games.map((game) => (
                    <GameCard key={game.slug} game={game} stats={stats.get(game.universeId)} />
                ))}
            </SimpleGrid>
        </Box>
    );
};
