import EmblaCarousel from './EmblaCarousel'

import styles from '../../home.module.css'
import miguelBackground from "@/assets/home_page/miguel.webp";
import yearbookClaiming from '@/assets/announcements/yearbook_claiming.jpg'
import links from '@/assets/announcements/links.jpg'

import './embla.css'

const OPTIONS = { loop: true }

const SLIDES = [
    {
        title: "Yearbook Claiming",
        desc: "Calling Green & White subscribers from 2015, 2016, 2017, and 2020! Last call to claim your yearbooks this October to December! On-campus pick-up, local courier, and LBC delivery options available. See the guidelines here: bit.ly/gwyearbookclaiming",
        img: yearbookClaiming,
        url: "https://bit.ly/gwyearbookclaiming",
        buttonText: "See Guidelines"
    },
    {
        title: "Links",
        desc: "Please be directed to the following platforms for official announcements and links related to all yearbook activities through the years. For activities and information regarding the previous yearbooks, kindly visit our linktree for easy reference: greenandwhite.com.ph/links",
        img: links,
        url: "https://greenandwhite.com.ph/links",
        buttonText: "Visit Linktree"
    }
]


export default function Announcements() {
  return (
   <>
        {/* Audihall Section */}
        <section className={`${styles.henry} min-h-screen flex flex-col items-center justify-center gap-12`} 
                style={{ backgroundImage: `url(${miguelBackground})`}}
                id='announcements'>
            <h1 className={`${styles.heading} text-white text-4xl`}>Announcements</h1>
            <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
        </section>
        
   </>
  )
}
