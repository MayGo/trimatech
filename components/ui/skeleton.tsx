import type { SkeletonProps as ChakraSkeletonProps, CircleProps } from '@chakra-ui/react';
import { Box, Skeleton as ChakraSkeleton, Circle, Stack } from '@chakra-ui/react';
import * as React from 'react';

export interface SkeletonCircleProps extends ChakraSkeletonProps {
    size?: CircleProps['size'];
}

export const SkeletonCircle = React.forwardRef<HTMLDivElement, SkeletonCircleProps>(
    function SkeletonCircle(props, ref) {
        const { size, ...rest } = props;
        return (
            <Circle size={size} asChild ref={ref}>
                <ChakraSkeleton {...rest} />
            </Circle>
        );
    }
);

export interface SkeletonTextProps extends ChakraSkeletonProps {
    noOfLines?: number;
}

export const SkeletonText = React.forwardRef<HTMLDivElement, SkeletonTextProps>(function SkeletonText(props, ref) {
    const { noOfLines = 3, gap, ...rest } = props;
    return (
        <Stack gap={gap} width="full" ref={ref}>
            {Array.from({ length: noOfLines }).map((_, index) => (
                <ChakraSkeleton height="4" key={index} {...props} _last={{ maxW: '80%' }} {...rest} />
            ))}
        </Stack>
    );
});

export const SkeletonField = React.forwardRef<HTMLDivElement, SkeletonTextProps>(function SkeletonField(props, ref) {
    return (
        <Box ref={ref} w="full" {...props}>
            <SkeletonText noOfLines={1} gap={0} mb={2} />
            <ChakraSkeleton height={10} />
        </Box>
    );
});

export const SkeletonFields = React.forwardRef<HTMLDivElement, SkeletonTextProps>(function SkeletonFields(props, ref) {
    const { noOfLines = 3, gap, ...rest } = props;
    return (
        <Stack gap={gap} width="full" ref={ref}>
            {Array.from({ length: noOfLines }).map((_, index) => (
                <SkeletonField key={index} {...rest} />
            ))}
        </Stack>
    );
});

export const Skeleton = ChakraSkeleton;
