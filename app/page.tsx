import OtherPointsPart from '@/components/OtherPointsPart';
import EngagePart from '@/components/EngagePart';
import UnlockPotentialPart from '@/components/UnlockPotentialPart';
import MainActions from '@/components/MainActions';
import Contact from '@/components/contact';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Hero } from '@/components/ui/HomePageParts/Hero';
import { Benefits } from '@/components/ui/HomePageParts/Benefits';
import { Pricing } from '@/components/ui/HomePageParts/Pricing';
import { PauseTry } from '@/components/ui/HomePageParts/PauseTry';
import { Discuss } from '@/components/ui/HomePageParts/Discuss';
import { Faq } from '@/components/ui/HomePageParts/Faq';
export default async function HomePage() {
    return (
        <Flex flexDirection="column" gap={6}>
            <Hero />
            <Benefits />
            <Pricing />
            <PauseTry />
            <Discuss />
            <Faq />
        </Flex>
    );
}
