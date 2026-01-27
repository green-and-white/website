import FooterBgImg from "@/assets/catalog/Footer.webp"
import Logo from "@/assets/icons/White-Vertical.svg"
import { Link } from "react-router-dom";
import facebook from "@/assets/icons/facebook.svg"
import instagram from "@/assets/icons/instagram.svg"
import telegram from "@/assets/icons/telegram-white.png" // need white asset
import tiktok from "@/assets/icons/tiktok.svg"
import globe from "@/assets/icons/globe-white.svg"

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

const Footer = () => {
  return (
    <section
      className="relative px-6 md:px-12 min-h-screen flex items-center justify-center overflow-hidden font-semibold font-libre-caslon"
    >
      {/* Image background */}
      <img 
        src={FooterBgImg} 
        alt="footer bg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div 
        style={glassStyle} 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 py-8 px-6 md:px-18 w-full max-w-7xl text-center sm:text-left"
      >
        {/* Logo */}
        <div className="flex flex-col items-center sm:items-start gap-2 md:pr-4 md:border-r-2 border-white">
          <img 
            src={Logo}
            alt="G&W Logo"
            className="w-26 h-26 md:w-28 md:h-28 lg:w-32 lg:h-32"
          />
          <p
            style={fontStyle}
            className="text-xs px-4 sm:text-sm sm:px-0"
          >
            Green & White is the official yearbook publication of De La Salle University.
          </p> 
        </div>   
        
        {/* Explore */}
        <div className="md:ml-12 flex flex-col gap-6 sm:pb-8 md:pb-2 md:border-b-0 sm:border-b-2 border-white items-center sm:items-start">
          <h3 style={fontStyle} className="text-xl border-b-2 border-white pb-1 sm:pb-0 px-8 sm:px-0 sm:pr-14 w-fit">Explore</h3> 
          {/* Navlinks */}
          <div className="flex flex-col gap-4 text-sm underline sm:no-underline">
            {/* TODO: ADD LINKS */}
            <Link to="/">Homepage</Link> 
            <Link to="/">GW Links</Link> 
            <Link to="/">Pre-Register to the 2026 Yearbook</Link> 
            <Link to="/">Apply to Green & White</Link> 
          </div> 
        </div>
        
        {/* Contact Info */}
        <div className="md:ml-5 lg:ml-0 flex flex-col gap-6 pb-2 items-center sm:items-start">
          <h3 style={fontStyle}  className="text-xl border-b-2 border-white pb-1 sm:pb-0 px-8 sm:px-0 sm:pr-14 w-fit">Contact</h3> 
          <div className="flex flex-col gap-4 text-sm">
            <p>RM502 Br. Connon Hall, De La Salle University</p> 
            <p className="underline">gw@dlsu.edu.ph</p> 
          </div>
          
          {/* Socials */}
          <div className="flex flex-row gap-3 md:gap-1.5">
            <a href="https://greenandwhite.com.ph" target="_blank" rel="noopener noreferrer">
              <img src={globe} alt="Website" className="h-5 w-5 p-[px]"/>
            </a>
            <a href="https://fb.com/gwyearbookdlsu" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="h-5 w-5"/>
            </a>
            <a href="https://instagram.com/gwyearbookdlsu" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="h-5 w-5"/>
            </a>
            <a href="https://t.me/gwyearbookdlsu" target="_blank" rel="noopener noreferrer">
              <img src={telegram} alt="Telegram" className="h-5 w-5"/>
            </a>
            <a href="https://tiktok.com/@gwyearbookdlsu" target="_blank" rel="noopener noreferrer">
              <img src={tiktok} alt="TikTok" className="h-5 w-5 p-[px] rounded-2xl"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;