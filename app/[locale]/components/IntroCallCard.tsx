import { mainRound } from '@/components/theme/padding.utils';
import { shadowSharp } from '@/components/theme/theme.utils';
import { Button } from '@/components/ui/button';
import { EMAIL_TO, GITHUB_LINK, LINKEDIN_LINK } from '@/utils/constants';
import { Box, Flex, Heading, IconButton, Image, LinkBox, LinkOverlay, Stack, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import NextLink from 'next/link';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { LuArrowRight } from 'react-icons/lu';

export const IntroCallCard = () => {
    const t = useTranslations('introCallCard');

    return (
        <Box bg="white" borderRadius={mainRound} p={8} boxShadow={shadowSharp} position="relative" zIndex={1} w="350px">
            <Flex direction="column" gap={7}>
                <Box>
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
                    <Heading size="xl" fontWeight="medium" textAlign="center" mt={3}>
                        {t('ownerName')}
                    </Heading>
                    <Heading size="md" fontWeight="light" textAlign="center">
                        {t('ownerTitle')}
                    </Heading>
                </Box>
                <Heading fontSize="3xl" lineHeight="1.3">
                    {t('bookIntroCall')}
                </Heading>
                <NextLink href="#book">
                    <Button colorPalette="blue" size="lg" w="full">
                        {t('bookCallButton')}
                    </Button>
                </NextLink>
                <LinkBox>
                    <Flex align="center" gap={8} justifyContent="space-between">
                        <Box color="primary">
                            <FaPaperPlane size={32} />
                        </Box>
                        <Flex direction="column">
                            <Text fontSize="md" fontWeight="bold">
                                {t('preferEmail')}
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
