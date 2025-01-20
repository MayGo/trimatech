import { Box, Flex, Heading, Text, Image, IconButton, LinkOverlay, LinkBox } from '@chakra-ui/react';
import { FaPaperPlane } from 'react-icons/fa';
import NextLink from 'next/link';
import { AccordionItem, AccordionItemTrigger, AccordionItemContent, AccordionRoot } from '../accordion';
import { LuArrowRight } from 'react-icons/lu';
import { Button } from '../button';
import { mainHeadingSize, mainRound, mainRounded, mainSubtextSize, outerPadding } from '../padding.utils';
import { shadowSharp } from '../theme.utils';

const items = [
    {
        value: 'a',
        title: 'What types of projects do you maintain?',
        text: 'We specialize in maintaining and upgrading existing React applications, ensuring they remain robust and efficient.'
    },
    {
        value: 'b',
        title: 'Can I request both bug fixes and new features?',
        text: 'Absolutely! Our service covers bug fixes, feature enhancements, and updates to libraries or frameworks.'
    },
    {
        value: 'c',
        title: 'How do I get started with maintenance?',
        text: "Simply contact us to discuss your project, and we'll set you up with immediate access to our ticketing system."
    },
    {
        value: 'd',
        title: 'How fast will my requests be completed?',
        text: 'On average, most requests are completed in just two days or less. However, more complex requests can take longer.'
    },
    {
        value: 'e',
        title: 'How does onboarding work?',
        text: "Subscribe to a plan and we'll quickly add you to your very own Trello board. This process usually takes about an hour to complete from the time you subscribe. Once you accept the invite to Trello, you're ready to rock. Further instructions on how to use the Trello board to request designs can be found on the board itself."
    },
    {
        value: 'f',
        title: 'Who are the developers?',
        text: "Trimatech is a one-man agency, ran by Maigo, the founder. Trimatech does not employ other developers, or outsource work to any other entity. You'll work directly with me through the entirety of your experience."
    },
    {
        value: 'g',
        title: 'Is there a limit to how many requests I can make?',
        text: "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one."
    },
    {
        value: 'h',
        title: 'How does the pause feature work?',
        text: "We understand you may not have enough design work to fill up entire month. Perhaps you only have one or two design requests at the moment. That's where pausing your subscription comes in handy. Billing cycles are based on 31 day period. Let's say you sign up and use the service for 21 days, and then decide to pause your subscription. This means that the billing cycle will be paused and you'll have 10 days of service remaining to be used anytime in the future."
    },
    {
        value: 'i',
        title: 'What if I only have a single request?',
        text: "That's fine. You can pause your subscription when finished and return when you have additional design needs. There's no need to let the remainder of your subscription go to waste."
    }
];

const IntroCallCard = () => {
    return (
        <Box bg="white" borderRadius={mainRound} p={8} boxShadow={shadowSharp}>
            <Flex direction="column" gap={8}>
                <Image borderRadius="full" boxSize="100px" src="/avatar.png" alt="Emoji" />
                <Heading fontSize="3xl" width="210px">
                    Book a 15 min intro call
                </Heading>
                <NextLink href="#book">
                    <Button colorPalette="blue" size="lg" w="full">
                        Book a call
                    </Button>
                </NextLink>
                <LinkBox>
                    <Flex align="center" gap={8} justifyContent="space-between">
                        <Box color="gray.500">
                            <FaPaperPlane size={32} />
                        </Box>
                        <Flex direction="column">
                            <Text fontSize="md" fontWeight="bold">
                                Prefer to email?
                            </Text>
                            <Text fontSize="md" color="gray.500">
                                <LinkOverlay asChild>
                                    <NextLink href="mailto:info@trimatech.ee">info@trimatech.ee</NextLink>
                                </LinkOverlay>
                            </Text>
                        </Flex>
                        <IconButton colorPalette="blue" rounded="full">
                            <LuArrowRight />
                        </IconButton>
                    </Flex>
                </LinkBox>
            </Flex>
        </Box>
    );
};

export const Faq = () => {
    return (
        <Flex
            flexDirection={['column', 'column', 'row']}
            bg="bgColor"
            w="full"
            rounded={mainRounded}
            p={outerPadding}
            gap={outerPadding}
        >
            <Flex flexDirection="column" h="full" gap={10} flex="2">
                <Box flex="1">
                    <Heading size={mainHeadingSize}>Frequently Asked Questions</Heading>
                    <Text fontSize={mainSubtextSize} pt={4}>
                        Schedule a quick call to discuss your React maintenance needs and see if we're a good fit.
                    </Text>
                </Box>
                <Box w="full">
                    <AccordionRoot size="lg" variant="outline" collapsible multiple colorPalette="blue">
                        {items.map((item, index) => (
                            <AccordionItem key={index} value={item.value}>
                                <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
                                <AccordionItemContent>
                                    <Box pb={4}>{item.text}</Box>
                                </AccordionItemContent>
                            </AccordionItem>
                        ))}
                    </AccordionRoot>
                </Box>
            </Flex>
            <Flex justifyContent="center" alignItems="start" flex="1" pt={8}>
                <IntroCallCard />
            </Flex>
        </Flex>
    );
};
