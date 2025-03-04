'use client';

import { Box, BoxProps, Button, ButtonProps, Icon, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';

interface CustomAccordionProps {
    children: React.ReactNode;
    allowMultiple?: boolean;
    defaultIndex?: number | number[];
    variant?: 'outline' | 'filled' | 'subtle';
}

interface CustomAccordionItemProps {
    title: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
    titleProps?: ButtonProps;
    contentProps?: BoxProps;
    variant?: 'outline' | 'filled' | 'subtle';
    borderTopRadius?: string | number;
    borderBottomRadius?: string | number;
    mb?: string | number;
}

const CustomAccordionContext = React.createContext<{
    openIndices: number[];
    toggleItem: (index: number) => void;
}>({
    openIndices: [],
    toggleItem: () => {}
});

export const CustomAccordion: React.FC<CustomAccordionProps & BoxProps> = ({
    children,
    allowMultiple = false,
    defaultIndex = [],
    variant = 'outline',
    ...rest
}) => {
    const [openIndices, setOpenIndices] = useState<number[]>(
        Array.isArray(defaultIndex) ? defaultIndex : defaultIndex !== undefined ? [defaultIndex] : []
    );

    const toggleItem = (index: number) => {
        if (allowMultiple) {
            setOpenIndices((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
        } else {
            setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
        }
    };

    return (
        <CustomAccordionContext.Provider value={{ openIndices, toggleItem }}>
            <Box w="100%" {...rest}>
                {React.Children.map(children, (child, index) => {
                    if (!React.isValidElement(child)) return null;
                    return React.cloneElement(child as React.ReactElement<CustomAccordionItemProps>, {
                        isOpen: openIndices.includes(index),
                        onToggle: () => toggleItem(index),
                        variant,
                        borderTopRadius: index === 0 ? 'md' : 0,
                        borderBottomRadius: index === React.Children.count(children) - 1 ? 'md' : 0,
                        mb: '-1px'
                    });
                })}
            </Box>
        </CustomAccordionContext.Provider>
    );
};

export const CustomAccordionItem: React.FC<CustomAccordionItemProps & BoxProps> = ({
    title,
    children,
    isOpen,
    onToggle,
    variant = 'outline',
    titleProps,
    contentProps,
    ...rest
}) => {
    const getBorderStyles = () => {
        switch (variant) {
            case 'outline':
                return {
                    borderWidth: '1px',
                    borderColor: 'gray.200',
                    _dark: { borderColor: 'gray.700' }
                };
            case 'filled':
                return {
                    borderWidth: '1px',
                    borderColor: 'transparent',
                    bg: 'gray.50',
                    _dark: { bg: 'gray.800' }
                };
            case 'subtle':
                return {
                    borderBottom: '1px solid',
                    borderColor: 'gray.200',
                    _dark: { borderColor: 'gray.700' }
                };
            default:
                return {};
        }
    };

    return (
        <Box {...getBorderStyles()} {...rest}>
            <Button
                variant="ghost"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                textAlign="left"
                width="100%"
                py={4}
                px={0}
                fontWeight="semibold"
                _hover={{ bg: 'blackAlpha.50' }}
                _dark={{ _hover: { bg: 'whiteAlpha.50' } }}
                onClick={onToggle}
                {...titleProps}
            >
                {typeof title === 'string' ? <Text fontSize="md">{title}</Text> : title}
                <Icon
                    as={LuChevronDown}
                    transform={isOpen ? 'rotate(0deg)' : 'rotate(-90deg)'}
                    transition="transform 0.2s"
                />
            </Button>
            <Box maxH={isOpen ? '1000px' : '0px'} overflow="hidden" transition="all 0.3s ease" opacity={isOpen ? 1 : 0}>
                <Box py={5} {...contentProps}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
};
