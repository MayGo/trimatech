'use client';

import { FieldErrors, useForm, UseFormRegister, FieldPath } from 'react-hook-form';
import { useActionState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import { useEffect, useState } from 'react';
import { contactFormSchema } from '@/validation/contact.validation';
import { ContactState, sendContactForm } from '@/utils/contact/server';
import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { Field } from './ui/field';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';

export interface FormValues {
    firstName: string;
    lastName: string;
}

function FormContent({
    register,
    isValid,
    errors,
    isPending
}: {
    register: UseFormRegister<FormValues>;
    isValid: boolean;
    errors: FieldErrors<FormValues>;
    isPending: boolean;
}) {
    return (
        <Flex flexDirection="column" alignItems="start" justifyContent="start" gap={8} w="full">
            <Field label="First Name" invalid={!!errors.firstName} errorText={errors.firstName?.message || ''}>
                <Input {...register('firstName')} placeholder="First name" variant="subtle" rounded="full" />
            </Field>
            <Field label="Last Name" invalid={!!errors.lastName} errorText={errors.lastName?.message || ''}>
                <Input {...register('lastName')} placeholder="Last name" variant="subtle" rounded="full" />
            </Field>
            <Button
                type="submit"
                disabled={isPending || !isValid}
                fontWeight="semibold"
                w="150px"
                bg="primary"
                color="white"
            >
                Send
            </Button>
            {isPending && <Text>Loading...</Text>}
        </Flex>
    );
}

export function ContactForm() {
    const [clientSideValidation, setClientSideValidation] = useState(true);
    const {
        register,
        formState: { isValid, errors },
        setError,
        reset
    } = useForm<FormValues>({
        mode: 'all',
        resolver: clientSideValidation ? zodResolver(contactFormSchema) : undefined
    });
    const [state, formAction, isPending] = useActionState<ContactState, FormData>(sendContactForm, null);

    useEffect(() => {
        if (!state) {
            return;
        }
        if (state.status === 'error') {
            console.log(state.errors);
            state.errors?.forEach((error) => {
                setError(error.path as FieldPath<FormValues>, {
                    message: error.message
                });
            });
        }
        if (state.status === 'success') {
            alert(state.message);
            reset();
        }
    }, [state, setError, reset]);

    return (
        <form action={formAction} style={{ width: '100%' }}>
            <FormContent register={register} isValid={isValid} errors={errors} isPending={isPending} />
        </form>
    );
}
