import { gameScreenshotSrc, type GameSlug } from '@/data/roblox';
import { Box, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';

type Props = {
    slug: GameSlug;
    count: number;
};

export const ScreenshotGallery = ({ slug, count }: Props) => (
    <SimpleGrid columns={[1, 1, count > 1 ? 2 : 1]} gap={4}>
        {Array.from({ length: count }, (_, index) => (
            <Box
                key={index}
                position="relative"
                w="full"
                aspectRatio="16 / 9"
                rounded="2xl"
                overflow="hidden"
                border="1px solid"
                borderColor="line"
                shadow="card"
            >
                <Image
                    src={gameScreenshotSrc(slug, index)}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 640px"
                    style={{ objectFit: 'cover' }}
                />
            </Box>
        ))}
    </SimpleGrid>
);
