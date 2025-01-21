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
        tokens: {
            ...defaultSystem._config.theme?.tokens,
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
