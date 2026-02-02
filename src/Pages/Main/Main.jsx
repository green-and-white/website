
import Navbar from "@/components/Navbar";
import Hero from "./sections/Hero/page";
import Announcements from "./sections/Announcements/page";
import YearbookActivities from "./sections/YearbookActivities/page";
import Countdown from "./sections/Countdown/page";
import Footer from "./Footer.jsx";

const mainNavLinks = [
  { name: 'Home', href: '#hero', type: 'section' },
  { name: 'Links', href: '/links', type: 'route' },
  { name: 'Catalog', href: '/catalog', type: 'route' },
];

export default function Main() {
  return (
    <main className = "snap-proximity">
      <Navbar links={mainNavLinks} />
      <Hero />
      <Announcements />
      <YearbookActivities />
      <Countdown/>
      <Footer/>
    </main>
  );
}
