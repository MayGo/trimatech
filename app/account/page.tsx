import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import CustomerPortalForm from '@/components/ui/AccountForms/CustomerPortalForm';
import EmailForm from '@/components/ui/AccountForms/EmailForm';
import NameForm from '@/components/ui/AccountForms/NameForm';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Account() {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  const { data: userDetails } = await supabase.from('users').select('*').single();

  const { data: subscription, error } = await supabase
    .from('subscriptions')
    .select('*, prices(*, products(*))')
    .in('status', ['trialing', 'active'])
    .maybeSingle();

  if (error) {
    console.log(error);
  }

  if (!user) {
    return redirect('/signin');
  }

  return (
    <Box as="section" mb={32} bg="black">
      <Box maxW="6xl" px={4} py={8} mx="auto" sm={{ px: 6, pt: 24 }} lg={{ px: 8 }}>
        <Flex direction="column" align="center">
          <Heading as="h1" size="2xl" fontWeight="extrabold" color="white" textAlign="center">
            Account
          </Heading>
          <Text maxW="2xl" mt={5} fontSize="xl" color="zinc.200" textAlign="center">
            We partnered with Stripe for a simplified billing.
          </Text>
        </Flex>
      </Box>
      <Box p={4}>
        <CustomerPortalForm subscription={subscription} />
        <NameForm userName={userDetails?.full_name ?? ''} />
        <EmailForm userEmail={user.email} />
      </Box>
    </Box>
  );
}
