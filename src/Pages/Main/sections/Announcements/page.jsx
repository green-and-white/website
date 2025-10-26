import EmblaCarousel from './EmblaCarousel'

import styles from '../../home.module.css'
import audiHallBackground from "@/assets/home_page/audi_hall.jpg";
import yearbookClaiming from '@/assets/yearbook_claiming.jpg'

import './embla.css'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5


const SLIDES = [
    {
        title: "Yearbook Claiming",
        desc: "Calling Green & White subscribers from 2015, 2016, 2017, and 2020! Last call to claim your yearbooks this October to December! On-campus pick-up, local courier, and LBC delivery options available. See the guidelines here: bit.ly/gwyearbookclaiming",
        img: yearbookClaiming
    },
    {
        title: "Yearbook Claiming2",
        desc: "Calling Green & White subscribers from 2015, 2016, 2017, and 2020! Last call to claim your yearbooks this October to December! On-campus pick-up, local courier, and LBC delivery options available. See the guidelines here: bit.ly/gwyearbookclaiming",
        img: yearbookClaiming
    }
]


export default function Announcements() {
  return (
   <>
        {/* Audihall Section */}
        <section className={`${styles.audihall} flex flex-col items-center justify-center gap-12`} 
                style={{ backgroundImage: `url(${audiHallBackground})` }}>
            <h1 className={`${styles.heading} text-white text-4xl`}>Announcements</h1>
            <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
        </section>
        
   </>
  )
}
