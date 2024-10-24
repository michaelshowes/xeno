'use client';

import { PacmanLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div
      className={'w-full h-1/2 flex flex-col items-center justify-center gap-3'}
    >
      <div className={'text-2xl uppercase font-bold'}>Loading...</div>
      <PacmanLoader />
    </div>
  );
}
