import { Box, Flex, Grid, Link as ChakraLink, Text, Image } from '@chakra-ui/react';
import Logo from '@/components/icons/Logo';
import GitHub from '@/components/icons/GitHub';

export default function Footer() {
  return (
    <Box as="footer" mx="auto" maxW="1920px" px="6" bg="zinc.900">
      <Grid
        templateColumns={{ base: '1fr', lg: 'repeat(12, 1fr)' }}
        gap="8"
        py="12"
        color="white"
        borderBottom="1px"
        borderColor="zinc.600"
        bg="zinc.900"
      >
        <Box gridColumn={{ lg: 'span 2' }}>
          <ChakraLink href="/" display="flex" alignItems="center" fontWeight="bold" mr={{ md: '24' }}>
            <Box mr="2" border="1px" borderRadius="full" borderColor="zinc.700">
              <Logo />
            </Box>
            <Text>ACME</Text>
          </ChakraLink>
        </Box>
        <Box gridColumn={{ lg: 'span 2' }}>
          <Flex as="ul" direction="column">
            {['Home', 'About', 'Careers', 'Blog'].map((item) => (
              <Box as="li" py="3" key={item}>
                <ChakraLink href="/" color="white" transition="color 0.15s ease-in-out" _hover={{ color: 'zinc.200' }}>
                  {item}
                </ChakraLink>
              </Box>
            ))}
          </Flex>
        </Box>
        <Box gridColumn={{ lg: 'span 2' }}>
          <Flex as="ul" direction="column">
            <Box as="li" py="3">
              <Text fontWeight="bold" color="white" transition="color 0.15s ease-in-out" _hover={{ color: 'zinc.200' }}>
                LEGAL
              </Text>
            </Box>
            {['Privacy Policy', 'Terms of Use'].map((item) => (
              <Box as="li" py="3" key={item}>
                <ChakraLink href="/" color="white" transition="color 0.15s ease-in-out" _hover={{ color: 'zinc.200' }}>
                  {item}
                </ChakraLink>
              </Box>
            ))}
          </Flex>
        </Box>
        <Flex gridColumn={{ lg: 'span 6' }} justifyContent={{ lg: 'flex-end' }} alignItems="start">
          <Flex alignItems="center" h="10" gap="6">
            <ChakraLink aria-label="Github Repository" href="https://github.com/vercel/nextjs-subscription-payments">
              <GitHub />
            </ChakraLink>
          </Flex>
        </Flex>
      </Grid>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        py="12"
        spaceY="4"
        bg="zinc.900"
      >
        <Text>&copy; {new Date().getFullYear()} ACME, Inc. All rights reserved.</Text>
        <Flex alignItems="center">
          <Text color="white">Crafted by</Text>
          <ChakraLink href="https://vercel.com" aria-label="Vercel.com Link">
            <Image src="/vercel.svg" alt="Vercel.com Logo" display="inline-block" h="6" ml="4" />
          </ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
}
