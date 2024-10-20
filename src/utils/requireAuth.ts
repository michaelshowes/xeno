import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth';

import { authOptions } from '@/config/auth';

export default async function requireAuth() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect('/');
  }
}
