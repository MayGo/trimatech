'use client';
import { Button } from '@/components/ui/button';
import { Box, BoxProps } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const pulse = keyframes`
  0%  { transform: scaleX(1) scaleY(1); opacity: 0.3; }
  100% { transform: scaleX(1.2) scaleY(1.4); opacity: 0; }
  
`;

const AnimatedBox = (props: BoxProps) => {
    return (
        <Box
            display="inline-block"
            position="absolute"
            width="100%"
            height="100%"
            animation={`${pulse} 2s infinite`}
            animationDelay="0s"
            opacity={0.3}
            top="0"
            left="0"
            borderRadius="full"
            bg="primary"
            {...props}
        />
    );
};

export function PriceItemButton() {
    return (
        <Box display="inline-block" position="relative" mt={4}>
            <Button colorPalette="blue" size="lg" zIndex={10}>
                Join today
            </Button>
            <AnimatedBox animationDelay="0s" />
            <AnimatedBox animationDelay="0.5s" />
            <AnimatedBox animationDelay="1s" />
            <AnimatedBox animationDelay="1.5s" />
            <AnimatedBox animationDelay="2s" />
        </Box>
    );
}
