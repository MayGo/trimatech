import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { mainRound } from '../padding.utils';
import { BsPerson } from 'react-icons/bs';

const TestimonialItem = ({
    title,
    icon,
    children
}: {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}) => {
    return (
        <Box w="full" rounded={mainRound} p={10} border="2px solid" borderColor="bgColor" bg="bgColorWhiteTransparent">
            <Flex align="center" gap={2}>
                {icon}
                <Heading size="2xl" color="fg">
                    {title}
                </Heading>
            </Flex>
            <Text fontSize={fontSize} pt={4}>
                {children}
            </Text>
        </Box>
    );
};

const fontSize = 'md';

export const Testimonials = () => {
    return (
        <Box w="full" px={[2, 0]}>
            <Flex flexDirection={['column', 'column', 'row']} gap={4}>
                <TestimonialItem
                    title="Adam P. - Founder, Cloudly Innovations"
                    icon={<BsPerson size={32} color="primary" />}
                >
                    “Trimatech's subscription model has been a lifesaver for us. It's so much easier than dealing with
                    freelancers and their hourly rates. We've saved thousands and gotten way better results. Highly
                    recommend!”
                </TestimonialItem>
                <TestimonialItem
                    title="Emily G. - CEO, BloomTech Solutions"
                    icon={<BsPerson size={32} color="primary" />}
                >
                    "Honestly, Trimatech has been a huge win for our startup. Their React expertise is top-notch, and
                    the monthly performance reviews have been a game-changer. We've been able to focus on growth while
                    they handle the tech stuff."
                </TestimonialItem>
            </Flex>
        </Box>
    );
};
