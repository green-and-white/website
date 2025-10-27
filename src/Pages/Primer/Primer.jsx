import HeroSection from "./components/HeroSection";
import PackagesSection from "./components/PackagesSection";
import TimelineSection from "./components/TimelineSection";
import PaymentDeadlinesSection from "./components/PaymentDeadlinesSection";
import RegistrationStepsSection from "./components/RegistrationStepsSection";

export default function Primer() {
  return (
    <main>
      <HeroSection />
      <PackagesSection />
      <TimelineSection />
      <PaymentDeadlinesSection />
      <RegistrationStepsSection />
    </main>
  );
}
