import type { DocSection } from '@/content/docs';
import { Heading, Stack } from '@chakra-ui/react';
import { DocBlockView } from './DocBlockView';

export const DocSectionView = ({ section }: { section: DocSection }) => (
    <Stack as="section" id={section.id} gap={4} css={{ scrollMarginTop: '96px' }}>
        <Heading as="h2" size="xl" fontWeight="700" letterSpacing="-0.01em">
            {section.heading}
        </Heading>
        {section.blocks.map((block, index) => (
            <DocBlockView key={index} block={block} />
        ))}
    </Stack>
);
