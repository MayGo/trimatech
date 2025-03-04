'use client';

import { createSystem, defaultSystem, defineConfig } from '@chakra-ui/react';

const primaryColor = '#2563EB';
const bgColor = '#EEF2FF';
export const bgColorTransparent = 'rgba(238, 242, 255, 0.8)';
export const bgColorWhiteTransparent = 'rgba(255, 255, 255, 0.8)';
const textColor = '#1E293B';
const borderColor = '#84B2FE';
const shadowColor = '#D1DCFF';

const config = defineConfig({
    ...defaultSystem._config,
    globalCss: {
        html: {
            scrollBehavior: 'smooth !important'
        }
    },
    theme: {
        ...defaultSystem._config.theme,
        keyframes: {
            gradientBg: {
                '0%': { backgroundPosition: '0% 0%' },
                '25%': { backgroundPosition: '100% 0%' },
                '50%': { backgroundPosition: '100% 100%' },
                '75%': { backgroundPosition: '0% 100%' },
                '100%': { backgroundPosition: '0% 0%' }
            },

            borderGradient: {
                '0%': { backgroundPosition: '200% center' },
                '100%': { backgroundPosition: '-200% center' }
            },

            borderFollow: {
                '0%': {
                    top: '8px',
                    left: '8px',
                    transform: 'translate(0, 0)',
                    offset: 0
                },
                '15%': {
                    top: '8px',
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                    offset: 0.15
                },
                '30%': {
                    top: '8px',
                    right: '8px',
                    transform: 'translate(0, 0)',
                    offset: 0.3
                },
                '40%': {
                    top: '50%',
                    right: '8px',
                    transform: 'translate(0, -50%)',
                    offset: 0.4
                },
                '50%': {
                    bottom: '8px',
                    right: '8px',
                    transform: 'translate(0, 0)',
                    offset: 0.5
                },
                '65%': {
                    bottom: '8px',
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                    offset: 0.65
                },
                '80%': {
                    bottom: '8px',
                    left: '8px',
                    transform: 'translate(0, 0)',
                    offset: 0.8
                },
                '90%': {
                    top: '50%',
                    left: '8px',
                    transform: 'translate(0, -50%)',
                    offset: 0.9
                },
                '100%': {
                    top: '8px',
                    left: '8px',
                    transform: 'translate(0, 0)',
                    offset: 1
                }
            },

            colorChange: {
                '0%': { color: '#3b76f6' },
                '33%': { color: '#2563eb' },
                '66%': { color: '#1d58d8' },
                '100%': { color: '#3b76f6' }
            },

            borderColorChange: {
                '0%': { borderColor: '#3b76f6' },
                '33%': { borderColor: '#2563eb' },
                '66%': { borderColor: '#1d58d8' },
                '100%': { borderColor: '#3b76f6' }
            }
        },
        tokens: {
            ...defaultSystem._config.theme?.tokens,
            animations: {
                gradientBg: { value: 'gradientBg 20s ease-in-out infinite' },
                borderGradient: { value: 'borderGradient 3s linear infinite' },
                colorChange: { value: 'colorChange 15s linear infinite' }
            },
            colors: {
                ...defaultSystem._config.theme?.tokens?.colors,

                blue: {
                    '50': { value: '#eff4ff' },
                    '100': { value: '#dbe6fe' },
                    '200': { value: '#bfd3fe' },
                    '300': { value: '#93b4fd' },
                    '400': { value: '#6090fa' },
                    '500': { value: '#3b76f6' },
                    '600': { value: '#2563eb' },
                    '700': { value: '#1d58d8' },
                    '800': { value: '#1e4baf' },
                    '900': { value: '#1e408a' },
                    '950': { value: '#172a54' }
                },
                primary: {
                    value: primaryColor
                },
                black: {
                    value: '#000000'
                },
                bgColor: {
                    value: bgColorTransparent
                },
                borderColor: {
                    value: borderColor
                },
                shadowColor: {
                    value: shadowColor
                },
                bgColorWhiteTransparent: {
                    value: bgColorWhiteTransparent
                }
            },
            fonts: {
                body: { value: 'var(--font-roboto), sans-serif' },
                heading: { value: 'var(--font-mplus), sans-serif' }
            }
        },
        semanticTokens: {
            colors: {
                ...defaultSystem._config.theme?.semanticTokens?.colors,
                fg: {
                    DEFAULT: {
                        value: { _light: textColor }
                    }
                }
            }
        }
    }
});

export const sytemTheme = createSystem(config);
