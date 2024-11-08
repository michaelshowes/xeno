import SiteHeader from '@/components/SiteHeader';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={'p-4 max-w-[1600px] mx-auto'}>
        <div>
          <SiteHeader />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
