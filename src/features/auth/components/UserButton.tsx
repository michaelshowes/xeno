'use client';

import { LogOut } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';

export default function UserButton() {
  const { data } = useSession();
  const user = data?.user;

  if (!user) {
    return null;
  }

  const avatarFallback = user.name
    ? user.name[0].toUpperCase()
    : user.email![0].toUpperCase();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className='relative outline-none'>
        <Avatar className='size-10 border border-neutral-300 transition hover:opacity-75'>
          <AvatarImage src={user.image!} />
          <AvatarFallback className='flex items-center justify-center bg-neutral-200 text-xl font-medium text-neutral-500'>
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        side='bottom'
        className='w-60'
        sideOffset={10}
      >
        <div className='flex flex-col items-center justify-center gap-2 px-2.5 py-4'>
          <Avatar className='size-[52px] border border-neutral-300 transition'>
            <AvatarImage src={user.image!} />
            <AvatarFallback className='flex items-center justify-center bg-neutral-200 text-xl font-medium text-neutral-500'>
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-sm font-medium'>{user.name || 'User'}</p>
            <p className='text-xs text-neutral-500'>{user.email}</p>
          </div>
        </div>
        <Separator />
        <DropdownMenuItem
          className='flex h-10 cursor-pointer items-center justify-center font-mono text-amber-700'
          onClick={() => signOut()}
        >
          <LogOut className='mr-2 size-4' />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
