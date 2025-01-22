import { Box, Flex, Heading, Text, Image, IconButton, LinkOverlay, LinkBox } from '@chakra-ui/react';
import { FaPaperPlane } from 'react-icons/fa';
import NextLink from 'next/link';
import { LuArrowRight } from 'react-icons/lu';
import { Button } from '../button';
import { mainRound } from '../padding.utils';
import { shadowSharp } from '../theme.utils';

export const IntroCallCard = () => {
    return (
        <Box bg="white" borderRadius={mainRound} p={8} boxShadow={shadowSharp} position="relative" zIndex={1} w="350px">
            <Flex direction="column" gap={8}>
                <Image borderRadius="full" boxSize="150px" src="/avatar2.jpg" alt="Maigo" alignSelf="center" />
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
