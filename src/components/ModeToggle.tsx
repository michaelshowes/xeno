'use client';

import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { useMounted } from '@/hooks/useMounted';

export default function ModeToggle() {
  const { mounted } = useMounted();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) return;

  return (
    <motion.div
      className='w-16 h-8 bg-gray-300 rounded-full p-1 cursor-pointer flex items-center'
      onClick={toggleTheme}
      animate={{
        backgroundColor: theme === 'light' ? '#d1d5db' : '#1f2937'
      }}
    >
      <motion.div
        className='w-6 h-6 rounded-full flex items-center justify-center'
        animate={{
          x: theme === 'light' ? 0 : 32,
          backgroundColor: theme === 'light' ? '#fbbf24' : '#312e81'
        }}
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 30
        }}
      >
        {theme === 'light' ? (
          <Sun className='h-4 w-4 text-white' />
        ) : (
          <Moon className='h-4 w-4 text-indigo-200' />
        )}
      </motion.div>
    </motion.div>
  );
}
