import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { LuCheck } from 'react-icons/lu';

export const FeatureList = ({ items }: { items: readonly string[] }) => (
    <SimpleGrid columns={[1, 1, 2]} gap={3}>
        {items.map((item) => (
            <Flex
                key={item}
                gap={3}
                align="flex-start"
                p={4}
                rounded="2xl"
                bg="surface"
                border="1px solid"
                borderColor="line"
            >
                <Box
                    flexShrink={0}
                    mt={0.5}
                    w="22px"
                    h="22px"
                    display="grid"
                    placeItems="center"
                    rounded="full"
                    color="white"
                    fontSize="xs"
                    bgGradient="to-br"
                    gradientFrom="magenta"
                    gradientTo="brand"
                >
                    <LuCheck />
                </Box>
                <Text fontSize="sm" color="fg" lineHeight="1.6">
                    {item}
                </Text>
            </Flex>
        ))}
    </SimpleGrid>
);
