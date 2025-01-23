import { Flex } from '@chakra-ui/react';
import { Hero } from '@/components/ui/HomePageParts/Hero';
import { Benefits } from '@/components/ui/HomePageParts/Benefits';
import { Pricing } from '@/components/ui/HomePageParts/Pricing';
import { PauseTry } from '@/components/ui/HomePageParts/PauseTry';
import { Discuss } from '@/components/ui/HomePageParts/Discuss';
import { Faq } from '@/components/ui/HomePageParts/Faq';
import { ScrollToAnchorOnPageLoad } from '@/components/ui/HomePageParts/ScollToAnchorOnPageLoad';
import { ComparePricing } from '@/components/ui/HomePageParts/ComparePricing';
export default async function HomePage() {
    return (
        <Flex flexDirection="column" gap={6}>
            <Hero />
            <Benefits />
            <Pricing />
            <PauseTry />
            <ComparePricing />
            <Faq />
            <Discuss />
            <ScrollToAnchorOnPageLoad />
        </Flex>
    );
}
