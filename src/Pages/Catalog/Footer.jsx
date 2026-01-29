import { useEffect, useRef, useState } from 'react';
import FooterBgImg from "@/assets/catalog/Footer.webp"
import Logo from "@/assets/icons/White-Vertical.svg"
import footerLogo from "@/assets/icons/white-horizontal.svg"
import { Link } from "react-router-dom";
import facebook from "@/assets/icons/facebook-black.svg"
import instagram from "@/assets/icons/instagram-black.svg"
import telegram from "@/assets/icons/telegram.svg"
import tiktok from "@/assets/icons/tiktok.svg"
import globe from "@/assets/icons/globe.svg"
import styles from '../Main/home.module.css';
import { motion } from "framer-motion"

const glassStyle = {
  color: 'white',
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '16px',
  border: '0.5px solid rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  zIndex: 10
}; 

// Retrieved from main css module
const fontStyle = {
  textShadow: `
    0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.5),
    0px 4px 20px #000000
  `
};

const Footer = ({ footerProgress = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    // Trigger animations only when footer is fully visible (footerProgress === 1)
    if (footerProgress >= 0.95) {
      // Small delay after reaching full opacity
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [footerProgress]);

  return (
    <section
      ref={footerRef}
      className="relative px-6 md:px-12 min-h-screen items-center font-helvetica flex flex-col justify-center md:justify-start py-12 md:py-32 lg:py-40 gap-8 md:gap-12 text-[#FEC530]"
    > 
      {/* Image background */}
      <img 
        src={FooterBgImg} 
        alt="footer bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Literary Write Up */}

      {/* Footer */}
      <div 
        style={glassStyle} 
        className={`grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-0 py-4 px-4 md:py-8 md:px-18 w-full max-w-7xl text-left transition-all duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Logo */}
        <div 
          className={`col-span-2 md:col-span-1 flex flex-col items-start gap-1 md:gap-2 md:pr-4 md:border-r-2 border-white transition-all duration-700 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <img 
            src={Logo}
            alt="G&W Logo"
            className="w-16 h-16 md:w-28 md:h-28 lg:w-32 lg:h-32 transition-transform duration-500 hover:scale-110"
          />
          <p
            style={fontStyle}
            className="text-[10px] px-2 text-base md:text-lg sm:px-0"
          >
            Green & White is the official yearbook publication of De La Salle University.
          </p> 
        </div>   

        {/* Explore */}
        <div 
          className={`md:ml-12 flex flex-col gap-2 md:gap-6 sm:pb-8 md:pb-2 md:border-b-0 border-white items-start transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <h3 style={fontStyle} className="text-sm md:text-xl border-b-2 border-white pb-1 sm:pb-0 w-fit">Explore</h3> 
          {/* Navlinks */}
          <div className="flex flex-col gap-1.5 md:gap-4 text-[10px] md:text-sm underline sm:no-underline">
            <Link 
              to="/" 
              className="transition-all duration-300 hover:translate-x-2 hover:text-gray-200"
            >
              Homepage
            </Link> 
            <Link 
              to="/" 
              className="transition-all duration-300 hover:translate-x-2 hover:text-gray-200"
            >
              GW Links
            </Link> 
            <Link 
              to="/" 
              className="transition-all duration-300 hover:translate-x-2 hover:text-gray-200"
            >
              Pre-Register to the 2026 Yearbook
            </Link> 
            <Link 
              to="/" 
              className="transition-all duration-300 hover:translate-x-2 hover:text-gray-200"
            >
              Apply to Green & White
            </Link> 
          </div> 
        </div>

        {/* Contact Info */}
        <div 
          className={`md:ml-5 lg:ml-0 flex flex-col gap-2 md:gap-6 pb-2 items-start transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <h3 style={fontStyle}  className="text-sm md:text-xl border-b-2 border-white pb-1 sm:pb-0 w-fit">Website by:</h3> 
          <div className="flex flex-col gap-1.5 md:gap-4 text-[10px] md:text-sm">
            <p><strong>Johan Marlo Cabili, Alvin Sean Cua, Carl Linus Pauling, Maggy de Guzman, and Mica Santos</strong></p>
          </div>

          {/* Socials */}
          <div className="flex flex-row gap-2.5 md:gap-3">
            <a 
              href="https://greenandwhite.com.ph" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-125 hover:-translate-y-1 bg-white/30 p-2 rounded"
            >
              <img src={globe} alt="Website" className="h-6 w-6 p-[px]" style={{ filter: 'brightness(0) invert(1)' }}/>
            </a>
            <a 
              href="https://fb.com/gwyearbookdlsu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-125 hover:-translate-y-1 bg-white/30 p-2 rounded"
            >
              <img src={facebook} alt="Facebook" className="h-6 w-6" style={{ filter: 'brightness(0) invert(1)' }}/>
            </a>
            <a 
              href="https://instagram.com/gwyearbookdlsu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-125 hover:-translate-y-1 bg-white/30 p-2 rounded"
            >
              <img src={instagram} alt="Instagram" className="h-6 w-6" style={{ filter: 'brightness(0) invert(1)' }}/>
            </a>
            <a 
              href="https://t.me/gwyearbookdlsu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-125 hover:-translate-y-1 bg-white/30 p-2 rounded"
            >
              <img src={telegram} alt="Telegram" className="h-6 w-6" style={{ filter: 'brightness(0) invert(1)' }}/>
            </a>
          </div>
        </div>
      </div>

      {/* White rectangle at bottom of screen */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-32 bg-white/40 flex items-center justify-center">
        <img 
          src={footerLogo}
          alt="G&W Logo"
          className="w-64 transition-opacity duration-300"
        />
      </div>
    </section>
  );
}

export default Footer;