'use client';

import { Button } from '@/components/ui/button';
import Card from '@/components/ui/Card';
import { updateEmail } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Box, Flex, Input, Text } from '@chakra-ui/react';

export default function EmailForm({
  userEmail
}: {
  userEmail: string | undefined;
}) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    // Check if the new email is the same as the old email
    if (e.currentTarget.newEmail.value === userEmail) {
      e.preventDefault();
      setIsSubmitting(false);
      return;
    }
    handleRequest(e, updateEmail, router);
    setIsSubmitting(false);
  };

  return (
    <Card
      title="Your Email"
      description="Please enter the email address you want to use to login."
      footer={
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          align={{ base: 'start', sm: 'center' }}
          justify="space-between"
        >
          <Text pb={{ base: 4, sm: 0 }}>
            We will email you to verify the change.
          </Text>
          <Button
            variant="solid"
            type="submit"
            form="emailForm"
            isLoading={isSubmitting}
          >
            Update Email
          </Button>
        </Flex>
      }
    >
      <Box mt={8} mb={4} fontSize="xl" fontWeight="semibold">
        <form id="emailForm" onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="text"
            name="newEmail"
            width="50%"
            p={3}
            borderRadius="md"
            bg="gray.800"
            defaultValue={userEmail ?? ''}
            placeholder="Your email"
            maxLength={64}
          />
        </form>
      </Box>
    </Card>
  );
}
