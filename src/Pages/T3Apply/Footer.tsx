
import { T3_ASSETS } from '../../lib/t3Assets';
import { CloudinaryImage } from '../../components/t3-recweek/CloudinaryImage';

import { Link as RouterLink } from 'react-router-dom'

import logo from "@/assets/logos_updated/black-vertical.svg"
import facebook from "@/assets/icons/facebook-black-cropped.svg"
import instagram from "@/assets/icons/instagram-black.svg"
import telegram from "@/assets/icons/telegram-cropped.svg"
import tiktok from "@/assets/icons/tiktok-white.svg"
import footer from "@/assets/recweek/footer.avif"
import grainTexture from "@/assets/textures/grain.avif"

function Links() {
  return (
    <>
      <div className="mx-auto flex flex-row w-full justify-center items-center gap-4">
        <a href="https://fb.com/gwyearbookdlsu" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" className="h-8 w-8 brightness-0 invert" />
        </a>
        <a href="https://t.me/gwyearbookdlsu" target="_blank" rel="noopener noreferrer">
          <img src={telegram} alt="Telegram" className="h-8 w-8 brightness-0 invert" />
        </a>
        <a href="https://t.me/gwyearbookdlsu" target="_blank" rel="noopener noreferrer">
          <img src={tiktok} alt="Tiktok" className="h-8 w-8 brightness-0 invert" />
        </a>
        <a href="https://instagram.com/gwyearbookdlsu" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" className="h-8 w-8 brightness-0 invert" />
        </a>
      </div>
    </>
  )
}


function Footer() {

  // Find the required assets from the registry
  const whiteLogo = T3_ASSETS.logos.find(
    (logo) => logo.public_id === "Vertical_-_White_elepk2"
  ) || { public_id: "Vertical_-_White_elepk2", display_name: "Vertical - White" };

  return (
    <section
      className="relative px-6 md:px-12 py-16 md:py-24 flex-col flex font-futura-bold justify-center items-center gap-[30px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url(${footer})` }}
    >
      {/* Grain overlay */}
      <img
        src={grainTexture}
        aria-hidden="true"
        alt=""
        className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-difference"
      />

      <div className="transition-transform duration-500">
        <CloudinaryImage
          publicId={whiteLogo.public_id}
          alt={whiteLogo.display_name}
          className="h-22 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          width={200}
        />
      </div>

      {/* Links */}
      <div className="flex flex-row">
        <Links />
      </div>
      {/* Buttons */}
      <div className="flex flex-row gap-4 z-2">
        <div className="flex flex-col items-center px-2 py-4 bg-white hover:bg-app-green hover:text-app-white transition-colors ease-in-out text-app-green font-futura-extrabold text-xl">
          {/* main website */}
          {/* redirect to base route / */}
          <RouterLink to="/">main website</RouterLink>
        </div>
        <div className="flex flex-col items-center px-2 py-4 bg-white hover:bg-app-green hover:text-app-white transition-colors ease-in-out text-app-green font-futura-extrabold text-xl">
          {/* back to top */}
          {/* scroll to top */}
          <a href = "#hero">back to top</a>
        </div>
      </div>

      {/* credits */}
      <div className="text-center text-white z-2 [text-shadow:0_4px_8px_rgba(0,0,0,0.8)]">
        <div className='font-futura-bold'>
          Website by &nbsp;
          <span className='font-futura-extrabold'>
            <span className="whitespace-nowrap">Ramon Enrico Martinez</span>, <span className="whitespace-nowrap">Johan Marlo Cabili</span>, <span className="whitespace-nowrap">Alvin Sean Cua</span>, and <span className="whitespace-nowrap">Linus Carl Perdon</span>
          </span>
        </div>
        {/* vis credits  */}
        <div className='font-futura-bold mt-1'>
          Visuals by&nbsp;
          <span className='font-futura-extrabold'>
            <span className="whitespace-nowrap">Ramon Enrico Martinez</span>, <span className="whitespace-nowrap">Kim Balasabas</span>, and <span className="whitespace-nowrap">Zoila Caga</span>
          </span>
        </div>
      </div>
      {/* web credits */}



    </section>
  )
}

export default Footer