
import { T3_ASSETS } from '../../lib/t3Assets';
import { CloudinaryImage } from '../../components/t3-recweek/CloudinaryImage';

import { Link as RouterLink } from 'react-router-dom'

import logo from "@/assets/logos_updated/black-vertical.svg"
import facebook from "@/assets/icons/facebook-black.svg"
import instagram from "@/assets/icons/instagram-black.svg"
import telegram from "@/assets/icons/telegram.svg"
import tiktok from "@/assets/icons/tiktok.svg"
import globe from "@/assets/icons/globe.svg"

function Links() {
  return (
    <>
      <div className="mx-auto flex flex-row w-full justify-center gap-4">
        <a href="https://fb.com/gwyearbookdlsu" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" className="h-8 w-8 brightness-0 invert" />
        </a>
        <a href="https://instagram.com/gwyearbookdlsu" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" className="h-8 w-8 brightness-0 invert" />
        </a>
        <a href="https://t.me/gwyearbookdlsu" target="_blank" rel="noopener noreferrer">
          <img src={telegram} alt="Telegram" className="h-8 w-8 brightness-0 invert" />
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
    <section className="py-8 flex-col flex font-futura-bold justify-center items-center gap-[30px] bg-black">
      <CloudinaryImage
        publicId="Hero_tcg8tg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-[0.9]"
        width={1000}
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
      <div className="flex flex-row gap-4">
        <div className="flex flex-col items-center p-4 bg-white hover:bg-app-green hover:text-app-white transition-colors ease-in-out text-app-green font-futura-extrabold text-xl">
          main website
        </div>
        <div className="flex flex-col items-center p-4 bg-white hover:bg-app-green hover:text-app-white transition-colors ease-in-out text-app-green font-futura-extrabold text-xl">
          back to top
        </div>
      </div>

      {/* credits */}
      <div className="text-center text-white">
        <div className='font-futura-bold'>
          Website by: &nbsp;
          <span className='font-futura-extrabold'>
            Ramon Enrico Martinez, Johan Marlo Cabili, Sean Alvin Cua, and Linus Carl Perdon
          </span>
        </div>
        {/* vis credits  */}
        <div className='font-futura-bold'>
          Visuals by: &nbsp;
          <span className='font-futura-extrabold'>
            Ramon Enrico Martinez, Kim Balasabas, and Zoila Cagampan
          </span>
        </div>

      </div>
      {/* web credits */}



    </section>
  )
}

export default Footer