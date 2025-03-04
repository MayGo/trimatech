import { Benefits } from '@/components/ui/HomePageParts/Benefits';
import { ComparePricing } from '@/components/ui/HomePageParts/ComparePricing';
import { Discuss } from '@/components/ui/HomePageParts/Discuss';
import { Faq } from '@/components/ui/HomePageParts/Faq';
import { Hero } from '@/components/ui/HomePageParts/Hero';
import { PauseTry } from '@/components/ui/HomePageParts/PauseTry';
import { Pricing } from '@/components/ui/HomePageParts/Pricing';
import { ScrollToAnchorOnPageLoad } from '@/components/ui/HomePageParts/ScollToAnchorOnPageLoad';
import { Testimonials } from '@/components/ui/HomePageParts/Testimonials';
import { TechScroll } from '@/components/ui/TechScroll';
import { Flex } from '@chakra-ui/react';

export default async function HomePage() {
    return (
        <Flex flexDirection="column" gap={6}>
            <Hero />
            <Benefits />
            <TechScroll />
            <Pricing />
            <PauseTry />
            <ComparePricing />
            <Faq />
            <Testimonials />
            <Discuss />
            <ScrollToAnchorOnPageLoad />
        </Flex>
    );
}
