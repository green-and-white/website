import React from 'react'
import Link from "@/components/Link.jsx"

import logo from "@/assets/logos_updated/black-vertical.svg"
import facebook from "@/assets/icons/facebook-black.svg"
import instagram from "@/assets/icons/instagram-black.svg"
import telegram from "@/assets/icons/telegram.svg"
import tiktok from "@/assets/icons/tiktok.svg"
import globe from "@/assets/icons/globe.svg"


export default function Links() {
return (
    <section className='grid justify-center items-center text-black p-8'>
            <div className = " flex flex-col gap-5 max-w-[400px]">
                    <div className="logo-container w-full  flex flex-col gap-3 items-center max-w-[225px] mx-auto">
                            <img src={logo} alt="Logo" className="logo mx-auto w-[147px]"/>
                            <p className = "text-center font-jost-regular">The official yearbook publication of De La Salle University</p>
                    </div>
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
                    <hr className = "h-[1px] bg-[#E5E7EB] border-none"/>
                    <section className = "flex flex-col gap-4">
                            <div className = "font-jost-medium text-center text-xl leading-[16px]">Green & White 2026</div>
                            <Link title={"Pre-registration"}
                                    desc={"Green & White 2026"}
                                    url={"https://greenandwhite.com.ph"}></Link>
                    </section>
                    <hr className = "h-[1px] bg-[#E5E7EB] border-none" />
                    <section className = "flex flex-col gap-4">
                            <div className="font-jost-medium text-center text-xl leading-[16px]"> Previous Years</div>
                            <div className='flex flex-col gap-2'>
                                <Link title={"Yearbook Distribution"}
                                                desc={"Green & White Unclaimed Yearbooks"}
                                                url={"https://web.facebook.com/share/p/1JrLJRuq95/ "}></Link>
                                <Link title={"Delivery Address Collection"}
                                                desc={"Green & White 2018 and 2019"}
                                                url={"https://web.facebook.com/share/p/19wcLTYSEB/ "}></Link>
                                <Link title={"Yearbook Finder"}
                                                desc={"Green & White"}
                                                url={"https://bit.ly/GW-YearbookFinder"}></Link>
                            </div>
                            
                    </section>
                    <hr className = "h-[1px] bg-[#E5E7EB] border-none"/>
                    <section>
                            <div className='font-jost-medium text-xl'> Have a different concern?</div>
                            <div className="font-jost-regular">
                                    You may contact our Customer Care team through our Facebook inbox at 
                                    <a href="https://fb.com/gwyearbookdlsu" target="_blank" rel="noopener noreferrer"> fb.com/gwyearbookdlsu</a>. 
                                    Alternatively, you may reach out through our email at 
                                    <a href="mailto:gw@dlsu.edu.ph"> gw@dlsu.edu.ph</a>.
                            </div>
                    </section>
            </div>
    </section>
)
}
