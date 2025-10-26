import styles from "./home.module.css";

import henryBackground from "@/assets/home_page/henry.webp";

import Hero from "./sections/Hero/page";
import Announcements from "./sections/Announcements/page";
import About from "./sections/About/page";
import YearbookActivities from "./sections/YearbookActivities/page";
import Countdown from "./sections/Countdown/page";
import Footer from "./Footer";

import {useRef, useEffect} from "react"


export default function Main() {
  
  return (
    <main className = "snap-proximity">
      <Hero />
      <Announcements />
      <YearbookActivities />
      <Countdown/>
      <Footer/>
    </main>
  );
}
