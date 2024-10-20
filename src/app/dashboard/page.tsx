export default async function Dashboard() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <div>Signed in</div>;
}
