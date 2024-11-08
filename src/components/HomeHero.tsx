'use client';

import { MouseEventHandler, useEffect, useState } from 'react';

import { useAnimate } from 'framer-motion';

import DotExpandButton from './DotExpandButton';

export default function HomeHero() {
  const [scope, animate] = useAnimate();

  const [size, setSize] = useState({ columns: 0, rows: 0 });

  useEffect(() => {
    generateGridCount();
    window.addEventListener('resize', generateGridCount);

    return () => window.removeEventListener('resize', generateGridCount);
  }, []);

  const generateGridCount = () => {
    const hero = document.getElementById('home-hero');
    const columns = Math.floor(hero!.clientWidth / 80);
    const rows = Math.floor(hero!.clientHeight / 80);

    setSize({
      columns,
      rows
    });
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    // @ts-expect-error: id does exist
    const id = `#${e.target.id}`;
    animate(id, { background: 'rgb(248, 243, 43, 0)' }, { duration: 1.5 });
  };

  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    // @ts-expect-error: id does exist
    const id = `#${e.target.id}`;
    animate(id, { background: 'rgb(248, 243, 43, 1)' }, { duration: 0.15 });
  };

  return (
    <section
      id={'home-hero'}
      className={
        'overflow-hidden isolate relative rounded-[16px] shadow-md h-[640px] bg-white flex items-end'
      }
    >
      <div
        ref={scope}
        className='absolute inset-0 m-[-2px] -z-10 grid grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))]'
      >
        {[...Array(size.rows * (size.columns + 1))].map((_, i) => (
          <div
            key={i}
            id={`square-${i}`}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className='h-full w-full border border-gray-300/20'
          />
        ))}
      </div>
      <div className={'pb-16 pl-16 pointer-events-none'}>
        <h1 className='text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-8xl/none'>
          Xeno
        </h1>
        <p className='max-w-[600px] text-muted-foreground'>
          Discover the future of innovation with Xeno. We&apos;re pushing
          boundaries and redefining possibilities.
        </p>
        <DotExpandButton className={'mt-6 pointer-events-auto'}>
          Click Here
        </DotExpandButton>
      </div>
    </section>
  );
}
