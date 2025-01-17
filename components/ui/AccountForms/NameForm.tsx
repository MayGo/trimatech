'use client';

import { Button } from '@/components/ui/button';
import Card from '@/components/ui/Card';
import { updateName } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Box, Flex, Input, Text } from '@chakra-ui/react';

export default function NameForm({ userName }: { userName: string }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    // Check if the new name is the same as the old name
    if (e.currentTarget.fullName.value === userName) {
      e.preventDefault();
      setIsSubmitting(false);
      return;
    }
    handleRequest(e, updateName, router);
    setIsSubmitting(false);
  };

  return (
    <Card
      title="Your Name"
      description="Please enter your full name, or a display name you are comfortable with."
      footer={
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          align={{ base: 'start', sm: 'center' }}
          justify="space-between"
        >
          <Text pb={{ base: 4, sm: 0 }}>64 characters maximum</Text>
          <Button
            variant="solid"
            type="submit"
            form="nameForm"
            isLoading={isSubmitting}
          >
            Update Name
          </Button>
        </Flex>
      }
    >
      <Box mt={8} mb={4} fontSize="xl" fontWeight="semibold">
        <form id="nameForm" onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="text"
            name="fullName"
            width="50%"
            p={3}
            borderRadius="md"
            bg="gray.800"
            defaultValue={userName}
            placeholder="Your name"
            maxLength={64}
          />
        </form>
      </Box>
    </Card>
  );
}
