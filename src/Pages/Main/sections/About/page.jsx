import React from 'react'
import styles from '../../home.module.css'
import cardboardBackground from "@/assets/home_page/cardboard_bg.png";
import whiteVertical from "@/assets/logos_updated/white-vertical.svg";

export default function About() {
  return (
    <>
        {/* Cardboard Section */}
        <section className={styles.cardboard} style={{ backgroundImage: `url(${cardboardBackground})` }}>
            <img src={whiteVertical} alt="whiteVertical" className={styles.whiteVertical} />
            <div className={`${styles.description} text-white`}>
            <strong>Green & White</strong> is the official yearbook publication of De La Salle University.
            Celebrating its 101st year, the publication lives as the record-keeper of Lasallian memories.
            From portraits to pages, <strong>Green & White</strong> brings the Lasallian community together
            and etches their place in time through the yearbook.
            </div>
        </section>
    </>
   
  )
}
