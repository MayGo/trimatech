'use client';

import {
  FieldErrors,
  useForm,
  UseFormRegister,
  FieldPath
} from 'react-hook-form';

import { useFormState, useFormStatus } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { ErrorMessage } from '@hookform/error-message';
import { useEffect, useState } from 'react';
import { contactFormSchema } from '@/validation/contact.validation';
import { ContactState, sendContactForm } from '@/utils/contact/server';

export interface FormValues {
  firstName: string;
  lastName: string;
}

const inputClasses = 'input input-bordered w-full ';

function FormContent({
  register,
  isValid,
  errors
}: {
  register: UseFormRegister<FormValues>;
  isValid: boolean;
  errors: FieldErrors<FormValues>;
}) {
  const { pending } = useFormStatus();

  return (
    <div className="grid grid-cols-1  col-auto gap-3  w-full">
      <div className="w-full">
        <input
          {...register('firstName')}
          placeholder="First name"
          className={inputClasses}
          autoFocus={true}
        />
        <span className="text-red-500 font-semibold text-sm">
          <ErrorMessage name="firstName" errors={errors} />
        </span>
      </div>
      <div className="w-full">
        <input
          {...register('lastName')}
          placeholder="Last name"
          className={inputClasses}
        />
        <span className="text-red-500 font-semibold text-sm">
          <ErrorMessage name="lastName" errors={errors} />
        </span>
      </div>
      <button
        type="submit"
        disabled={pending || !isValid}
        className="btn btn-primary font-semibold text-base font-semibold w-[150px]"
      >
        Send
      </button>
      {pending && <span>Loading...</span>}
    </div>
  );
}

export function ContactForm() {
  // For demo only
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
  const [state, formAction] = useFormState<ContactState, FormData>(
    sendContactForm,
    null
  );

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
      <div className="pb-1.5 mb-1.5 border-b flex items-center">
        <input
          type="checkbox"
          checked={clientSideValidation}
          onChange={() => {
            reset();
            setClientSideValidation(!clientSideValidation);
          }}
          id="client-side-validation-checkbox"
          className="mr-3"
        />
        <label htmlFor="client-side-validation-checkbox">
          Enable client-side validation
        </label>
      </div>
      <form action={formAction} className="w-full">
        <FormContent register={register} isValid={isValid} errors={errors} />
      </form>
    </>
  );
}
