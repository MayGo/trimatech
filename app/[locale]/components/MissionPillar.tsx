import { mainRound } from '@/components/theme/padding.utils';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import type { ReactNode } from 'react';

type Props = {
    icon: ReactNode;
    title: string;
    text: string;
};

export const MissionPillar = ({ icon, title, text }: Props) => (
    <Stack gap={4} p={6} rounded={mainRound} bg="surface" border="1px solid" borderColor="line" h="full">
        <Box
            w="44px"
            h="44px"
            display="grid"
            placeItems="center"
            rounded="xl"
            color="white"
            fontSize="xl"
            bgGradient="to-br"
            gradientFrom="magenta"
            gradientTo="brand"
        >
            {icon}
        </Box>
        <Heading as="h3" size="lg" fontWeight="700" lineHeight="1.2">
            {title}
        </Heading>
        <Text fontSize="sm" color="fg.muted" lineHeight="1.65">
            {text}
        </Text>
    </Stack>
);
