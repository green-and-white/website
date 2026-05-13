import Navbar from './Navbar'
import About from './Sections/About';
import Committees from './Sections/Committees';
import Dates from './Sections/Dates';
import FAQ from './Sections/FAQ';
import Hero from './Sections/Hero';
import Steps from './Sections/Steps';
import Footer from './Footer';



export default function T3Apply() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Committees />
      <Steps />
      <Dates />
      <FAQ />
      <Footer />
    </>
  );
}
