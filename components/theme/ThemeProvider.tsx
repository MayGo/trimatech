'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';
import { sytemTheme } from './theme';

export function ThemeProvider(props: ColorModeProviderProps) {
    return (
        <ChakraProvider value={sytemTheme}>
            <ColorModeProvider {...props} />
        </ChakraProvider>
    );
}
