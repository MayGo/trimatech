import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { mainHeadingSize, mainRounded, mainSubtextSize, outerPadding } from '../../components/theme/padding.utils';
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot
} from '../../components/ui/accordion';
import { Questions } from './animations/Questions';

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
        text: 'To get started, contact me to discuss your project and specific needs. I’ll also need secure access to your codebase to begin supporting your application. Once everything is set up, we’ll choose a ticketing system - whether it’s your existing system (like Jira or Trello) or one I create for you - so you can start submitting tasks right away.'
    },
    {
        value: 'd',
        title: 'How fast will my requests be completed?',
        text: 'Each task will start within 48 hours of being submitted. From there, most requests are completed in one to two days, depending on their complexity.'
    },
    {
        value: 'e',
        title: 'How does onboarding work?',
        text: 'When you subscribe to a plan, I’ll ensure a seamless onboarding process. If you already have a ticketing system, such as Jira, Trello, or another platform, I’m happy to adapt and work within your existing setup. If not, I’ll create one for you and guide you through the process. I’ll also securely access your codebase to ensure everything is ready for maintenance. The setup process is quick and focused entirely on your needs.'
    },
    {
        value: 'f',
        title: 'Who are the developers?',
        text: "Trimatech is a one-man agency, ran by Maigo, the founder. Trimatech does not employ other developers, or outsource work to any other entity. You'll work directly with me through the entirety of your experience."
    },
    {
        value: 'g',
        title: 'Is there a limit to how many requests I can make?',
        text: "Once subscribed, you're able to add as many requests to your queue as you'd like, and they will be delivered one by one."
    },
    {
        value: 'h',
        title: 'How does the pause feature work?',
        text: "We understand you may not have enough work to fill up entire month. Perhaps you only have one or two requests at the moment. That's where pausing your subscription comes in handy. Billing cycles are based on 31 day period. Let's say you sign up and use the service for 21 days, and then decide to pause your subscription. This means that the billing cycle will be paused and you'll have 10 days of service remaining to be used anytime in the future."
    },
    {
        value: 'i',
        title: 'What if I only have a single request?',
        text: "That's fine. You can pause your subscription when finished and return when you have additional development needs. There's no need to let the remainder of your subscription go to waste."
    }
];

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
            <Flex flexDirection="column" h="full" gap={10} flex="1">
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
                <Questions />
            </Flex>
        </Flex>
    );
};
