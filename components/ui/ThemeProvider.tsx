'use client';

import { ChakraProvider, createSystem, defaultSystem, defineConfig } from '@chakra-ui/react';
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';
import { useEffect, useState } from 'react';

const primaryColor = '#2563EB';
const bgColor = '#EEF2FF';
const textColor = '#1E293B';

const config = defineConfig({
    ...defaultSystem._config,
    theme: {
        ...defaultSystem._config.theme,
        tokens: {
            ...defaultSystem._config.theme?.tokens,
            colors: {
                ...defaultSystem._config.theme?.tokens?.colors,
                text: {
                    value: textColor
                },

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
                    value: bgColor
                }
            },
            fonts: {
                body: { value: 'var(--font-roboto), sans-serif' },
                heading: { value: 'var(--font-mplus), sans-serif' }
            }
        }
    }
});

const system = createSystem(config);

export function ThemeProvider(props: ColorModeProviderProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <ChakraProvider value={system}>
            <ColorModeProvider {...props} />
        </ChakraProvider>
    );
}
