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
import yearbook from "@/assets/stickers/YEARBOOK_2026.webp"
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

const Socials = () => {
  return(
    <>
      {/* Socials */}
          <div className="flex flex-row py-4 gap-2.5 md:gap-3">
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
    </>
  )
}
const Footer = () => {
  return (
    <section
      className="relative px-6 md:px-12 items-center font-helvetica flex flex-col justify-center md:justify-start pt-12 md:pt-32 lg:pt-40 gap-8 md:gap-12 text-white"
    > 
      {/* Footer */}
      <div className='flex flex-col gap-12 md:gap-10 md:flex-row md:justify-between w-full'>
        <div className="flex flex-col gap-4 md:gap-6 text-base md:text-xl lg:text-2xl underline font-libre-caslon">
            <Link 
              to="/" 
              className="transition-all duration-300 hover:translate-x-2 hover:text-gray-200"
            >
              Homepage
            </Link> 
            <Link 
              to="/links" 
              className="transition-all duration-300 hover:translate-x-2 hover:text-gray-200"
            >
              GW Links
            </Link> 
            <a 
              href="#header" 
              className="transition-all duration-300 hover:translate-x-2 hover:text-gray-200"
            >
              Catalog
            </a> 
            <Link 
              to="/primer" 
              className="transition-all duration-300 hover:translate-x-2 hover:text-gray-200"
            >
              Pre-Register to the 2026 Yearbook
            </Link> 
            <Link 
              to="/apply" 
              className="transition-all duration-300 hover:translate-x-2 hover:text-gray-200"
            >
              Apply to Green & White
            </Link> 
          </div>
          <div className="flex flex-col md:items-end gap-1.5 md:gap-6 text-base md:text-xl lg:text-2xl font-libre-caslon">
            <div>
              RM502 Br. Connon Hall, De La Salle University
            </div>
            <div>
              <a href="mailto:gw@dlsu.edu.ph" className='underline'>gw@dlsu.edu.ph</a>
            </div>
            <Socials />
          </div>
      </div>

      {/* Glass Credits */}
      <div 
        style={glassStyle} 
        className="flex flex-wrap py-2 px-4 md:p-8  w-full max-w-7xl text-left"
      >
        {/* Contact Info */}
        <div 
          className="flex flex-col gap-2 md:gap-6 pb-2 items-start font-helvetica font-light" 
        >
          <h3 className="text-sm md:text-xl border-b-2 border-white pb-1 sm:pb-0 w-fit">Website by:</h3> 
          <div className="flex flex-row gap-1.5 md:gap-4 text-sm md:text-lg">
            <p><strong>Johan Marlo Cabili, Alvin Sean Cua, Carl Linus Pauling, Maggy de Guzman, and Mica Santos</strong></p>
          </div>
        </div>
      </div>

      {/* White rectangle at bottom of screen - full width */}
      <div className="relative w-screen -mx-6 md:-mx-12 min-h-[10rem] md:min-h-32 bg-white/40 flex items-center justify-center">

        {/* Width limited container */}
        <div className="max-w-[1280px] flex flex-col lg:flex-row justify-between items-center w-full mx-auto px-6 md:px-12 py-4 md:py-6 gap-6 md:gap-8">
          {/* Logo and yb */}
          <div className='flex flex-row gap-4 px-4 sm:px-6'>
            <img 
                src={footerLogo}
                alt="G&W Logo"
                className="w-48 lg:w-64 transition-opacity duration-300"
              />
              <img src={yearbook} alt="Yearbook 2026" className="w-16 sm:w-20 md:w-24"/>
          </div>
          {/* About */}
          <div className='flex-1 text-xs md:text-base font-helvetica font-light text-center'>
            <p>
                Green & White is the official yearbook publication of De La Salle University. 
                Celebrating its 101st year, the publication lives as the record-keeper of Lasallian memories. 
                From portraits to pages, Green & White brings the Lasallian community together and etches their place in time through the yearbook.
            </p>
          </div>
        </div>
        
         
      </div>
    </section>
  );
}

export default Footer;