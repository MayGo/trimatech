import { Accordion, HStack } from '@chakra-ui/react';
import * as React from 'react';
import { LuChevronDown } from 'react-icons/lu';

interface AccordionItemTriggerProps extends Accordion.ItemTriggerProps {
    indicatorPlacement?: 'start' | 'end';
}

export const AccordionItemTrigger = React.forwardRef<HTMLButtonElement, AccordionItemTriggerProps>(
    function AccordionItemTrigger(props, ref) {
        const { children, indicatorPlacement = 'end', ...rest } = props;

        return (
            <Accordion.ItemTrigger
                {...rest}
                ref={ref}
                cursor="pointer"
                userSelect="none"
                _hover={{ bg: 'rgba(0,0,0,0.02)' }}
            >
                {indicatorPlacement === 'start' && (
                    <Accordion.ItemIndicator rotate={{ base: '-90deg', _open: '0deg' }} transition="transform 0.2s">
                        <LuChevronDown />
                    </Accordion.ItemIndicator>
                )}
                <HStack gap="4" flex="1" textAlign="start" width="full">
                    {children}
                </HStack>
                {indicatorPlacement === 'end' && (
                    <Accordion.ItemIndicator transition="transform 0.2s">
                        <LuChevronDown />
                    </Accordion.ItemIndicator>
                )}
            </Accordion.ItemTrigger>
        );
    }
);

interface AccordionItemContentProps extends Accordion.ItemContentProps {}

export const AccordionItemContent = React.forwardRef<HTMLDivElement, AccordionItemContentProps>(
    function AccordionItemContent(props, ref) {
        console.log('......', props);
        return (
            <Accordion.ItemContent overflow="hidden" transition="height 0.2s ease, opacity 0.2s ease">
                <Accordion.ItemBody {...props} ref={ref} />
            </Accordion.ItemContent>
        );
    }
);

export const AccordionRoot = Accordion.Root;
export const AccordionItem = Accordion.Item;
