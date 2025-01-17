'use client';

import { ChakraProvider, createSystem, defaultSystem, defineConfig } from '@chakra-ui/react';
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';
import { useEffect, useState } from 'react';

const primaryColor = '#6410f5';

const config = defineConfig({
    ...defaultSystem._config,
    theme: {
        ...defaultSystem._config.theme,
        tokens: {
            ...defaultSystem._config.theme?.tokens,
            colors: {
                ...defaultSystem._config.theme?.tokens?.colors,
                purple: {
                    '50': { value: '#f4f1ff' },
                    '100': { value: '#eae6ff' },
                    '200': { value: '#d8d0ff' },
                    '300': { value: '#bbaaff' },
                    '400': { value: '#9b7aff' },
                    '500': { value: '#7e44ff' },
                    '600': { value: '#701eff' },
                    '700': { value: primaryColor },
                    '800': { value: '#520acd' },
                    '900': { value: '#440aa8' },
                    '950': { value: '#270372' }
                },
                primary: {
                    value: primaryColor
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
