'use server';

import { AuthError } from 'next-auth';

import { signIn } from '@/auth';
import { LoginSchemaType } from '@/features/auth/components/SignInForm';
import { LoginSchema } from '@/validation/schemas';

export async function loginAction(formData: LoginSchemaType) {
  const validatedFields = LoginSchema.safeParse(formData);

  // Checks if fields are valid according to the schema
  if (!validatedFields.success) {
    return { error: 'Invalid fields' };
  }

  const { email, password } = validatedFields.data;

  // Attempts to log in the user
  try {
    await signIn('credentials', {
      email,
      password
      // redirectTo: DEFAULT_LOGIN_REDIRECT
    });

    return {
      success: 'Logged in successfully',
      status: 200
    };
  } catch (err) {
    if (err instanceof AuthError) {
      console.log(err.type);
      switch (err.type) {
        case 'CredentialsSignin': {
          return {
            error: 'Invalid credentials',
            status: 401
          };
        }
        case 'OAuthAccountNotLinked': {
          return {
            error: 'Account not linked',
            status: 401
          };
        }
        default: {
          return {
            error: 'An error occurred while logging in',
            status: 500
          };
        }
      }
    }

    throw err;
  }
}
