import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { mainRound } from '../padding.utils';
import { BsPerson } from 'react-icons/bs';
import { Carousel } from './Carousel';

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
            <Text fontSize="md" pt={4}>
                {children}
            </Text>
        </Box>
    );
};

export const Testimonials = () => {
    const testimonials = [
        {
            title: '1Adam P. - Founder, Cloudly Innovations',
            content:
                "“Trimatech's subscription model has been a lifesaver for us. It's so much easier than dealing with freelancers and their hourly rates. We've saved thousands and gotten way better results. Highly recommend!”"
        },
        {
            title: '2Emily G. - CEO, BloomTech Solutions',
            content:
                "Honestly, Trimatech has been a huge win for our startup. Their React expertise is top-notch, and the monthly performance reviews have been a game-changer. We've been able to focus on growth while they handle the tech stuff."
        },
        {
            title: '3asdasdasds',
            content:
                "Honestly, Trimatech has been a huge win for our startup2. Their React expertise is top-notch, and the monthly performance reviews have been a game-changer. We've been able to focus on growth while they handle the tech stuff."
        },
        {
            title: '4dfd4r32r234r243232332',
            content:
                "Honestly, Trimatech has been a huge win for our startup3. Their React expertise is top-notch, and the monthly performance reviews have been a game-changer. We've been able to focus on growth while they handle the tech stuff."
        },
        {
            title: '5t435243asdasdasds21r',
            content:
                "Honestly, Trimatech has been a huge win for our startup2. Their React expertise is top-notch, and the monthly performance reviews have been a game-changer. We've been able to focus on growth while they handle the tech stuff."
        },
        {
            title: '6......234r243232332',
            content:
                "Honestly, Trimatech has been a huge win for our startup3. Their React expertise is top-notch, and the monthly performance reviews have been a game-changer. We've been able to focus on growth while they handle the tech stuff."
        }
    ];

    return (
        <Box w="full" px={[2, 0]}>
            <Carousel>
                {testimonials.map((testimonial, index) => (
                    <TestimonialItem
                        key={index}
                        title={testimonial.title}
                        icon={<BsPerson size={32} color="primary" />}
                    >
                        {testimonial.content}
                    </TestimonialItem>
                ))}
            </Carousel>
        </Box>
    );
};
