import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import OAuthButton from './OAuthButton';

export default function SignUpForm() {
  return (
    <div className='flex w-full items-center justify-center lg:w-1/2'>
      <div className='w-full max-w-md space-y-8 px-4 sm:px-6'>
        <div>
          <Image
            src={'/images/logo-full.svg'}
            alt={'logo'}
            width={300}
            height={0}
            className={'mb-12'}
          />
          <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
            Create a new account
          </h2>
          <p className='mt-2 text-sm text-gray-600'>
            Or{' '}
            <Link
              href={'/auth/sign-in'}
              className='font-medium text-primary hover:text-primary/90'
            >
              sign in to your account
            </Link>
          </p>
        </div>

        <form
          className='mt-8 space-y-6'
          action='#'
          method='POST'
        >
          <div className='space-y-4 rounded-md shadow-sm'>
            <div>
              <Label htmlFor='name'>Full Name</Label>
              <Input
                id='name'
                name='name'
                type='text'
                autoComplete='name'
                required
                className='mt-1'
                placeholder='John Doe'
              />
            </div>
            <div>
              <Label htmlFor='email-address'>Email address</Label>
              <Input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='mt-1'
                placeholder='you@example.com'
              />
            </div>
            <div>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                name='password'
                type='password'
                autoComplete={'new-password'}
                required
                className='mt-1'
                placeholder='••••••••'
              />
            </div>
          </div>

          <div>
            <Button
              type='submit'
              className='w-full'
            >
              Sign Up
            </Button>
          </div>
        </form>

        <div className='mt-6'>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300' />
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='bg-white px-2 text-gray-500'>
                Or continue with
              </span>
            </div>
          </div>

          <div className='mt-6 grid grid-cols-2 gap-3'>
            <OAuthButton provider='google' />
            <OAuthButton provider='github' />
          </div>
        </div>
      </div>
    </div>
  );
}
