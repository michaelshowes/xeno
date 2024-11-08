import HomeHero from '@/components/HomeHero';
import SiteHeader from '@/components/SiteHeader';

export default function Home() {
  return (
    <div className={'p-4 max-w-[1600px] mx-auto flex flex-col gap-4'}>
      <SiteHeader />
      <div>
        <HomeHero />
      </div>
    </div>
  );
}
