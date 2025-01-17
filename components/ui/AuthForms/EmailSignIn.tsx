'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { signInWithEmail } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Box, Input, VStack, Text } from '@chakra-ui/react';
import { Field } from '../field';

// Define prop type with allowPassword boolean
interface EmailSignInProps {
  allowPassword: boolean;
  redirectMethod: string;
  disableButton?: boolean;
}

export default function EmailSignIn({ allowPassword, redirectMethod, disableButton }: EmailSignInProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, signInWithEmail, router);
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
          <Button variant="solid" type="submit" isLoading={isSubmitting} disabled={disableButton}>
            Sign in
          </Button>
        </VStack>
      </form>
      {allowPassword && (
        <>
          <Text fontSize="sm" fontWeight="light">
            <Link href="/signin/password_signin">Sign in with email and password</Link>
          </Text>
          <Text fontSize="sm" fontWeight="light">
            <Link href="/signin/signup">Don't have an account? Sign up</Link>
          </Text>
        </>
      )}
    </Box>
  );
}
