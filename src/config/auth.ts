import { DrizzleAdapter } from '@auth/drizzle-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import db from '@/db';

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db),
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;

      return session;
    }
  },
  pages: {
    signIn: '/auth/sign-in',
    signOut: '/auth/sign-out'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    })
    // CredentialsProvider({
    //   // The name to display on the sign in form (e.g. "Sign in with...")
    //   name: 'Credentials',
    //   // `credentials` is used to generate a form on the sign in page.
    //   // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    //   // e.g. domain, username, password, 2FA token, etc.
    //   // You can pass any HTML attribute to the <input> tag through the object.
    //   credentials: {
    //     email: { label: 'Username', type: 'text', placeholder: 'jsmith' },
    //     password: { label: 'Password', type: 'password' }
    //   },
    //   authorize: async (credentials, req) {
    //     const user = await getUserFromDb(credentials?.email as string, credentials?.password as string);
    //     // Add logic here to look up the user from the credentials supplied
    //     // const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' };

    //     if (!user) {
    //       throw new Error('User not found');
    //     }

    //     if (!user.success) {
    //       throw new Error(user.message);
    //     }

    //     return user.data as User;
    //   }
    // })
  ]
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
