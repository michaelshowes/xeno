'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTransition } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { registerAction } from '@/actions/register';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RegisterSchema } from '@/validation/schemas';

import OAuthButton from './OAuthButton';

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;

export default function SignUpForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit = (values: RegisterSchemaType) => {
    startTransition(() => {
      registerAction(values).then((data) => {
        if (data.success) {
          toast.success(data.success, {
            position: 'top-center'
          });
        }

        if (data.error) {
          toast.error(data.error, {
            position: 'top-center'
          });
        }
      });
    });
  };

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

        <Form {...form}>
          <form
            className='mt-8 space-y-6'
            method='POST'
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className='space-y-4 rounded-md shadow-sm'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type='text'
                        autoComplete='name'
                        placeholder='Name'
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type='email'
                        autoComplete='email'
                        placeholder='Email Address'
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type='password'
                        autoComplete='current-password'
                        placeholder='Password'
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <Button
                type='submit'
                className='w-full'
                disabled={isPending}
              >
                Create Account
              </Button>
            </div>
          </form>
        </Form>

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
