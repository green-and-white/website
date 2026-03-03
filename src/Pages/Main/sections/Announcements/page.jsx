import EmblaCarousel from './EmblaCarousel'

import styles from '../../home.module.css'
import miguelBackground from "@/assets/home_page/miguel.webp";
import yearbookClaiming from '@/assets/announcements/yearbook_claiming.jpg'
import links from '@/assets/announcements/links.jpg'
import primer from '@/assets/announcements/reg_primer2.avif'

import { useBrowserDetection } from '@/hooks/useBrowserDetection';

import './embla.css'

const OPTIONS = { loop: true }

const SLIDES = [
    {
        title: "Yearbook Claiming",
        desc: `Calling Green & White subscribers from 2015, 2016, 2017, and 2020! Last call to claim your yearbooks this October to December! On-campus pick-up, local courier, and LBC delivery options available. See the guidelines here: bit.ly/gwyearbookclaiming`,
        img: yearbookClaiming,
        url: "https://bit.ly/gwyearbookclaiming",
        buttonText: "See Guidelines",
    },
    {
        title: "G&W Links",
        desc: `Please be directed to the following platforms for official announcements and links related to all yearbook activities through the years. For activities and information regarding the previous yearbooks, kindly visit our linktree for easy reference: greenandwhite.com.ph/links`,
        img: links,
        url: "https://greenandwhite.com.ph/links",
        buttonText: "Visit Linktree",
    },
    {
        title: "Registration Primer",
        desc: `Join us and remember this chapter before it ends.
                Check out Green & White’s registration primer and subscribe to the Yearbook of 2026 on March 11 to 28 and April 8 to 13!`,
        img: primer,
        url: "https://drive.google.com/file/d/1V-f_XySz_YEAo9Ig35fdsFbGoyormsvh/view",
        buttonText: "View Registration Primer",
    },
]


export default function Announcements() {
    const { isSafari } = useBrowserDetection();
  return (
   <>
        {/* Audihall Section */}
        <section className={`${styles.henry} min-h-screen flex flex-col items-center justify-center gap-12`} 
                style={{ backgroundImage: `url(${miguelBackground})`,
                                 backgroundAttachment: isSafari ? 'scroll' : 'fixed'}}
                id='announcements'>
            <h1 className={`${styles.heading} text-white text-4xl`}>Announcements</h1>
            <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
        </section>
        
   </>
  )
}
