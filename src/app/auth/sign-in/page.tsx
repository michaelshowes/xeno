'use client';

import Image from 'next/image';
import { redirect } from 'next/navigation';
import { useState } from 'react';

import { useSession } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import OAuthButton from '@/features/auth/components/OAuthButton';

export default function SignInPage() {
  const { data, status } = useSession();
  if (status === 'authenticated') {
    redirect('/dashboard');
  }

  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className='flex h-screen'>
      {/* Left side - Image */}
      <div className='relative hidden w-1/2 lg:block'>
        <Image
          alt='Office'
          className='absolute inset-0 h-full w-full object-cover'
          src='https://picsum.photos/1920/1080'
          width={1920}
          height={1080}
        />
      </div>

      {/* Right side - Auth form */}
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
              {isLogin ? 'Sign in to your account' : 'Create a new account'}
            </h2>
            <p className='mt-2 text-sm text-gray-600'>
              Or{' '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className='font-medium text-primary hover:text-primary/90'
              >
                {isLogin ? 'create a new account' : 'sign in to your account'}
              </button>
            </p>
          </div>

          <form
            className='mt-8 space-y-6'
            action='#'
            method='POST'
          >
            <div className='space-y-4 rounded-md shadow-sm'>
              {!isLogin && (
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
              )}
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
                  autoComplete={isLogin ? 'current-password' : 'new-password'}
                  required
                  className='mt-1'
                  placeholder='••••••••'
                />
              </div>
            </div>

            {isLogin && (
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    id='remember-me'
                    name='remember-me'
                    type='checkbox'
                    className='h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary'
                  />
                  <Label
                    htmlFor='remember-me'
                    className='ml-2 block text-sm text-gray-900'
                  >
                    Remember me
                  </Label>
                </div>

                <div className='text-sm'>
                  <a
                    href='#'
                    className='font-medium text-primary hover:text-primary/90'
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
            )}

            <div>
              <Button
                type='submit'
                className='w-full'
              >
                {isLogin ? 'Sign in' : 'Sign up'}
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
    </div>
  );
}
