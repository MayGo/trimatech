import { mainRounded, outerPadding } from '@/components/theme/padding.utils';
import { Box, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { BackLink } from './BackLink';

type Props = {
    back: { href: string; label: string };
    iconSrc: string;
    title: string;
    tagline: string;
    /** Badges and small labels shown above the title. */
    badges?: ReactNode;
    /** MetaChip elements shown under the tagline. */
    meta: ReactNode;
    /** ActionButton elements. */
    actions: ReactNode;
};

export const DetailHero = ({ back, iconSrc, title, tagline, badges, meta, actions }: Props) => (
    <Box as="section" px={outerPadding} pt={[6, 8, 10]}>
        <Stack gap={6}>
            <BackLink href={back.href} label={back.label} />
            <Box
                p={[5, 6, 8, 10]}
                rounded={mainRounded}
                border="1px solid"
                borderColor="line"
                bg="rgba(16, 22, 42, 0.7)"
                backgroundImage="radial-gradient(700px 320px at 0% 0%, rgba(139, 92, 246, 0.18), transparent 60%)"
            >
                <Flex direction={['column', 'column', 'row']} gap={[6, 6, 8, 10]} align="flex-start">
                    <Box
                        flexShrink={0}
                        rounded="2xl"
                        overflow="hidden"
                        border="1px solid"
                        borderColor="lineStrong"
                        shadow="card"
                        w={['120px', '140px', '180px']}
                        h={['120px', '140px', '180px']}
                        position="relative"
                    >
                        <Image src={iconSrc} alt="" fill sizes="180px" priority />
                    </Box>
                    <Stack gap={5} flex="1" minW={0}>
                        {badges && (
                            <HStack gap={2} flexWrap="wrap">
                                {badges}
                            </HStack>
                        )}
                        <Heading
                            as="h1"
                            fontSize={['3xl', '4xl', '5xl']}
                            fontWeight="800"
                            lineHeight="1.05"
                            letterSpacing="-0.02em"
                        >
                            {title}
                        </Heading>
                        <Text fontSize={['md', 'lg']} color="fg.muted" maxW="640px">
                            {tagline}
                        </Text>
                        <Flex gap={[5, 8]} flexWrap="wrap" pt={2} borderTop="1px solid" borderColor="line">
                            {meta}
                        </Flex>
                        <HStack gap={3} flexWrap="wrap">
                            {actions}
                        </HStack>
                    </Stack>
                </Flex>
            </Box>
        </Stack>
    </Box>
);
