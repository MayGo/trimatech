import { outerPadding } from '@/components/theme/padding.utils';
import { Box, Heading, Stack } from '@chakra-ui/react';
import type { ReactNode } from 'react';

type Props = {
    id?: string;
    heading: string;
    children: ReactNode;
};

export const DetailSection = ({ id, heading, children }: Props) => (
    <Box as="section" id={id} px={outerPadding}>
        <Stack gap={5}>
            <Heading as="h2" size="2xl" fontWeight="800" letterSpacing="-0.02em">
                {heading}
            </Heading>
            {children}
        </Stack>
    </Box>
);
