import { Flex, Link as ChakraLink } from '@chakra-ui/react';
import type { NextPage } from 'next';
import NextLink from 'next/link';
import { Button } from './ui/button';

const MainActions: NextPage = () => {
    return (
        <Flex flexDirection="row" alignItems="center" justifyContent="start" gap="24px" textAlign="left">
            <NextLink href="/learn-more">
                <Button bg="primary" w="150px" color="white">
                    Learn More
                </Button>
            </NextLink>
            <NextLink href="/signup">
                <Button variant="outline" w="150px" color="white" borderColor="white">
                    Sign Up
                </Button>
            </NextLink>
        </Flex>
    );
};

export default MainActions;
