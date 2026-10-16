import { Flex, Link, Text } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { LuArrowUpRight } from 'react-icons/lu';

type Props = {
    href: string;
    icon: ReactNode;
    label: string;
    detail: string;
};

export const ContactLink = ({ href, icon, label, detail }: Props) => (
    <Link
        href={href}
        target={href.startsWith('mailto:') ? undefined : '_blank'}
        rel="noreferrer"
        display="block"
        _hover={{ textDecoration: 'none' }}
    >
        <Flex
            align="center"
            gap={3}
            p={3.5}
            rounded="2xl"
            bg="surface"
            border="1px solid"
            borderColor="line"
            transition="border-color 0.2s ease, background 0.2s ease"
            _hover={{ borderColor: 'lineStrong', bg: 'surfaceRaised' }}
        >
            <Flex
                w="40px"
                h="40px"
                flexShrink={0}
                align="center"
                justify="center"
                rounded="full"
                bg="surfaceRaised"
                color="fg"
                fontSize="lg"
            >
                {icon}
            </Flex>
            <Flex direction="column" minW={0} flex="1">
                <Text fontSize="sm" fontWeight="semibold">
                    {label}
                </Text>
                <Text fontSize="xs" color="fg.subtle" truncate>
                    {detail}
                </Text>
            </Flex>
            <Text color="fg.subtle">
                <LuArrowUpRight />
            </Text>
        </Flex>
    </Link>
);
