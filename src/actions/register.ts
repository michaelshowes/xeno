'use server';

import bcrypt from 'bcrypt';

import db from '@/db';
import { getUserByEmail } from '@/db/queries/users';
import { users } from '@/db/schema';
import { RegisterSchemaType } from '@/features/auth/components/SignUpForm';
import { RegisterSchema } from '@/validation/schemas';

export async function registerAction(formData: RegisterSchemaType) {
  const validatedFields = RegisterSchema.safeParse(formData);

  // Checks if fields are valid according to the schema
  if (!validatedFields.success) {
    return { error: 'Invalid fields' };
  }

  const { email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10); // Hashes the password
  const existingUser = await getUserByEmail(email); // Checks if the email is already in use

  // Returns an error if the email is already in use
  if (existingUser) {
    return { error: 'Email already in use' };
  }

  // Creates a new user
  try {
    const [result] = await db
      .insert(users)
      .values({
        ...formData,
        password: hashedPassword // remember to use the hashed password
      })
      .returning();

    return {
      ...result,
      success: `${result.email} has been registered successfully`,
      status: 200
    };
  } catch (err) {
    console.error(err);

    return {
      error: 'An error occurred while registering',
      status: 500
    };
  }
}
