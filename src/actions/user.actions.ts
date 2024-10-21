'use server';

import { eq } from 'drizzle-orm';

import db from '@/db';
import { users } from '@/db/schema';

export async function getUserFromDb(email: string, password: string) {
  try {
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email)
    });

    // Check if user exists
    if (!existingUser) {
      return {
        success: false,
        message: 'User not found'
      };
    }

    // Check if password is correct
    if (existingUser.password !== password) {
      return {
        success: false,
        message: 'Password incorrect'
      };
    }

    return {
      success: true,
      user: existingUser
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
}
