import { mainRounded, outerPadding } from '@/components/theme/padding.utils';
import { ROBLOX_TS_STARTER_LINK } from '@/utils/constants';
import { Box, Link, SimpleGrid } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { FaGithub } from 'react-icons/fa';
import { LuArrowUpRight, LuCode, LuGamepad2, LuTarget, LuWrench } from 'react-icons/lu';
import { MissionPillar } from './MissionPillar';
import { SectionHeading } from './SectionHeading';

const pillars = [
    { key: 'games', icon: <LuGamepad2 /> },
    { key: 'tools', icon: <LuWrench /> },
    { key: 'engineering', icon: <LuCode /> }
] as const;

export const Mission = () => {
    const t = useTranslations('mission');

    return (
        <Box as="section" id="mission" px={outerPadding}>
            <Box
                p={[6, 8, 10, 12]}
                rounded={mainRounded}
                border="1px solid"
                borderColor="line"
                bg="rgba(16, 22, 42, 0.6)"
                backgroundImage="radial-gradient(600px 300px at 100% 0%, rgba(225, 29, 214, 0.14), transparent 60%)"
            >
                <SectionHeading
                    eyebrow={t('eyebrow')}
                    heading={t('heading')}
                    description={t('description')}
                    icon={<LuTarget />}
                />
                <SimpleGrid columns={[1, 1, 3]} gap={4}>
                    {pillars.map((pillar) => (
                        <MissionPillar
                            key={pillar.key}
                            icon={pillar.icon}
                            title={t(`pillars.${pillar.key}.title`)}
                            text={t(`pillars.${pillar.key}.text`)}
                        />
                    ))}
                </SimpleGrid>
                <Link
                    href={ROBLOX_TS_STARTER_LINK}
                    target="_blank"
                    rel="noreferrer"
                    mt={6}
                    display="inline-flex"
                    alignItems="center"
                    gap={2}
                    fontWeight="semibold"
                    color="blue.300"
                    _hover={{ color: 'blue.200', textDecoration: 'none' }}
                >
                    <FaGithub />
                    {t('starterLink')}
                    <LuArrowUpRight />
                </Link>
            </Box>
        </Box>
    );
};
