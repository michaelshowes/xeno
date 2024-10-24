import { DrizzleAdapter } from '@auth/drizzle-adapter';
import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

import db from '@/db';
import { getUserByEmail } from '@/db/queries/users';
import { LoginSchema } from '@/validation/schemas';

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GitHub,
    Google,
    Credentials({
      async authorize(credentials) {
        let user = null;

        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordsMarch = await bcrypt.compare(password, user.password);

          if (!passwordsMarch) {
            throw new Error('Invalid password');
          }
        }

        return user;
      }
    })
  ],
  adapter: DrizzleAdapter(db),
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;

      return session;
    }
  },
  pages: {
    signIn: '/auth/sign-in',
    signOut: '/auth/sign-out'
  }
});
