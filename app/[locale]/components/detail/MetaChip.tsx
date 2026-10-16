import { Stack, Text } from '@chakra-ui/react';
import type { ReactNode } from 'react';

type Props = {
    label: string;
    children: ReactNode;
};

/** Small label/value pair used in detail page headers. */
export const MetaChip = ({ label, children }: Props) => (
    <Stack gap={0.5} minW="90px">
        <Text fontSize="xs" color="fg.subtle" textTransform="uppercase" letterSpacing="0.08em" fontWeight="semibold">
            {label}
        </Text>
        <Text fontSize="sm" fontWeight="medium" as="div">
            {children}
        </Text>
    </Stack>
);
