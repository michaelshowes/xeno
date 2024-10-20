'use client';

import { signIn } from 'next-auth/react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import { Button } from '@/components/ui/button';

type OAuthButtonProps = {
  provider: 'google' | 'github';
};

export default function OAuthButton({ provider }: OAuthButtonProps) {
  const providerIcon = () => {
    switch (provider) {
      case 'google':
        return <FcGoogle />;
      case 'github':
        return <FaGithub />;
    }
  };

  return (
    <Button
      variant='outline'
      className='w-full'
      onClick={() => signIn(provider, { callbackUrl: '/dashboard' })}
    >
      {providerIcon()}
      <span className='sr-only'>{provider}</span>
    </Button>
  );
}
