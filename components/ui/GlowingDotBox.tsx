'use client';

import { Box, BoxProps } from '@chakra-ui/react';
import { motion } from 'motion/react';
import { useRef, useLayoutEffect, useState } from 'react';

interface GlowingDotBoxProps extends Omit<BoxProps, 'animation' | 'position'> {
    dotColor?: string;
    dotSize?: string;
}

interface Dimensions {
    width: number;
    height: number;
    borderRadii: {
        topLeft: number;
        topRight: number;
        bottomRight: number;
        bottomLeft: number;
    };
}

const parseBorderRadius = (value: string): number => {
    if (!value) return 0;
    const num = parseFloat(value.replace(/[^0-9.]/g, ''));
    return isNaN(num) ? 0 : num;
};

export const GlowingDotBox = ({ dotColor = '#4FD1C5', dotSize = '8px', ...props }: GlowingDotBoxProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const dotSizeNum = parseInt(dotSize);
    const [dimensions, setDimensions] = useState<Dimensions>({
        width: 0,
        height: 0,
        borderRadii: { topLeft: 0, topRight: 0, bottomRight: 0, bottomLeft: 0 }
    });

    useLayoutEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current?.parentElement) {
                const parent = containerRef.current.parentElement;
                const styles = window.getComputedStyle(parent);

                const topLeft = parseBorderRadius(styles.borderTopLeftRadius);
                const topRight = parseBorderRadius(styles.borderTopRightRadius);
                const bottomRight = parseBorderRadius(styles.borderBottomRightRadius);
                const bottomLeft = parseBorderRadius(styles.borderBottomLeftRadius);

                setDimensions({
                    width: parent.offsetWidth,
                    height: parent.offsetHeight,
                    borderRadii: {
                        topLeft,
                        topRight,
                        bottomRight,
                        bottomLeft
                    }
                });
            }
        };

        updateDimensions();
        const resizeObserver = new ResizeObserver(updateDimensions);
        if (containerRef.current?.parentElement) {
            resizeObserver.observe(containerRef.current.parentElement);
        }

        return () => resizeObserver.disconnect();
    }, []);

    const calculateArcPositions = (
        centerX: number,
        centerY: number,
        radius: number,
        startAngle: number,
        endAngle: number,
        steps: number
    ) => {
        const positions = [];
        for (let step = 0; step <= steps; step++) {
            const angle = startAngle + (step / steps) * (endAngle - startAngle);
            positions.push({
                x: centerX + radius * Math.cos(angle),
                y: centerY + radius * Math.sin(angle)
            });
        }
        return positions;
    };

    const calculateKeyframes = () => {
        const { width, height, borderRadii } = dimensions;
        const { topLeft, topRight, bottomRight, bottomLeft } = borderRadii;
        const positions = [];
        const steps = 5; // Number of steps for smooth arcs

        // Calculate straight line lengths
        const topLine = width - topLeft - topRight;
        const rightLine = height - topRight - bottomRight;
        const bottomLine = width - bottomRight - bottomLeft;
        const leftLine = height - bottomLeft - topLeft;

        // Calculate arc lengths
        const topRightArc = (topRight * Math.PI) / 2;
        const bottomRightArc = (bottomRight * Math.PI) / 2;
        const bottomLeftArc = (bottomLeft * Math.PI) / 2;
        const topLeftArc = (topLeft * Math.PI) / 2;

        // Total perimeter
        const totalPerimeter =
            topLine + rightLine + bottomLine + leftLine + topRightArc + bottomRightArc + bottomLeftArc + topLeftArc;

        // Function to add positions for a straight line
        const addLinePositions = (startX: number, startY: number, endX: number, endY: number, length: number) => {
            const numSteps = Math.round((length / totalPerimeter) * steps * 4);
            for (let i = 0; i <= numSteps; i++) {
                const t = i / numSteps;
                positions.push({
                    x: startX + t * (endX - startX),
                    y: startY + t * (endY - startY)
                });
            }
        };

        // Top edge
        addLinePositions(topLeft, 0, width - topRight, 0, topLine);

        // Top-right corner
        if (topRight > 0) {
            positions.push(...calculateArcPositions(width - topRight, topRight, topRight, -Math.PI / 2, 0, steps));
        }

        // Right edge
        addLinePositions(width, topRight, width, height - bottomRight, rightLine);

        // Bottom-right corner
        if (bottomRight > 0) {
            positions.push(
                ...calculateArcPositions(width - bottomRight, height - bottomRight, bottomRight, 0, Math.PI / 2, steps)
            );
        }

        // Bottom edge
        addLinePositions(width - bottomRight, height, bottomLeft, height, bottomLine);

        // Bottom-left corner
        if (bottomLeft > 0) {
            positions.push(
                ...calculateArcPositions(bottomLeft, height - bottomLeft, bottomLeft, Math.PI / 2, Math.PI, steps)
            );
        }

        // Left edge
        addLinePositions(0, height - bottomLeft, 0, topLeft, leftLine);

        // Top-left corner
        if (topLeft > 0) {
            positions.push(...calculateArcPositions(topLeft, topLeft, topLeft, Math.PI, (3 * Math.PI) / 2, steps));
        }

        return positions;
    };

    const keyframes = calculateKeyframes();
    const xKeyframes = keyframes.map((pos) => pos.x - dotSizeNum / 2);
    const yKeyframes = keyframes.map((pos) => pos.y - dotSizeNum / 2);

    return (
        <Box
            ref={containerRef}
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            pointerEvents="none"
            {...props}
        >
            <motion.div
                style={{
                    position: 'absolute',
                    width: dotSize,
                    height: dotSize,
                    borderRadius: '50%',
                    backgroundColor: dotColor,
                    boxShadow: `0 0 10px ${dotColor}, 0 0 20px ${dotColor}, 0 0 30px ${dotColor}`,
                    filter: 'blur(2px)'
                }}
                animate={{
                    x: xKeyframes,
                    y: yKeyframes
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear'
                }}
            />
        </Box>
    );
};
