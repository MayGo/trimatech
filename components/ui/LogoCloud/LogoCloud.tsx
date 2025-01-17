import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';

export default function LogoCloud() {
  return (
    <Box>
      <Text
        mt="24"
        fontSize="xs"
        textTransform="uppercase"
        color="gray.400"
        textAlign="center"
        fontWeight="bold"
        letterSpacing="0.3em"
      >
        Brought to you by
      </Text>
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        align="center"
        justify="center"
        my="12"
        gap={{ base: '4', sm: '6' }}
        wrap="wrap"
        maxW="2xl"
        mx="auto"
      >
        <Flex align="center" justify="start" h="12">
          <Link href="https://nextjs.org" aria-label="Next.js Link">
            <Image src="/nextjs.svg" alt="Next.js Logo" h={{ base: '6', sm: '12' }} />
          </Link>
        </Flex>
        <Flex align="center" justify="start" h="12">
          <Link href="https://vercel.com" aria-label="Vercel.com Link">
            <Image src="/vercel.svg" alt="Vercel.com Logo" h="6" />
          </Link>
        </Flex>
        <Flex align="center" justify="start" h="12">
          <Link href="https://stripe.com" aria-label="stripe.com Link">
            <Image src="/stripe.svg" alt="stripe.com Logo" h="12" />
          </Link>
        </Flex>
        <Flex align="center" justify="start" h="12">
          <Link href="https://supabase.io" aria-label="supabase.io Link">
            <Image src="/supabase.svg" alt="supabase.io Logo" h="10" />
          </Link>
        </Flex>
        <Flex align="center" justify="start" h="12">
          <Link href="https://github.com" aria-label="github.com Link">
            <Image src="/github.svg" alt="github.com Logo" h="8" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
