import { sectionGap } from '@/components/theme/padding.utils';
import { games } from '@/data/roblox';
import { fetchGameStats, fetchGroupMemberCount, sumVisits } from '@/lib/roblox-stats';
import { Flex } from '@chakra-ui/react';
import { Contact } from './components/Contact';
import { Games } from './components/Games';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Plugins } from './components/Plugins';
import { ScrollToAnchorOnPageLoad } from './components/ScrollToAnchorOnPageLoad';

export default async function HomePage() {
    const [stats, memberCount] = await Promise.all([
        fetchGameStats(games.map((game) => game.universeId)),
        fetchGroupMemberCount()
    ]);

    return (
        <Flex flexDirection="column" gap={sectionGap}>
            <Hero totalVisits={sumVisits(stats)} memberCount={memberCount} />
            <Games stats={stats} />
            <Plugins />
            <Mission />
            <Contact />
            <ScrollToAnchorOnPageLoad />
        </Flex>
    );
}
