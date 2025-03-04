import { Benefits } from '@/components/HomePageParts/Benefits';
import { ComparePricing } from '@/components/HomePageParts/ComparePricing';
import { Discuss } from '@/components/HomePageParts/Discuss';
import { Faq } from '@/components/HomePageParts/Faq';
import { Hero } from '@/components/HomePageParts/Hero';
import { PauseTry } from '@/components/HomePageParts/PauseTry';
import { Pricing } from '@/components/HomePageParts/Pricing';
import { ScrollToAnchorOnPageLoad } from '@/components/HomePageParts/ScollToAnchorOnPageLoad';
import { TechScroll } from '@/components/HomePageParts/TechScroll';
import { Testimonials } from '@/components/HomePageParts/Testimonials';
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
