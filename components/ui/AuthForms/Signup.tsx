'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { signUp } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import { Box, Input, VStack, Text } from '@chakra-ui/react';
import { Field } from '../field';
import { Button } from '../button';

// Define prop type with allowEmail boolean
interface SignUpProps {
  allowEmail: boolean;
  redirectMethod: string;
}

export default function SignUp({ allowEmail, redirectMethod }: SignUpProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, signUp, router);
    setIsSubmitting(false);
  };

  return (
    <Box my={8}>
      <form noValidate onSubmit={(e) => handleSubmit(e)}>
        <VStack gap={4} mb={4}>
          <VStack gap={2} align="start" w="full">
            <Field label="Email">
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                name="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                bg="gray.800"
                p={3}
                borderRadius="md"
              />
            </Field>
            <Field label="Password">
              <Input
                id="password"
                placeholder="Password"
                type="password"
                name="password"
                autoComplete="current-password"
                bg="gray.800"
                p={3}
                borderRadius="md"
              />
            </Field>
          </VStack>
          <Button type="submit" isLoading={isSubmitting}>
            Sign up
          </Button>
        </VStack>
      </form>
      <Text>Already have an account?</Text>
      <Text>
        <Link href="/signin/password_signin">Sign in with email and password</Link>
      </Text>
      {allowEmail && (
        <Text>
          <Link href="/signin/email_signin">Sign in via magic link</Link>
        </Text>
      )}
    </Box>
  );
}
