'use client';

import { createSystem, defaultSystem, defineConfig } from '@chakra-ui/react';

/** Palette lifted from the Trimatech ring logo: magenta into violet into blue, on near-black navy. */
const pageBg = '#070A12';
const surface = '#10162A';
const surfaceRaised = '#171F38';
const line = 'rgba(148, 163, 184, 0.16)';
const lineStrong = 'rgba(148, 163, 184, 0.32)';
const fg = '#F1F5F9';
const fgMuted = '#A3AFC4';
const fgSubtle = '#6B7791';
const brand = '#3B82F6';
const magenta = '#E11DD6';
const violet = '#8B5CF6';

export const brandGradient = `linear-gradient(120deg, ${magenta} 0%, ${violet} 45%, ${brand} 100%)`;

const config = defineConfig({
    ...defaultSystem._config,
    globalCss: {
        html: {
            scrollBehavior: 'smooth',
            scrollPaddingTop: '96px'
        },
        body: {
            bg: 'pageBg',
            color: 'fg',
            backgroundImage: `
                radial-gradient(900px 500px at 8% -10%, rgba(139, 92, 246, 0.22), transparent 60%),
                radial-gradient(700px 400px at 95% 10%, rgba(59, 130, 246, 0.18), transparent 60%),
                radial-gradient(800px 500px at 50% 110%, rgba(225, 29, 214, 0.12), transparent 60%)
            `,
            backgroundAttachment: 'fixed'
        },
        '::selection': {
            bg: 'violet',
            color: 'white'
        }
    },
    theme: {
        ...defaultSystem._config.theme,
        keyframes: {
            float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' }
            },
            pulseDot: {
                '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                '50%': { opacity: 0.4, transform: 'scale(0.7)' }
            }
        },
        tokens: {
            ...defaultSystem._config.theme?.tokens,
            animations: {
                float: { value: 'float 6s ease-in-out infinite' },
                pulseDot: { value: 'pulseDot 2s ease-in-out infinite' }
            },
            colors: {
                ...defaultSystem._config.theme?.tokens?.colors,
                pageBg: { value: pageBg },
                surface: { value: surface },
                surfaceRaised: { value: surfaceRaised },
                line: { value: line },
                lineStrong: { value: lineStrong },
                fgMuted: { value: fgMuted },
                fgSubtle: { value: fgSubtle },
                brand: { value: brand },
                magenta: { value: magenta },
                violet: { value: violet },
                blue: {
                    '50': { value: '#eff4ff' },
                    '100': { value: '#dbe6fe' },
                    '200': { value: '#bfd3fe' },
                    '300': { value: '#93b4fd' },
                    '400': { value: '#6090fa' },
                    '500': { value: '#3b82f6' },
                    '600': { value: '#2563eb' },
                    '700': { value: '#1d58d8' },
                    '800': { value: '#1e4baf' },
                    '900': { value: '#1e408a' },
                    '950': { value: '#172a54' }
                }
            },
            fonts: {
                body: { value: 'var(--font-roboto), sans-serif' },
                heading: { value: 'var(--font-mplus), sans-serif' }
            },
            shadows: {
                ...defaultSystem._config.theme?.tokens?.shadows,
                card: { value: '0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 40px -24px rgba(0,0,0,0.8)' },
                glow: { value: '0 0 0 1px rgba(139,92,246,0.5), 0 24px 60px -20px rgba(139,92,246,0.55)' }
            }
        },
        semanticTokens: {
            colors: {
                ...defaultSystem._config.theme?.semanticTokens?.colors,
                fg: {
                    DEFAULT: { value: fg },
                    muted: { value: fgMuted },
                    subtle: { value: fgSubtle }
                },
                bg: {
                    DEFAULT: { value: pageBg },
                    panel: { value: surface },
                    subtle: { value: surfaceRaised },
                    muted: { value: surfaceRaised }
                },
                border: {
                    DEFAULT: { value: line },
                    muted: { value: line },
                    emphasized: { value: lineStrong }
                }
            }
        }
    }
});

export const sytemTheme = createSystem(config);
