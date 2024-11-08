import Link from 'next/link';

import { auth } from '@/auth';
import SignInButton from '@/features/auth/components/SignInButton';
import UserButton from '@/features/auth/components/UserButton';

import ModeToggle from './ModeToggle';

export default async function SiteHeader() {
  const session = await auth();

  return (
    <header className={'flex gap-x-6'}>
      <Link
        href='/'
        className={'mr-auto font-bold text-2xl text-primary'}
      >
        Xeno
      </Link>
      <nav>
        <Link href='/dashboard'>Dashboard</Link>
      </nav>
      <ModeToggle />
      {session ? <UserButton /> : <SignInButton />}
    </header>
  );
}
