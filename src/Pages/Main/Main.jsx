
import Navbar from "./Navbar.jsx"; 
import Hero from "./sections/Hero/page";
import Announcements from "./sections/Announcements/page";
import YearbookActivities from "./sections/YearbookActivities/page";
import Countdown from "./sections/Countdown/page";
import Footer from "./Footer.jsx";

export default function Main() {
  
  return (
    <main className = "snap-proximity">
      <Navbar/>
      <Hero />
      <Announcements />
      <YearbookActivities />
      <Countdown/>
      <Footer/>
    </main>
  );
}
