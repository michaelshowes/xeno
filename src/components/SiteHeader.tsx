import Image from 'next/image';

import AuthButton from './AuthButton';
import ModeToggle from './ModeToggle';

export default function SiteHeader() {
  return (
    <header className={'flex gap-x-6'}>
      <Image
        src={'/images/logo-full.svg'}
        alt={'logo'}
        width={200}
        height={50}
      />

      <ModeToggle />
      <AuthButton />
    </header>
  );
}
