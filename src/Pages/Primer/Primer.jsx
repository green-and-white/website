import HeroSection from "./components/HeroSection";
import StickerBanner from "./components/StickerBanner";
import PackagesSection from "./components/PackagesSection";
import TimelineSection from "./components/TimelineSection";
import PaymentDeadlinesSection from "./components/PaymentDeadlinesSection";
import RegistrationStepsSection from "./components/RegistrationStepsSection";
import Navbar from '@/components/Navbar';

const primerNavLinks = [
  { name: 'Home', href: '/', type: 'route' },
  { name: 'Links', href: '#hero', type: 'section' },
  { name: 'Catalog', href: '/catalog', type: 'route' },
];

export default function Primer() {
  return (
    <main>
      <Navbar links={primerNavLinks} />
      <StickerBanner/>
      <HeroSection />
      <PackagesSection />
      <TimelineSection />
      <PaymentDeadlinesSection />
      <RegistrationStepsSection />
    </main>
  );
}
