import { Flex, Text } from '@chakra-ui/react';
import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    icon?: ReactNode;
};

/** Small uppercase label that sits above a section heading. */
export const Eyebrow = ({ children, icon }: Props) => (
    <Flex
        align="center"
        gap={2}
        w="fit-content"
        px={3}
        py={1}
        rounded="full"
        bg="surfaceRaised"
        border="1px solid"
        borderColor="line"
        color="fg.muted"
        fontSize="xs"
        fontWeight="semibold"
        letterSpacing="0.12em"
        textTransform="uppercase"
    >
        {icon}
        <Text as="span">{children}</Text>
    </Flex>
);
