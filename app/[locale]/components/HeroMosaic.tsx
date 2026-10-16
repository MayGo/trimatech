import { gameIconSrc, type GameSlug } from '@/data/roblox';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';

type Tile = {
    slug: GameSlug;
    size: number;
    top: string;
    left: string;
    rotate: string;
    delay: string;
};

const tiles: readonly Tile[] = [
    { slug: 'slash-for-brainrots', size: 220, top: '6%', left: '30%', rotate: '-6deg', delay: '0s' },
    { slug: 'outfits-on-a-budget', size: 170, top: '48%', left: '2%', rotate: '7deg', delay: '1.2s' },
    { slug: 'territory-takeover', size: 150, top: '56%', left: '58%', rotate: '-4deg', delay: '2.4s' },
    { slug: 'dead-end-road', size: 110, top: '14%', left: '0%', rotate: '10deg', delay: '0.6s' },
    { slug: 'city-states', size: 100, top: '2%', left: '76%', rotate: '-12deg', delay: '1.8s' }
];

/** Decorative collage of game icons for the hero. */
export const HeroMosaic = () => (
    <Box position="relative" w={['320px', '400px', '440px']} h={['320px', '400px', '440px']} flexShrink={0} aria-hidden>
        <Box
            position="absolute"
            inset="10%"
            rounded="full"
            filter="blur(60px)"
            opacity={0.55}
            bgGradient="to-br"
            gradientFrom="magenta"
            gradientVia="violet"
            gradientTo="brand"
        />
        {tiles.map((tile) => (
            <Box
                key={tile.slug}
                position="absolute"
                top={tile.top}
                left={tile.left}
                w={`${tile.size}px`}
                h={`${tile.size}px`}
                rounded="2xl"
                overflow="hidden"
                border="1px solid"
                borderColor="rgba(255,255,255,0.14)"
                shadow="card"
                transform={`rotate(${tile.rotate})`}
                animation="float"
                css={{ animationDelay: tile.delay }}
            >
                <Image src={gameIconSrc(tile.slug)} alt="" width={tile.size} height={tile.size} priority />
            </Box>
        ))}
    </Box>
);
