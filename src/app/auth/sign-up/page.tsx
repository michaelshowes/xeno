'use client';

import { redirect } from 'next/navigation';

import { useSession } from 'next-auth/react';

import SignUpForm from '@/features/auth/components/SignUpForm';

export default function SignUpPage() {
  const { status } = useSession();
  if (status === 'authenticated') {
    redirect('/dashboard');
  }

  return <SignUpForm />;
}
