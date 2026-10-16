import { Stack, Text } from '@chakra-ui/react';

type Props = {
    value: string;
    label: string;
};

export const StatTile = ({ value, label }: Props) => (
    <Stack gap={0.5} p={4} rounded="2xl" bg="surface" border="1px solid" borderColor="line" minW="120px">
        <Text fontFamily="heading" fontWeight="800" fontSize="2xl" lineHeight="1" letterSpacing="-0.02em">
            {value}
        </Text>
        <Text fontSize="xs" color="fg.subtle">
            {label}
        </Text>
    </Stack>
);
