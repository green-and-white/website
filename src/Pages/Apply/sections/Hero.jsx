import "css-doodle"

import logo from "/src/assets/icons/logo.svg";
import Bokeh from "/src/components/Bokeh.jsx";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-radial from-blue-900 from-11% to-blue-800 to-100% min-h-screen overflow-hidden"
    >
      
      <css-doodle class="absolute inset-0 z-0" grid="8">
        <Bokeh/>
      </css-doodle> 

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-between items-center text-center h-screen py-8">
          {/* Top: Logo + Org Name + Tagline */}
          <div className="relative flex flex-col h-1/2 md:justify-end md:bottom-16 items-center gap-2">
            <img
              src={logo}
              alt="Logo"
              className="max-h-18"
              style={{ filter: "drop-shadow(0 0 2px white)" }}
            />
            <h2 className="font-waltograph text-white text-2xl md:text-3xl font-bold tracking-wide glow">
              Green &amp; White
            </h2>
            <p className="text-white text-xs font-times glow">
              CAPTURING IMAGES OF LASALLIAN EXCELLENCE
            </p>
          </div>

          {/* Bottom: Tagline */}
          <div className="flex flex-col justify-between gap-12">
            <a  className="font-pixar tracking-tighter text-2xl applynow"
                href = "https://docs.google.com/forms/d/e/1FAIpQLScc9dqbM0z2BGe49uxzfuRwij8EGEPVYE2WV3mUEjb5gnbrdw/viewform">
                Apply Now
            </a>
            <p className="text-white text-center text-base font-pixar glow">
              RECRUITMENT WEEK
            </p>
          </div>

          {/* Middle: Headline */}
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-insideout font-bold tracking-wider text-white cta px-6 leading-14 w-full">
            <span className="block sm:hidden">
              Make A <br /> Core <br /> Memory
            </span>
            <span className="hidden sm:block">Make A Core Memory</span>
          </h1>
        </div>
      </div>
    </section>
  );
}