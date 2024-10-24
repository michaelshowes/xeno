import { auth } from '@/auth';
import { getUsers } from '@/db/queries/users';
import requireAuth from '@/utils/requireAuth';

export default async function Dashboard() {
  await requireAuth();

  const session = (await auth())!;
  const users = await getUsers();

  console.log(session);

  return (
    <div>
      <h1 className={'text-3xl uppercase font-bold'}>Dashboard</h1>
      <p className={'font-semibold'}>
        {' '}
        (If you can see this page, you&apos;re signed in)
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nemo
        ratione qui incidunt dolor magni id expedita harum mollitia magnam
        cupiditate iste, ex ad asperiores soluta illo inventore! Modi,
        distinctio?
      </p>
    </div>
  );
}
