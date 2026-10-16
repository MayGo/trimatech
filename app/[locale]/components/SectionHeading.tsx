import { mainHeadingSize, mainSubtextSize } from '@/components/theme/padding.utils';
import { Heading, Stack, Text } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { Eyebrow } from './Eyebrow';

type Props = {
    eyebrow: string;
    heading: string;
    description?: string;
    icon?: ReactNode;
};

export const SectionHeading = ({ eyebrow, heading, description, icon }: Props) => (
    <Stack gap={4} maxW="720px" mb={[8, 8, 10]}>
        <Eyebrow icon={icon}>{eyebrow}</Eyebrow>
        <Heading as="h2" size={mainHeadingSize} fontWeight="800" lineHeight="1.1" letterSpacing="-0.02em">
            {heading}
        </Heading>
        {description && (
            <Text fontSize={mainSubtextSize} color="fg.muted">
                {description}
            </Text>
        )}
    </Stack>
);
