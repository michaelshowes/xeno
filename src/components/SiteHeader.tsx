import Image from 'next/image';
import Link from 'next/link';

import AuthButton from './AuthButton';
import ModeToggle from './ModeToggle';

export default function SiteHeader() {
  return (
    <header className={'flex gap-x-6'}>
      <Link
        href='/'
        className={'mr-auto'}
      >
        <Image
          src={'/images/logo-full.svg'}
          alt={'logo'}
          width={200}
          height={50}
        />
      </Link>
      <nav>
        <Link href='/dashboard'>Dashboard</Link>
      </nav>
      <ModeToggle />
      <AuthButton />
    </header>
  );
}
