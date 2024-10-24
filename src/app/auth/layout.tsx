import Image from 'next/image';

export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex h-screen'>
      {/* Left side - Image */}
      <div className='relative hidden w-1/2 lg:block'>
        <Image
          alt='Office'
          className='absolute inset-0 h-full w-full object-cover'
          src='/images/parrot.jpg'
          width={1920}
          height={1280}
        />
      </div>

      {/* Right side - Form */}
      {children}
    </main>
  );
}
