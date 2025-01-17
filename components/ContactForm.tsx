'use client';

import { FieldErrors, useForm, UseFormRegister, FieldPath } from 'react-hook-form';
import { useActionState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import { useEffect, useState } from 'react';
import { contactFormSchema } from '@/validation/contact.validation';
import { ContactState, sendContactForm } from '@/utils/contact/server';
import { Box, Input, Text } from '@chakra-ui/react';
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
        <Box display="grid" gridTemplateColumns="1fr" gap={3} w="full">
            <Field label="First Name" invalid={!!errors.firstName} errorText={errors.firstName?.message || ''}>
                <Input {...register('firstName')} placeholder="First name" />
            </Field>
            <Field label="Last Name" invalid={!!errors.lastName} errorText={errors.lastName?.message || ''}>
                <Input {...register('lastName')} placeholder="Last name" />
            </Field>
            <Button type="submit" disabled={isPending || !isValid} colorScheme="blue" fontWeight="semibold" w="150px">
                Send
            </Button>
            {isPending && <Text>Loading...</Text>}
        </Box>
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
        <>
            <Box pb={1.5} mb={1.5} borderBottom="1px solid" display="flex" alignItems="center">
                <Field label="Enable client-side validation">
                    <Checkbox
                        checked={clientSideValidation}
                        onChange={() => {
                            reset();
                            setClientSideValidation(!clientSideValidation);
                        }}
                        id="client-side-validation-checkbox"
                        mr={3}
                    />
                </Field>
            </Box>
            <form action={formAction} style={{ width: '100%' }}>
                <FormContent register={register} isValid={isValid} errors={errors} isPending={isPending} />
            </form>
        </>
    );
}
