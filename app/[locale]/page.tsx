import { Flex } from '@chakra-ui/react';
import { Benefits } from './components/Benefits';
import { ComparePricing } from './components/ComparePricing';
import { Discuss } from './components/Discuss';
import { Faq } from './components/Faq';
import { Hero } from './components/Hero';
import { PauseTry } from './components/PauseTry';
import { Pricing } from './components/Pricing';
import { ScrollToAnchorOnPageLoad } from './components/ScollToAnchorOnPageLoad';
import { TechScroll } from './components/TechScroll';
import { Testimonials } from './components/Testimonials';

export default async function HomePage() {
    return (
        <Flex flexDirection="column" gap={[4, 6, 6, 6, 10]}>
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
