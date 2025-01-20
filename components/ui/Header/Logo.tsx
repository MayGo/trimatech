import { Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const Logo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => {
    return (
        <Link href="/" aria-label="Logo">
            <Flex align="center" justify="center" gap={2.5}>
                <Image
                    h={size === 'sm' ? '46px' : '70px'}
                    flex="1"
                    maxW="full"
                    objectFit="contain"
                    loading="lazy"
                    alt=""
                    src="/trimatech-logo.png"
                    ml="-12px"
                />
            </Flex>
        </Link>
    );
};
