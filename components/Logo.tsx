import { Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const Logo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => {
    return (
        <Link href="/" aria-label="Logo">
            <Flex align="center" justify="center" gap={2.5}>
                <Image
                    h={size === 'sm' ? '30px' : '50px'}
                    flex="1"
                    maxW="full"
                    objectFit="contain"
                    loading="lazy"
                    alt=""
                    src="/trimatech-logo-1@2x.png"
                />
                <Text
                    h={size === 'sm' ? '20px' : '42px'}
                    w={size === 'sm' ? '100px' : '147px'}
                    lineHeight="130%"
                    textTransform="capitalize"
                    display="none"
                    whiteSpace="nowrap"
                >
                    Trimatech
                </Text>
            </Flex>
        </Link>
    );
};
