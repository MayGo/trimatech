'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';
import { useEffect, useState } from 'react';
import { sytemTheme } from './theme';

export function ThemeProvider(props: ColorModeProviderProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <ChakraProvider value={sytemTheme}>
            <ColorModeProvider {...props} />
        </ChakraProvider>
    );
}
