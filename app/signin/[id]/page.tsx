import { Box, Flex, Heading } from '@chakra-ui/react';
import Logo from '@/components/icons/Logo';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getAuthTypes, getViewTypes, getDefaultSignInView, getRedirectMethod } from '@/utils/auth-helpers/settings';
import Card from '@/components/ui/Card';
import PasswordSignIn from '@/components/ui/AuthForms/PasswordSignIn';
import EmailSignIn from '@/components/ui/AuthForms/EmailSignIn';
import Separator from '@/components/ui/AuthForms/Separator';
import OauthSignIn from '@/components/ui/AuthForms/OauthSignIn';
import ForgotPassword from '@/components/ui/AuthForms/ForgotPassword';
import UpdatePassword from '@/components/ui/AuthForms/UpdatePassword';
import SignUp from '@/components/ui/AuthForms/Signup';

export default async function SignIn(props: {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ disable_button: boolean }>;
}) {
    const searchParams = await props.searchParams;
    const params = await props.params;
    const { allowOauth, allowEmail, allowPassword } = getAuthTypes();
    const viewTypes = getViewTypes();
    const redirectMethod = getRedirectMethod();

    let viewProp: string;

    if (typeof params.id === 'string' && viewTypes.includes(params.id)) {
        viewProp = params.id;
    } else {
        const preferredSignInView = (await cookies()).get('preferredSignInView')?.value || null;
        viewProp = getDefaultSignInView(preferredSignInView);
        return redirect(`/signin/${viewProp}`);
    }

    const supabase = await createClient();

    const {
        data: { user }
    } = await supabase.auth.getUser();

    if (user && viewProp !== 'update_password') {
        return redirect('/');
    } else if (!user && viewProp === 'update_password') {
        return redirect('/signin');
    }

    return (
        <Flex justify="center" align="center" minH="100vh">
            <Flex direction="column" justify="space-between" maxW="lg" p={6} m="auto" w="full">
                <Flex justify="center" pb={12}>
                    <Logo width="64px" height="64px" />
                </Flex>
                <Card
                    title={
                        viewProp === 'forgot_password'
                            ? 'Reset Password'
                            : viewProp === 'update_password'
                              ? 'Update Password'
                              : viewProp === 'signup'
                                ? 'Sign Up'
                                : 'Sign In'
                    }
                >
                    {viewProp === 'password_signin' && (
                        <PasswordSignIn allowEmail={allowEmail} redirectMethod={redirectMethod} />
                    )}
                    {viewProp === 'email_signin' && (
                        <EmailSignIn
                            allowPassword={allowPassword}
                            redirectMethod={redirectMethod}
                            disableButton={searchParams.disable_button}
                        />
                    )}
                    {viewProp === 'forgot_password' && (
                        <ForgotPassword
                            allowEmail={allowEmail}
                            redirectMethod={redirectMethod}
                            disableButton={searchParams.disable_button}
                        />
                    )}
                    {viewProp === 'update_password' && <UpdatePassword redirectMethod={redirectMethod} />}
                    {viewProp === 'signup' && <SignUp allowEmail={allowEmail} redirectMethod={redirectMethod} />}
                    {viewProp !== 'update_password' && viewProp !== 'signup' && allowOauth && (
                        <>
                            <Separator text="Third-party sign-in" />
                            <OauthSignIn />
                        </>
                    )}
                </Card>
            </Flex>
        </Flex>
    );
}
