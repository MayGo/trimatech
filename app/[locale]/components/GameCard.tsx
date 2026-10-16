import { mainRound } from '@/components/theme/padding.utils';
import { gameIconSrc, placeLink, type Game } from '@/data/roblox';
import type { GameStats } from '@/lib/roblox-stats';
import { formatCompact } from '@/utils/format';
import { Box, Flex, Heading, HStack, LinkBox, LinkOverlay, Stack, Text } from '@chakra-ui/react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { LuArrowUpRight, LuEye, LuUsers } from 'react-icons/lu';
import { StatusBadge } from './StatusBadge';

type Props = {
    game: Game;
    stats: GameStats | undefined;
};

/** Below this, a visit count says "nobody has played this yet" louder than the status badge does. */
const MIN_VISITS_TO_SHOW = 1000;

export const GameCard = ({ game, stats }: Props) => {
    const t = useTranslations('games');
    const locale = useLocale();

    return (
        <LinkBox
            as="article"
            display="flex"
            flexDirection="column"
            h="full"
            p={5}
            rounded={mainRound}
            bg="surface"
            border="1px solid"
            borderColor="line"
            shadow="card"
            transition="transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease"
            _hover={{ transform: 'translateY(-4px)', borderColor: 'violet', shadow: 'glow' }}
        >
            <Flex gap={4} align="flex-start">
                <Box flexShrink={0} rounded="xl" overflow="hidden" border="1px solid" borderColor="line">
                    <Image src={gameIconSrc(game.slug)} alt="" width={88} height={88} />
                </Box>
                <Stack gap={1.5} minW={0}>
                    <HStack gap={2} flexWrap="wrap">
                        <StatusBadge status={game.status} />
                        <Text fontSize="xs" color="fg.subtle" fontWeight="medium">
                            {t(`items.${game.slug}.genre`)} · {game.year}
                        </Text>
                    </HStack>
                    <Heading as="h3" size="xl" fontWeight="700" lineHeight="1.15">
                        <LinkOverlay asChild>
                            <a href={placeLink(game.placeId)} target="_blank" rel="noreferrer">
                                {game.name}
                            </a>
                        </LinkOverlay>
                    </Heading>
                </Stack>
            </Flex>

            <Text mt={4} fontSize="sm" color="fg.muted" lineHeight="1.6">
                {t(`items.${game.slug}.tagline`)}
            </Text>

            <Flex mt="auto" pt={5} align="center" justify="space-between" gap={3}>
                <HStack gap={4} fontSize="sm" color="fg.subtle" flexWrap="wrap">
                    {stats && stats.visits >= MIN_VISITS_TO_SHOW && (
                        <HStack gap={1.5}>
                            <LuEye />
                            <Text as="span">
                                {formatCompact(stats.visits, locale)} {t('visits')}
                            </Text>
                        </HStack>
                    )}
                    {stats && stats.playing > 0 && (
                        <HStack gap={1.5} color="green.400">
                            <LuUsers />
                            <Text as="span">
                                {stats.playing} {t('playing')}
                            </Text>
                        </HStack>
                    )}
                </HStack>
                <HStack
                    gap={1}
                    px={3.5}
                    py={1.5}
                    rounded="full"
                    bg="blue.600"
                    color="white"
                    fontSize="sm"
                    fontWeight="semibold"
                    flexShrink={0}
                >
                    {t('play')}
                    <LuArrowUpRight />
                </HStack>
            </Flex>
        </LinkBox>
    );
};
