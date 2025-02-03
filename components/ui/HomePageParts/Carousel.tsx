'use client';

import { Box, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import { useState, useEffect, ReactNode } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

interface CarouselProps {
    children: ReactNode[];
}

export const Carousel = ({ children }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { open, onOpen, onClose } = useDisclosure();
    const [isPaused, setIsPaused] = useState(false);

    const itemsSize = children.length;
    const visibleItems = 2; // Number of items to show at once
    const itemGap = 16; // Gap between items in rem

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + visibleItems) % itemsSize);
        }, 5000);

        return () => clearInterval(interval);
    }, [itemsSize, isPaused]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + visibleItems) % itemsSize);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - visibleItems + itemsSize) % itemsSize);
    };

    const handleMouseEnter = () => {
        onOpen();
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        onClose();
        setIsPaused(false);
    };

    return (
        <Box w="full" position="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {open && (
                <IconButton
                    aria-label="Previous"
                    position="absolute"
                    left={-10}
                    top="50%"
                    transform="translateY(-50%)"
                    onClick={handlePrev}
                >
                    <ChevronLeftIcon />
                </IconButton>
            )}

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

            {open && (
                <IconButton
                    aria-label="Next"
                    position="absolute"
                    right={-10}
                    top="50%"
                    transform="translateY(-50%)"
                    onClick={handleNext}
                >
                    <ChevronRightIcon />
                </IconButton>
            )}
        </Box>
    );
};
