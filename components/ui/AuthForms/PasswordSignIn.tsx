'use client';

import { Box, VStack, Input, Text, Link } from '@chakra-ui/react';
import { signInWithPassword } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Field } from '../field';
import { Button } from '../button';

// Define prop type with allowEmail boolean
interface PasswordSignInProps {
  allowEmail: boolean;
  redirectMethod: string;
}

export default function PasswordSignIn({
  allowEmail,
  redirectMethod
}: PasswordSignInProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, signInWithPassword, router);
    setIsSubmitting(false);
  };

  return (
    <Box my={8}>
      <form noValidate onSubmit={(e) => handleSubmit(e)}>
        <VStack gap={4} mb={4}>
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
          <Button variant="solid" type="submit" isLoading={isSubmitting} mt={1}>
            Sign in
          </Button>
        </VStack>
      </form>
      <Text>
        <Link href="/signin/forgot_password" fontWeight="light" fontSize="sm">
          Forgot your password?
        </Link>
      </Text>
      {allowEmail && (
        <Text>
          <Link href="/signin/email_signin" fontWeight="light" fontSize="sm">
            Sign in via magic link
          </Link>
        </Text>
      )}
      <Text>
        <Link href="/signin/signup" fontWeight="light" fontSize="sm">
          Don't have an account? Sign up
        </Link>
      </Text>
    </Box>
  );
}
