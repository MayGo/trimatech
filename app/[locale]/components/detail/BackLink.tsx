import { LocaleLink as Link } from '@/components/LocaleLink';
import { HStack } from '@chakra-ui/react';
import { LuArrowLeft } from 'react-icons/lu';

type Props = {
    href: string;
    label: string;
};

export const BackLink = ({ href, label }: Props) => (
    <Link href={href}>
        <HStack
            gap={1.5}
            w="fit-content"
            fontSize="sm"
            fontWeight="semibold"
            color="fg.muted"
            _hover={{ color: 'fg' }}
            transition="color 0.2s ease"
        >
            <LuArrowLeft />
            {label}
        </HStack>
    </Link>
);
