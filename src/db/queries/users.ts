import { eq } from 'drizzle-orm';

import db from '..';
import { users } from '../schema';

type User = typeof users.$inferSelect;

export const getUsers = async () => {
  try {
    const result = await db.select().from(users);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getUserById = async (id: string) => {
  try {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const result = await db.select().from(users).where(eq(users.email, email));
    return result;
  } catch (error) {
    console.error(error);
  }
};
