import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { LocaleLink as Link } from '@/components/LocaleLink';

const sizes = {
    sm: { icon: 32, font: 'lg' },
    md: { icon: 40, font: '2xl' }
} as const;

export const Logo = ({ size = 'md' }: { size?: keyof typeof sizes }) => {
    const { icon, font } = sizes[size];

    return (
        <Link href="/" aria-label="Trimatech home">
            <Flex align="center" gap={2.5}>
                <Image src="/roblox/group-icon.png" alt="" width={icon} height={icon} priority={size === 'md'} />
                <Text fontFamily="heading" fontWeight="800" fontSize={font} letterSpacing="-0.02em" lineHeight="1">
                    trimatech
                </Text>
            </Flex>
        </Link>
    );
};
