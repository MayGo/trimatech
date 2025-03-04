import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react';
import { mainRound } from '../theme/padding.utils';
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
    const testimonials = [
        {
            title: 'Ella Martinez, Activizor',
            avatar: '/testimonials/activizor.jpg',
            content:
                'Staying on top of updates for our tools was always a headache for our small team. Since we started working with Trimatech, things have changed! Our workflow flows much better, and the performance improvements made a big difference for all of us.'
        },
        {
            title: 'James Wilson, MedCore Systems',
            avatar: '/testimonials/medcore.jpg',
            content:
                "Our booking system was an ongoing issue, and hiring a dev wasn't in the budget. Partnering with Trimatech has really stabilized everything - fewer complaints from users and much less stress on our end. It's been a fantastic solution for us!"
        },
        {
            title: 'Sophie Taylor, UrbanTrack',
            avatar: '/testimonials/urbantrack.jpg',
            content:
                'Our logistics app is super complex, but since engaging with Trimatech, issues are getting fixed much quicker. They even offer suggestions that help us improve our system. It feels great to be proactive instead of always reacting to problems!'
        },
        {
            title: 'Daniel Brown, RentEase Solutions',
            avatar: '/testimonials/rentease.png',
            content:
                'We struggled with bugs and updates taking forever. Working with Trimatech has completely turned that around. Everything gets resolved promptly; finally, we can focus on growing our business rather than dealing with glitches!'
        },
        {
            title: 'Clara Müller, GlobalLink Commerce',
            avatar: '/testimonials/globallink.jpg',
            content:
                "For over a year, Trimatech has been managing our eCommerce platform, and I can't express how comforting that has been. Their expertise means that any bumps are handled swiftly, and our operations run so much smoother now!"
        },
        {
            title: 'Ryan Harris, Control NQP',
            avatar: '/testimonials/control.jpg',
            content:
                'After we launched our React desktop app, we realized we needed help keeping it in shape. Maigo has made all the difference - updates, fixes, performance tweaks - all taken care of! I can actually focus on improving the user experience instead of worrying!'
        }
    ];

    return (
        <Box w="full" px={[2, 0]}>
            <Carousel>
                {testimonials.map((testimonial, index) => (
                    <TestimonialItem key={index} title={testimonial.title} imageSrc={testimonial.avatar}>
                        {testimonial.content}
                    </TestimonialItem>
                ))}
            </Carousel>
        </Box>
    );
};
