'use client';

import { Box, Flex, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { useState, useEffect, ReactNode } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarouselProps {
    children: ReactNode[];
}

export const Carousel = ({ children }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [isPaused, setIsPaused] = useState(false);

    const itemsSize = children.length;
    const visibleItems = useBreakpointValue({ base: 1, md: 2 }) || 1; // Adjust visible items based on breakpoint
    const itemGap = 16; // Gap between items in px

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + visibleItems) % itemsSize);
        }, 5000);

        return () => clearInterval(interval);
    }, [itemsSize, isPaused, visibleItems]);

    const handleNext = () => {
        if (!visibleItems) return;
        setCurrentIndex((prevIndex) => (prevIndex + visibleItems) % itemsSize);
    };

    const handlePrev = () => {
        if (!visibleItems) return;
        setCurrentIndex((prevIndex) => (prevIndex - visibleItems + itemsSize) % itemsSize);
    };

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    return (
        <Box w="full" position="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <IconButton
                aria-label="Previous"
                position="absolute"
                top="50%"
                left={[0, 0, 0, 0, -10]}
                transform="translateY(-50%)"
                onClick={handlePrev}
            >
                <FaChevronLeft />
            </IconButton>

            <Box overflow="hidden" mx={`-${itemGap / 2}px`}>
                <Flex
                    flexDirection="row"
                    transition="transform 0.5s ease-in-out"
                    transform={`translateX(-${(currentIndex / itemsSize) * 100}%)`}
                    width={`${(itemsSize / visibleItems) * 100}%`}
                    ml="auto"
                    mr="auto"
                >
                    {children.map((child, index) => (
                        <Box key={index} flex={`0 0 ${100 / itemsSize}%`} px={`${itemGap / 2}px`}>
                            {child}
                        </Box>
                    ))}
                </Flex>
            </Box>

            <IconButton
                aria-label="Next"
                position="absolute"
                right={[0, 0, 0, 0, -10]}
                top="50%"
                transform="translateY(-50%)"
                onClick={handleNext}
            >
                <FaChevronRight />
            </IconButton>
        </Box>
    );
};
