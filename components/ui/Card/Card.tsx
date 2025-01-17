import { ReactNode } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}

export default function Card({ title, description, footer, children }: Props) {
  return (
    <Box w="full" maxW="3xl" m="auto" my={8} borderWidth="1px" borderRadius="md" p={0} borderColor="gray.700">
      <Box px={5} py={4}>
        <Heading as="h3" mb={1} size="lg" fontWeight="medium">
          {title}
        </Heading>
        {description && <Text color="gray.300">{description}</Text>}
        {children}
      </Box>
      {footer && (
        <Box p={4} borderTopWidth="1px" borderRadius="md" borderColor="gray.700" bg="gray.900" color="gray.500">
          {footer}
        </Box>
      )}
    </Box>
  );
}
