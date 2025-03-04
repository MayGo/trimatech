'use client';

import { Box } from '@chakra-ui/react';

export function AnimatedGradient() {
    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={-1}
            opacity={1}
            background="linear-gradient(-45deg, #3182CE, #805AD5, #3182CE)"
            backgroundSize="400% 400%"
            animation="gradientBg"
        />
    );
}
