'use client';

import { Box, VStack, Input } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import { updatePassword } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Field } from '../field';
interface UpdatePasswordProps {
  redirectMethod: string;
}

export default function UpdatePassword({
  redirectMethod
}: UpdatePasswordProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, updatePassword, router);
    setIsSubmitting(false);
  };

  return (
    <Box my={8}>
      <form noValidate onSubmit={(e) => handleSubmit(e)}>
        <VStack gap={2} mb={4}>
          <Field label="New Password">
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
          <Field label="Confirm New Password">
            <Input
              id="passwordConfirm"
              placeholder="Password"
              type="password"
              name="passwordConfirm"
              autoComplete="current-password"
              bg="gray.800"
              p={3}
              borderRadius="md"
            />
          </Field>
          <Button variant="solid" type="submit" isLoading={isSubmitting} mt={1}>
            Update Password
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
