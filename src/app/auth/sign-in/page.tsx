'use client';

import { redirect } from 'next/navigation';

import { useSession } from 'next-auth/react';

import SignInForm from '@/features/auth/components/SignInForm';

export default function SignInPage() {
  const { status } = useSession();
  console.log(status);
  if (status === 'authenticated') {
    redirect('/dashboard');
  }

  return <SignInForm />;
}
