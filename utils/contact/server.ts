'use server';


import { ZodError } from "zod";
import { contactFormSchema } from '@/validation/contact.validation';

export type ContactState =
  | {
      status: "success";
      message: string;
    }
  | {
      status: "error";
      message: string;
      errors?: Array<{
        path: string;
        message: string;
      }>;
    }
  | null;

export async function sendContactForm(
  prevState: ContactState | null,
  data: FormData,
): Promise<ContactState> {
  try {
    // Artificial delay; don't forget to remove that!
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Validate our data
    const { firstName, lastName } = contactFormSchema.parse(data);
    
    return {
      status: "success",
      message: `Welcome, ${firstName} ${lastName ? lastName : ""}!`,
    };
  } catch (e) {
    // In case of a ZodError (caused by our validation) we're adding issues to our response
    if (e instanceof ZodError) {
      return {
        status: "error",
        message: "Invalid form data",
        errors: e.issues.map((issue) => ({
          path: issue.path.join("."),
          message: `Server validation: ${issue.message}`,
        })),
      };
    }
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
}