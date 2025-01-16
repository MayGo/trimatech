'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

const chakraTheme = extendTheme({
  styles: { global: { img: { maxWidth: 'unset' } } }
});
const emotionCache = createCache({
  key: 'emotion-cache',
  prepend: true
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
