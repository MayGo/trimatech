import type { GameStatus } from '@/data/roblox';
import { Badge } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';

const paletteFor = (status: GameStatus): string => {
    switch (status) {
        case 'live':
            return 'green';
        case 'new':
            return 'pink';
        case 'alpha':
            return 'orange';
        default: {
            const _exhaustive: never = status;
            return _exhaustive;
        }
    }
};

export const StatusBadge = ({ status }: { status: GameStatus }) => {
    const t = useTranslations('games.status');

    return (
        <Badge colorPalette={paletteFor(status)} variant="subtle" rounded="full" px={2.5} fontSize="xs">
            {t(status)}
        </Badge>
    );
};
