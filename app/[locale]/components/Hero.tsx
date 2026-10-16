import { mainSubtextSize, outerPadding } from '@/components/theme/padding.utils';
import { Button } from '@/components/ui/button';
import { Box, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { LocaleLink as Link } from '@/components/LocaleLink';
import { LuGamepad2, LuPuzzle } from 'react-icons/lu';
import { SiRoblox } from 'react-icons/si';
import { Eyebrow } from './Eyebrow';
import { HeroMosaic } from './HeroMosaic';
import { HeroStats } from './HeroStats';

type Props = {
    totalVisits: number;
    memberCount: number | null;
};

export const Hero = ({ totalVisits, memberCount }: Props) => {
    const t = useTranslations('hero');

    return (
        <Box as="section" px={outerPadding} pt={[10, 12, 16, 20]} pb={[6, 8, 10]}>
            <Flex direction={['column', 'column', 'column', 'row']} align="center" gap={[12, 12, 14, 16]}>
                <Stack flex="1" gap={7} maxW="680px">
                    <Eyebrow icon={<SiRoblox />}>{t('eyebrow')}</Eyebrow>
                    <Heading
                        as="h1"
                        fontSize={['4xl', '5xl', '6xl', '6xl', '7xl']}
                        fontWeight="800"
                        lineHeight="1.02"
                        letterSpacing="-0.03em"
                    >
                        {t('heading')}
                    </Heading>
                    <Text fontSize={mainSubtextSize} color="fg.muted" maxW="560px">
                        {t('description')}
                    </Text>
                    <HStack gap={3} flexWrap="wrap">
                        <Button asChild colorPalette="blue">
                            <Link href="/#games">
                                <LuGamepad2 />
                                {t('seeGames')}
                            </Link>
                        </Button>
                        <Button asChild variant="outline" borderColor="lineStrong" _hover={{ bg: 'surfaceRaised' }}>
                            <Link href="/#plugins">
                                <LuPuzzle />
                                {t('browsePlugins')}
                            </Link>
                        </Button>
                    </HStack>
                    <HeroStats totalVisits={totalVisits} memberCount={memberCount} />
                </Stack>
                <HeroMosaic />
            </Flex>
        </Box>
    );
};
