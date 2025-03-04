'use client';

import { Box, Flex } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { mainRound } from '../../components/theme/padding.utils';
// Import React Icons
import { DiRedis } from 'react-icons/di';
import { FaCube, FaGithub, FaJenkins, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { GiFeather } from 'react-icons/gi';
import { HiPuzzle } from 'react-icons/hi';
import { RiShadowFill } from 'react-icons/ri';
import {
    SiAuth0,
    SiAxios,
    SiChakraui,
    SiClerk,
    SiCypress,
    SiDaisyui,
    SiDrizzle,
    SiElectron,
    SiExpress,
    SiFirebase,
    SiFramer,
    SiGoogleanalytics,
    SiGraphql,
    SiIonic,
    SiJest,
    SiMongodb,
    SiMui,
    SiMysql,
    SiNextdotjs,
    SiNx,
    SiOpenai,
    SiPostgresql,
    SiPrisma,
    SiReacthookform,
    SiReactquery,
    SiReactrouter,
    SiRecoil,
    SiRedux,
    SiSentry,
    SiSocketdotio,
    SiSqlite,
    SiStorybook,
    SiStyledcomponents,
    SiSupabase,
    SiTailwindcss,
    SiTestinglibrary,
    SiTrpc,
    SiTypescript,
    SiVercel,
    SiVite,
    SiVitest,
    SiWebpack
} from 'react-icons/si';
import { TbApi, TbBrandReactNative, TbTestPipe } from 'react-icons/tb';

// Organized tech logos grouped by categories
const techLogos = [
    // Frontend Frameworks & Libraries
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'React Native', icon: TbBrandReactNative },
    { name: 'React Router', icon: SiReactrouter },
    { name: 'React Query', icon: SiReactquery },
    { name: 'React Hook Form', icon: SiReacthookform },
    { name: 'Framer Motion', icon: SiFramer },
    { name: 'Electron', icon: SiElectron },
    { name: 'Ionic', icon: SiIonic },

    // Styling & UI
    { name: 'Chakra UI', icon: SiChakraui },
    { name: 'Material UI', icon: SiMui },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Styled Components', icon: SiStyledcomponents },
    { name: 'DaisyUI', icon: SiDaisyui },
    { name: 'Shadcn/ui', icon: RiShadowFill },

    // Languages
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'JavaScript', icon: FaJs },

    // Backend & APIs
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'ExpressJS', icon: SiExpress },
    { name: 'GraphQL', icon: SiGraphql },
    { name: 'REST API', icon: TbApi },
    { name: 'WebSockets', icon: SiSocketdotio },
    { name: 'Axios', icon: SiAxios },
    { name: 'tRPC', icon: SiTrpc },

    // Databases
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MySQL', icon: SiMysql },
    { name: 'SQLite', icon: SiSqlite },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Redis', icon: DiRedis },
    { name: 'Prisma', icon: SiPrisma },
    { name: 'Supabase', icon: SiSupabase },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'Drizzle', icon: SiDrizzle },

    // State Management
    { name: 'Redux', icon: SiRedux },
    { name: 'Zustand', icon: FaCube },
    { name: 'Easy-Peasy', icon: GiFeather },
    { name: 'Recoil', icon: SiRecoil },
    { name: 'TanStack Form', icon: HiPuzzle },

    // Testing
    { name: 'Jest', icon: SiJest },
    { name: 'Cypress', icon: SiCypress },
    { name: 'Testing Library', icon: SiTestinglibrary },
    { name: 'Storybook', icon: SiStorybook },
    { name: 'Vitest', icon: SiVitest },
    { name: 'Playwright', icon: TbTestPipe },

    // Build Tools
    { name: 'Webpack', icon: SiWebpack },
    { name: 'Vite', icon: SiVite },
    { name: 'Nx', icon: SiNx },

    // DevOps & Deployment
    { name: 'GitHub CI', icon: FaGithub },
    { name: 'Jenkins', icon: FaJenkins },
    { name: 'Vercel', icon: SiVercel },

    // Authentication
    { name: 'Auth0', icon: SiAuth0 },
    { name: 'Clerk', icon: SiClerk },
    { name: 'Firebase Auth', icon: SiFirebase },

    // AI/ML
    { name: 'OpenAI API', icon: SiOpenai },

    // Analytics & Monitoring
    { name: 'Google Analytics', icon: SiGoogleanalytics },
    { name: 'Sentry', icon: SiSentry }
];

interface TechScrollingLogosProps {
    speed?: number; // Controls animation duration in seconds
    pauseOnHover?: boolean;
    width?: string;
    height?: string;
    logoSize?: string;
    iconColor?: string; // Added prop to allow custom icon color
}

export const TechScrollingLogos: React.FC<TechScrollingLogosProps> = ({
    speed = 80,
    pauseOnHover = true,
    width = '100%',
    height = '120px',
    logoSize = '60px'
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Create CSS animation
    const scrollX = `
        @keyframes scrollX {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-50%);
            }
        }
    `;

    const scrollAnimation = `scrollX ${speed}s linear infinite`;
    const iconSizeValue = parseInt(logoSize) * 0.8; // Making icon slightly smaller than the container

    // Create a continuous array for the infinite scrolling effect
    const continuousLogos = [...techLogos, ...techLogos];

    return (
        <>
            <style>{scrollX}</style>
            <Box
                width={width}
                height={height}
                position="relative"
                overflow="hidden"
                bg="bgColor"
                borderRadius={mainRound}
                ref={containerRef}
            >
                <Flex
                    position="absolute"
                    height="100%"
                    animation={scrollAnimation}
                    _hover={pauseOnHover ? { animationPlayState: 'paused' } : {}}
                    whiteSpace="nowrap"
                >
                    {continuousLogos.map((logo, index) => {
                        const Icon = logo.icon;
                        return (
                            <Flex
                                key={`${logo.name}-${index}`}
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                                mx={4}
                                minWidth={logoSize}
                            >
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    width={logoSize}
                                    height={logoSize}
                                    mb={2}
                                    color={'gray.800'}
                                >
                                    <Icon size={`${iconSizeValue}px`} />
                                </Box>
                                <Box fontSize="sm" fontWeight="medium" textAlign="center">
                                    {logo.name}
                                </Box>
                            </Flex>
                        );
                    })}
                </Flex>
            </Box>
        </>
    );
};

export default TechScrollingLogos;
