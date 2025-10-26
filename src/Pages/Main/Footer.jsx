import React from 'react'

import blackVertical from '@/assets/logos_updated/black-vertical.svg';
import yb2026 from '@/assets/stickers/YEARBOOK_2026.webp';

import facebook from "@/assets/icons/facebook-black.svg"
import instagram from "@/assets/icons/instagram-black.svg"
import telegram from "@/assets/icons/telegram.svg"
import tiktok from "@/assets/icons/tiktok.svg"
import globe from "@/assets/icons/globe.svg"

export default function Footer() {
  return (
    <div className="flex flex-col items-center px-[10px] py-[30px] justify-center gap-[30px] bg-white font-helvetica">
        <div className="flex gap-2">
            {/* logo + sticker */}
            <img src={blackVertical} alt="Black Vertical Logo" className="h-[84px]" />
            <img src={yb2026} alt="Yearbook 2026 Sticker" className="h-[84px]" />
        </div>
        {/* Credits */}
        <div>
            Website by Johan Marlo Cabili, Danielle Ang, Ramon Enciro Martinez, Alvin Sean Cua, and Jabin Guamos
            <br/>
            Visuals by Kiolo Marzan, Gabriel Gil Ang, Amber Laca, Zoila Caga, Angela Faith Dizon, and Maggy de Guzman
        </div>
        <div>
           
        </div>
        {/* Socials */}
        <div>
             <div className=" mx-auto flex flex-row w-full justify-center gap-1.5 ">
                                                <a href="https://greenandwhite.com.ph" target="_blank" rel="noopener noreferrer">
                                                        <img src={globe} alt="Website" className="h-5 w-5 p-[1px]"/>
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
                                                        <img src={tiktok} alt="TikTok" className=" h-5 w-5 p-[1px] rounded-2xl"/>
                                                </a>
                </div>
        </div>
    </div>
  )
}
