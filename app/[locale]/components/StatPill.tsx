import { Stack, Text } from '@chakra-ui/react';

type Props = {
    value: string;
    label: string;
};

export const StatPill = ({ value, label }: Props) => (
    <Stack gap={0} minW="110px">
        <Text fontFamily="heading" fontWeight="800" fontSize={['2xl', '3xl']} lineHeight="1" letterSpacing="-0.02em">
            {value}
        </Text>
        <Text fontSize="sm" color="fg.subtle">
            {label}
        </Text>
    </Stack>
);
