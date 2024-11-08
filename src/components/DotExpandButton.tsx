import { FiArrowRight } from 'react-icons/fi';

import { cn } from '@/lib/utils';

type DotExpandButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const DotExpandButton = ({ children, className }: DotExpandButtonProps) => {
  return (
    <button
      className={cn(
        'group flex h-10 items-center gap-2 rounded-full bg-[#F8F32B] pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-black hover:pl-2 hover:text-white active:bg-neutral-700',
        className
      )}
    >
      <span className='rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-[#F8F32B]'>
        <FiArrowRight className='-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45' />
      </span>
      <span>{children}</span>
    </button>
  );
};

export default DotExpandButton;
