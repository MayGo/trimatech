'use client';

import { Box, Flex, Heading, Link, Text, VStack } from '@chakra-ui/react';
import type { Tables } from '@/types_db';
import { getStripe } from '@/utils/stripe/client';
import { checkoutWithStripe } from '@/utils/stripe/server';
import { getErrorRedirect } from '@/utils/helpers';
import { User } from '@supabase/supabase-js';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../button';
type Subscription = Tables<'subscriptions'>;
type Product = Tables<'products'>;
type Price = Tables<'prices'>;
interface ProductWithPrices extends Product {
    prices: Price[];
}
interface PriceWithProduct extends Price {
    products: Product | null;
}
interface SubscriptionWithProduct extends Subscription {
    prices: PriceWithProduct | null;
}

interface Props {
    user: User | null | undefined;
    products: ProductWithPrices[];
    subscription: SubscriptionWithProduct | null;
}

type BillingInterval = 'lifetime' | 'year' | 'month';

export default function Pricing({ user, products, subscription }: Props) {
    const intervals = Array.from(
        new Set(products.flatMap((product) => product?.prices?.map((price) => price?.interval)))
    );
    const router = useRouter();
    const [billingInterval, setBillingInterval] = useState<BillingInterval>('month');
    const [priceIdLoading, setPriceIdLoading] = useState<string>();
    const currentPath = usePathname();

    const handleStripeCheckout = async (price: Price) => {
        setPriceIdLoading(price.id);

        if (!user) {
            setPriceIdLoading(undefined);
            return router.push('/signin/signup');
        }

        const { errorRedirect, sessionId } = await checkoutWithStripe(price, currentPath);

        if (errorRedirect) {
            setPriceIdLoading(undefined);
            return router.push(errorRedirect);
        }

        if (!sessionId) {
            setPriceIdLoading(undefined);
            return router.push(
                getErrorRedirect(
                    currentPath,
                    'An unknown error occurred.',
                    'Please try again later or contact a system administrator.'
                )
            );
        }

        const stripe = await getStripe();
        stripe?.redirectToCheckout({ sessionId });

        setPriceIdLoading(undefined);
    };

    if (!products.length) {
        return (
            <Box bg="black" py={8}>
                <Box maxW="6xl" mx="auto" px={4} py={8}>
                    <VStack gap={4} align="center">
                        <Text fontSize="4xl" fontWeight="extrabold" color="white" textAlign="center">
                            No subscription pricing plans found. Create them in your{' '}
                            <Link
                                color="pink.500"
                                href="https://dashboard.stripe.com/products"
                                textDecoration="underline"
                            >
                                Stripe Dashboard
                            </Link>
                            .
                        </Text>
                    </VStack>
                </Box>
            </Box>
        );
    } else {
        return (
            <Box bg="black" py={8}>
                <Box maxW="6xl" mx="auto" px={4} py={8}>
                    <VStack gap={4} align="center">
                        <Heading as="h1" size="2xl" fontWeight="extrabold" color="white" textAlign="center">
                            Pricing Plans
                        </Heading>
                        <Text maxW="2xl" mt={5} fontSize="xl" color="gray.200" textAlign="center">
                            Select a plan that suits your development needs
                        </Text>
                        {/* <Flex mt={6} bg="gray.900" rounded="lg" p={0.5} border="1px" borderColor="gray.800">
                            {intervals.includes('month') && (
                                <Button
                                    onClick={() => setBillingInterval('month')}
                                    variant={billingInterval === 'month' ? 'solid' : 'outline'}
                                    colorScheme={billingInterval === 'month' ? 'pink' : 'gray'}
                                    flex="1"
                                    m={1}
                                >
                                    Monthly billing
                                </Button>
                            )}
                            {intervals.includes('year') && (
                                <Button
                                    onClick={() => setBillingInterval('year')}
                                    variant={billingInterval === 'year' ? 'solid' : 'outline'}
                                    colorScheme={billingInterval === 'year' ? 'pink' : 'gray'}
                                    flex="1"
                                    m={1}
                                >
                                    Yearly billing
                                </Button>
                            )}
                        </Flex> */}
                    </VStack>
                    <Flex mt={12} wrap="wrap" justify="center" gap={6}>
                        {products.map((product) => {
                            const price = product?.prices?.find((price) => price.interval === billingInterval);
                            if (!price) return null;
                            const priceString = new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: price.currency!,
                                minimumFractionDigits: 0
                            }).format((price?.unit_amount || 0) / 100);
                            return (
                                <Box
                                    key={product.id}
                                    flex="1"
                                    maxW="xs"
                                    bg="gray.900"
                                    rounded="lg"
                                    shadow="sm"
                                    borderWidth="1px"
                                    borderColor={
                                        subscription
                                            ? product.name === subscription?.prices?.products?.name
                                                ? 'pink.500'
                                                : 'transparent'
                                            : product.name === 'Freelancer'
                                              ? 'pink.500'
                                              : 'transparent'
                                    }
                                >
                                    <Box p={6}>
                                        <Heading as="h2" size="lg" fontWeight="semibold" color="white">
                                            {product.name}
                                        </Heading>
                                        <Text mt={4} color="gray.300">
                                            {product.description}
                                        </Text>
                                        <Text mt={8}>
                                            <Text as="span" fontSize="5xl" fontWeight="extrabold" color="white">
                                                {priceString}
                                            </Text>
                                            <Text as="span" fontWeight="medium" color="gray.100">
                                                /{billingInterval}
                                            </Text>
                                        </Text>
                                        <Button
                                            variant="solid"
                                            colorScheme="pink"
                                            isLoading={priceIdLoading === price.id}
                                            onClick={() => handleStripeCheckout(price)}
                                            w="full"
                                            mt={8}
                                        >
                                            {subscription ? 'Manage' : 'Subscribe'}
                                        </Button>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Flex>
                </Box>
            </Box>
        );
    }
}
