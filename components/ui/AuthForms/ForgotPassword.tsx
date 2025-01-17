'use client';

import { Box, VStack, Input, Text, Link } from '@chakra-ui/react';
import { requestPasswordUpdate } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../button';
import { Field } from '../field';
// Define prop type with allowEmail boolean
interface ForgotPasswordProps {
  allowEmail: boolean;
  redirectMethod: string;
  disableButton?: boolean;
}

export default function ForgotPassword({
  allowEmail,
  redirectMethod,
  disableButton
}: ForgotPasswordProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, requestPasswordUpdate, router);
    setIsSubmitting(false);
  };

  return (
    <Box my={8}>
      <form noValidate onSubmit={(e) => handleSubmit(e)}>
        <VStack gap={2} mb={4}>
          <Field>
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
          <Button
            variant="solid"
            type="submit"
            isLoading={isSubmitting}
            disabled={disableButton}
            mt={1}
          >
            Send Email
          </Button>
        </VStack>
      </form>
      <Text>
        <Link href="/signin/password_signin" fontWeight="light" fontSize="sm">
          Sign in with email and password
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
