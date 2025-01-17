'use client';

import { Box, VStack, HStack, Icon } from '@chakra-ui/react';
import { signInWithOAuth } from '@/utils/auth-helpers/client';
import { type Provider } from '@supabase/supabase-js';
import { Button } from '../button';
import { useState } from 'react';
import { LuGithub } from 'react-icons/lu';

type OAuthProviders = {
  name: Provider;
  displayName: string;
  icon: JSX.Element;
};

export default function OauthSignIn() {
  const oAuthProviders: OAuthProviders[] = [
    {
      name: 'github',
      displayName: 'GitHub',
      icon: <LuGithub />
    }
    /* Add desired OAuth providers here */
  ];
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable the button while the request is being handled
    await signInWithOAuth(e);
    setIsSubmitting(false);
  };

  return (
    <Box mt={8}>
      <VStack gap={2}>
        {oAuthProviders.map((provider) => (
          <form key={provider.name} onSubmit={(e) => handleSubmit(e)}>
            <input type="hidden" name="provider" value={provider.name} />
            <Button
              variant="solid"
              type="submit"
              width="full"
              isLoading={isSubmitting}
            >
              <HStack>
                <Icon as={provider.icon.type} boxSize={5} />
                <span>{provider.displayName}</span>
              </HStack>
            </Button>
          </form>
        ))}
      </VStack>
    </Box>
  );
}
