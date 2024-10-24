import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

import Providers from '@/components/Providers';
import { Toaster } from '@/components/ui/sonner';
import '@/globals.css';

const inter = Inter({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'XENO | Next.js Starter Template',
  description: 'Starter template for Next.js'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      {/* 
        This <head> block exists to hold the sample favicon. In production, remove the <head> and place your favicon .ico file in the /app directory
      */}
      <head>
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>'
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Toaster />
          <Suspense>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
