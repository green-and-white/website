import React from 'react'
import styles from '../../home.module.css'
import audiHallBackground from "@/assets/home_page/audi_hall.jpg";
import yearbookClaiming from '@/assets/yearbook_claiming.jpg'

export default function Announcements() {
  return (
   <>
        {/* Audihall Section */}
        <section className={styles.audihall} style={{ backgroundImage: `url(${audiHallBackground})` }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
            <img
                src={yearbookClaiming}
                alt="Yearbook Claiming"
                className="w-xs shadow-lg m-8"
            />
            <p className="max-w-xl mt-4 text-lg opacity-90">
                See the guidelines here: <a href="https://docs.google.com/document/d/e/2PACX-1vT6Os-uhqgMJFBJaFj7zfLa-PCThoT9Y5qqknTXqmRW6MNnuIa8QLlFU0YXnlRH05wDDkHrr9h4d3jL/pub"><u>bit.ly/gwyearbookclaiming</u></a>
            </p>
            </div>
        </section>
   </>
  )
}
