import { useEffect, useRef, useState } from 'react';
import FooterBgImg from "@/assets/catalog/Footer.webp"
import Logo from "@/assets/icons/White-Vertical.svg"
import footerLogo from "@/assets/icons/white-horizontal.svg"
import { Link } from "react-router-dom";
import facebook from "@/assets/icons/facebook-black.svg"
import instagram from "@/assets/icons/instagram-black.svg"
import telegram from "@/assets/icons/telegram.svg"
import mail from "@/assets/icons/mail.svg"
import tiktok from "@/assets/icons/tiktok.svg"
import globe from "@/assets/icons/globe.svg"
import yearbook from "@/assets/stickers/YEARBOOK_2026.webp"
import { motion } from "framer-motion"

const glassStyle = {
  color: 'white',
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '50px',
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
          <div className="flex flex-row justify-center lg:justify-end py-4 gap-2.5 md:gap-3">
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
            <a 
              href="mailto:gw@dlsu.edu.ph" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-125 hover:-translate-y-1 bg-white/30 p-2 rounded"
            >
              <img src={mail} alt="email" className="h-6 w-6" style={{ filter: 'brightness(0) invert(1)' }}/>
            </a>
          </div>
    </>
  )
}

const Credits = () => {
  return(
    <>

          <div className="flex flex-row gap-1.5 md:gap-4 text-center md:text-end text-xs">
            <p>Website by <strong>Johan Marlo Cabili</strong>, <strong>Alvin Sean Cua</strong>, <strong>Linus Carl Perdon</strong>, <strong>Maggy de Guzman</strong>, and <strong>Mica Santos</strong></p>
          </div>
    </>)
}

const Footer = () => {
  return (
    <section
      className="relative px-6 md:px-12 font-helvetica flex flex-col justify-start items-center gap-8 md:gap-12 text-white"
    > 
      {/* Footer */}
      <div className='flex flex-col w-fit gap-12 md:gap-10 justify-start items-center pb-4 md:py-20'>

        {/* Pre-register Button */}
        <div className="mx-auto text-base md:text-xl lg:text-xl font-helvetica font-bold transition-all duration-300 hover:-translate-y-2 hover:cursor-pointer"
          style={glassStyle}>
            <Link 
              to="https://forms.gle/xNBJWFrup67DRsjP8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FEC530] px-4 py-8 sm:px-4 sm:py-9 md:px-10 md:py-5 block"
              style={{
                WebkitTextStrokeColor: '#000',
                WebkitTextStrokeWidth: '1.5px',
                paintOrder: 'stroke fill'
              }}
            >
              Pre-register for the 2026 Yearbook
            </Link> 
          </div>

          {/* Footer msg */}
          <div className='font-helvetica text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-[600px]'
              style={{
                WebkitTextStrokeColor:"#000",
                WebkitTextStrokeWidth:"2px", 
                paintOrder:"stroke fill"
              }}>
            Actual registration will open on March 11 to 28 and April 8 to 13. Times and venues are to be announced—stay tuned! 
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
          <div>
              {/* Socials */}
              <Socials />
              {/* Credits */}
              <Credits />
          </div>
         
        </div>
        
         
      </div>
    </section>
  );
}

export default Footer;