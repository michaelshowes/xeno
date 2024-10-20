import Link from 'next/link';

import { getServerSession } from 'next-auth';

import { Button } from '@/components/ui/button';

export default async function Home() {
  const session = await getServerSession();
  console.log(session?.user);
  return (
    <div>
      <Button asChild>
        <Link href='/dashboard'>Dashboard</Link>
      </Button>
    </div>
  );
}
