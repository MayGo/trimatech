'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { createStripePortal } from '@/utils/stripe/server';
import Link from 'next/link';
import { Box, Text, VStack, HStack, Heading } from '@chakra-ui/react';
import { Tables } from '@/types_db';
import { Button } from '../button';

type Subscription = Tables<'subscriptions'>;
type Price = Tables<'prices'>;
type Product = Tables<'products'>;

type SubscriptionWithPriceAndProduct = Subscription & {
    prices:
        | (Price & {
              products: Product | null;
          })
        | null;
};

interface Props {
    subscription: SubscriptionWithPriceAndProduct | null;
}

export default function CustomerPortalForm({ subscription }: Props) {
    const router = useRouter();
    const currentPath = usePathname();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const subscriptionPrice =
        subscription &&
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: subscription?.prices?.currency!,
            minimumFractionDigits: 0
        }).format((subscription?.prices?.unit_amount || 0) / 100);

    const handleStripePortalRequest = async () => {
        setIsSubmitting(true);
        const redirectUrl = await createStripePortal(currentPath);
        setIsSubmitting(false);
        return router.push(redirectUrl);
    };

    return (
        <Box borderWidth="1px" borderRadius="lg" p={5} boxShadow="md">
            <VStack align="start" gap={4}>
                <Heading size="md">Your Plan</Heading>
                <Text>
                    {subscription
                        ? `You are currently on the ${subscription?.prices?.products?.name} plan.`
                        : 'You are not currently subscribed to any plan.'}
                </Text>
                <HStack w="full" justify="space-between" align="center" flexDirection={{ base: 'column', sm: 'row' }}>
                    <Text>Manage your subscription on Stripe.</Text>
                    <Button colorScheme="teal" onClick={handleStripePortalRequest} isLoading={isSubmitting}>
                        Open customer portal
                    </Button>
                </HStack>
                <Text fontSize="xl" fontWeight="semibold" mt={8} mb={4}>
                    {subscription ? (
                        `${subscriptionPrice}/${subscription?.prices?.interval}`
                    ) : (
                        <Link href="/">Choose your plan</Link>
                    )}
                </Text>
            </VStack>
        </Box>
    );
}
