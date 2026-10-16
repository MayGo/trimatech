import { mainRound } from '@/components/theme/padding.utils';
import { hasPluginDoc } from '@/content/docs';
import { placeLink, pluginDocsPath, pluginIconSrc, pluginPath, storeAssetLink, type Plugin } from '@/data/roblox';
import { LocaleLink } from '@/components/LocaleLink';
import { Box, Flex, Heading, HStack, Link, LinkBox, LinkOverlay, Stack, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { LuArrowUpRight, LuBookOpen, LuPlay } from 'react-icons/lu';

export const PluginCard = ({ plugin }: { plugin: Plugin }) => {
    const t = useTranslations('plugins');

    return (
        <LinkBox
            as="article"
            display="flex"
            flexDirection="column"
            h="full"
            p={4}
            rounded={mainRound}
            bg="surface"
            border="1px solid"
            borderColor="line"
            transition="transform 0.2s ease, border-color 0.2s ease, background 0.2s ease"
            _hover={{ transform: 'translateY(-3px)', borderColor: 'lineStrong', bg: 'surfaceRaised' }}
        >
            <Flex gap={3} align="center">
                <Box flexShrink={0} rounded="lg" overflow="hidden">
                    <Image src={pluginIconSrc(plugin.slug)} alt="" width={56} height={56} />
                </Box>
                <Stack gap={0.5} minW={0}>
                    <Heading as="h3" size="md" fontWeight="700" lineHeight="1.2">
                        <LinkOverlay asChild>
                            <LocaleLink href={pluginPath(plugin.slug)}>{plugin.name}</LocaleLink>
                        </LinkOverlay>
                    </Heading>
                    <Text fontSize="xs" color="fg.subtle" fontFamily="mono">
                        {t('version', { version: plugin.version })}
                    </Text>
                </Stack>
            </Flex>

            <Text mt={3} fontSize="sm" color="fg.muted" lineHeight="1.55">
                {t(`items.${plugin.slug}.tagline`)}
            </Text>

            <HStack mt="auto" pt={4} gap={4} fontSize="sm" fontWeight="semibold" flexWrap="wrap">
                <Link
                    href={storeAssetLink(plugin.assetId)}
                    target="_blank"
                    rel="noreferrer"
                    color="blue.300"
                    _hover={{ color: 'blue.200', textDecoration: 'none' }}
                >
                    <HStack gap={1}>
                        {t('install')}
                        <LuArrowUpRight />
                    </HStack>
                </Link>
                {plugin.docsLink !== null ? (
                    <Link
                        href={plugin.docsLink}
                        target="_blank"
                        rel="noreferrer"
                        color="fg.muted"
                        _hover={{ color: 'fg', textDecoration: 'none' }}
                    >
                        <HStack gap={1}>
                            <LuBookOpen />
                            {t('docs')}
                        </HStack>
                    </Link>
                ) : (
                    hasPluginDoc(plugin.slug) && (
                        <LocaleLink href={pluginDocsPath(plugin.slug)}>
                            <HStack gap={1} color="fg.muted" _hover={{ color: 'fg' }}>
                                <LuBookOpen />
                                {t('docs')}
                            </HStack>
                        </LocaleLink>
                    )
                )}
                {plugin.demoPlaceId !== null && (
                    <Link
                        href={placeLink(plugin.demoPlaceId)}
                        target="_blank"
                        rel="noreferrer"
                        color="fg.muted"
                        _hover={{ color: 'fg', textDecoration: 'none' }}
                    >
                        <HStack gap={1}>
                            <LuPlay />
                            {t('demo')}
                        </HStack>
                    </Link>
                )}
            </HStack>
        </LinkBox>
    );
};
