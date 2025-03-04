import { Benefits } from '@/app/components/Benefits';
import { ComparePricing } from '@/app/components/ComparePricing';
import { Discuss } from '@/app/components/Discuss';
import { Faq } from '@/app/components/Faq';
import { Hero } from '@/app/components/Hero';
import { PauseTry } from '@/app/components/PauseTry';
import { Pricing } from '@/app/components/Pricing';
import { ScrollToAnchorOnPageLoad } from '@/app/components/ScollToAnchorOnPageLoad';
import { TechScroll } from '@/app/components/TechScroll';
import { Testimonials } from '@/app/components/Testimonials';
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
