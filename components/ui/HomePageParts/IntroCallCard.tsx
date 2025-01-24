import { Box, Flex, Heading, Text, Image, IconButton, LinkOverlay, LinkBox, Stack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import NextLink from 'next/link';
import { LuArrowRight } from 'react-icons/lu';
import { Button } from '../button';
import { mainRound } from '../padding.utils';
import { shadowSharp } from '../theme.utils';
import { EMAIL_TO, GITHUB_LINK, LINKEDIN_LINK } from '@/utils/constants';

export const IntroCallCard = () => {
    return (
        <Box bg="white" borderRadius={mainRound} p={8} boxShadow={shadowSharp} position="relative" zIndex={1} w="350px">
            <Flex direction="column" gap={8}>
                <Stack direction="row" align="flex-end" justify="center" gap={4}>
                    <NextLink href={LINKEDIN_LINK} target="_blank">
                        <IconButton
                            aria-label="LinkedIn Profile"
                            bg="bgColor"
                            size="lg"
                            rounded="full"
                            alignSelf="center"
                        >
                            <FaLinkedin size={24} />
                        </IconButton>
                    </NextLink>
                    <Box bg="bgColor" p={1} rounded="full">
                        <Image borderRadius="full" boxSize="150px" src="/avatar2.jpg" alt="Maigo" />
                    </Box>

                    <NextLink href={GITHUB_LINK} target="_blank">
                        <IconButton
                            aria-label="GitHub Profile"
                            bg="bgColor"
                            size="lg"
                            rounded="full"
                            alignSelf="center"
                        >
                            <FaGithub size={24} />
                        </IconButton>
                    </NextLink>
                </Stack>
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
                        <Box color="primary">
                            <FaPaperPlane size={32} />
                        </Box>
                        <Flex direction="column">
                            <Text fontSize="md" fontWeight="bold">
                                Prefer to email?
                            </Text>
                            <Text fontSize="md" color="gray.500">
                                <LinkOverlay asChild>
                                    <NextLink href={`mailto:${EMAIL_TO}`}>{EMAIL_TO}</NextLink>
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
