import { mainRound, outerPadding } from '@/components/theme/padding.utils';
import { EMAIL_TO, GITHUB_LINK, LINKEDIN_LINK, ROBLOX_GROUP_LINK, ROBLOX_PROFILE_LINK } from '@/utils/constants';
import { Box, Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LuMail, LuMessageCircle, LuUsers } from 'react-icons/lu';
import { SiRoblox } from 'react-icons/si';
import { ContactLink } from './ContactLink';
import { SectionHeading } from './SectionHeading';

export const Contact = () => {
    const t = useTranslations('contact');

    return (
        <Box as="section" id="contact" px={outerPadding}>
            <Flex direction={['column', 'column', 'column', 'row']} gap={[10, 10, 12, 16]} align="flex-start">
                <Box flex="1">
                    <SectionHeading
                        eyebrow={t('eyebrow')}
                        heading={t('heading')}
                        description={t('description')}
                        icon={<LuMessageCircle />}
                    />
                    <Flex align="center" gap={4}>
                        <Box
                            rounded="full"
                            overflow="hidden"
                            flexShrink={0}
                            p="3px"
                            bgGradient="to-br"
                            gradientFrom="magenta"
                            gradientTo="brand"
                        >
                            <Box rounded="full" overflow="hidden" w="72px" h="72px" position="relative">
                                <Image
                                    src="/avatar2.jpg"
                                    alt={t('ownerName')}
                                    fill
                                    sizes="72px"
                                    style={{ objectFit: 'cover' }}
                                />
                            </Box>
                        </Box>
                        <Stack gap={0}>
                            <Heading as="p" size="lg" fontWeight="700">
                                {t('ownerName')}
                            </Heading>
                            <Text fontSize="sm" color="fg.muted">
                                {t('ownerTitle')}
                            </Text>
                        </Stack>
                    </Flex>
                </Box>

                <SimpleGrid flex="1" w="full" columns={[1, 2]} gap={3} rounded={mainRound}>
                    <ContactLink href={`mailto:${EMAIL_TO}`} icon={<LuMail />} label={t('email')} detail={EMAIL_TO} />
                    <ContactLink
                        href={ROBLOX_PROFILE_LINK}
                        icon={<SiRoblox />}
                        label={t('robloxProfile')}
                        detail="@MayGoRblx"
                    />
                    <ContactLink
                        href={ROBLOX_GROUP_LINK}
                        icon={<LuUsers />}
                        label={t('robloxGroup')}
                        detail="roblox.com/communities"
                    />
                    <ContactLink href={GITHUB_LINK} icon={<FaGithub />} label={t('github')} detail="github.com/MayGo" />
                    <ContactLink
                        href={LINKEDIN_LINK}
                        icon={<FaLinkedin />}
                        label={t('linkedin')}
                        detail="linkedin.com/in/maigo-erit"
                    />
                </SimpleGrid>
            </Flex>
        </Box>
    );
};
