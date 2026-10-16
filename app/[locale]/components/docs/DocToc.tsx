import type { DocSection } from '@/content/docs';
import { Link, Stack, Text } from '@chakra-ui/react';

type Props = {
    title: string;
    sections: readonly DocSection[];
};

export const DocToc = ({ title, sections }: Props) => (
    <Stack
        gap={2}
        p={4}
        rounded="2xl"
        bg="surface"
        border="1px solid"
        borderColor="line"
        position={['static', 'static', 'static', 'sticky']}
        top="96px"
    >
        <Text fontSize="xs" color="fg.subtle" textTransform="uppercase" letterSpacing="0.08em" fontWeight="semibold">
            {title}
        </Text>
        {sections.map((section) => (
            <Link
                key={section.id}
                href={`#${section.id}`}
                fontSize="sm"
                color="fg.muted"
                _hover={{ color: 'fg', textDecoration: 'none' }}
            >
                {section.heading}
            </Link>
        ))}
    </Stack>
);
