import { mainRound } from '@/components/theme/padding.utils';
import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { Carousel } from './Carousel';

const TestimonialItem = ({
    title,
    imageSrc,
    children
}: {
    title: string;
    imageSrc?: string;
    children: React.ReactNode;
}) => {
    return (
        <Box
            w="full"
            h="full"
            rounded={mainRound}
            p={10}
            border="2px solid"
            borderColor="bgColor"
            bg="bgColorWhiteTransparent"
        >
            <Flex align="center" gap={2}>
                <Avatar.Root size="lg">
                    <Avatar.Fallback name={title} />
                    <Avatar.Image src={imageSrc} />
                </Avatar.Root>
                <Heading size="2xl" color="fg">
                    {title}
                </Heading>
            </Flex>
            <Text fontSize="md" pt={4} fontStyle="italic">
                "{children}"
            </Text>
        </Box>
    );
};

export const Testimonials = () => {
    const testimonials = useTranslations('testimonials');

    return (
        <Box w="full" px={[2, 0]}>
            <Carousel>
                {testimonials.raw('items').map((testimonial: any, index: number) => (
                    <TestimonialItem key={index} title={testimonial.title} imageSrc={testimonial.avatar}>
                        {testimonial.content}
                    </TestimonialItem>
                ))}
            </Carousel>
        </Box>
    );
};
