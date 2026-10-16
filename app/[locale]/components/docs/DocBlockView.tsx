import type { DocBlock } from '@/content/docs';
import { Box, List, Text } from '@chakra-ui/react';

export const DocBlockView = ({ block }: { block: DocBlock }) => {
    switch (block.kind) {
        case 'paragraph':
            return (
                <Text fontSize="md" color="fg.muted" lineHeight="1.7">
                    {block.text}
                </Text>
            );
        case 'bullets':
            return (
                <List.Root gap={2} pl={5} color="fg.muted" fontSize="md" lineHeight="1.7">
                    {block.items.map((item) => (
                        <List.Item key={item}>{item}</List.Item>
                    ))}
                </List.Root>
            );
        case 'steps':
            return (
                <List.Root as="ol" gap={2} pl={5} color="fg.muted" fontSize="md" lineHeight="1.7">
                    {block.items.map((item) => (
                        <List.Item key={item}>{item}</List.Item>
                    ))}
                </List.Root>
            );
        case 'note':
            return (
                <Box
                    p={4}
                    rounded="xl"
                    bg="rgba(139, 92, 246, 0.12)"
                    borderLeft="3px solid"
                    borderColor="violet"
                    fontSize="sm"
                    color="fg"
                    lineHeight="1.6"
                >
                    {block.text}
                </Box>
            );
        case 'code':
            return (
                <Box
                    as="pre"
                    p={4}
                    rounded="xl"
                    bg="pageBg"
                    border="1px solid"
                    borderColor="line"
                    fontFamily="mono"
                    fontSize="sm"
                    lineHeight="1.6"
                    overflowX="auto"
                    data-language={block.language}
                >
                    <code>{block.code}</code>
                </Box>
            );
        default: {
            const _exhaustive: never = block;
            return _exhaustive;
        }
    }
};
