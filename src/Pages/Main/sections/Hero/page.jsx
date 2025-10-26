import React from 'react'

import styles from '../../home.module.css'

import henryBackground from "@/assets/home_page/henry.webp";

import whiteHorizontal from "@/assets/logos_updated/white-horizontal.svg";

import chairSticker from '@/assets/stickers/chair.webp';
import yearbookSticker from '@/assets/stickers/YEARBOOK_2026.webp';
import catSticker from '@/assets/stickers/cat2.webp'
import bookletSticker from "@/assets/stickers/booklet.webp"


// <main className='relative min-h-screen'
//     style={{
//       backgroundImage: `url(${henryBackground})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
// }}> 

export default function Hero() {
  return (
    <>
      {/* 
        This section holds the fixed background. The two divs inside act as 
        scrollable pages. 
      */}
      <section
        className={`${styles.henry} relative`}
        style={{ backgroundImage: `url(${henryBackground})` }}
      >
        {/* Page 1: Hero Content */}
        <div className="h-screen relative flex flex-col items-center justify-center text-white">
          {/* GW Logo */}
          <img
            src={whiteHorizontal}
            alt="Green & White Logo"
            className="absolute top-0 h-14 sm:h-16"
          />
        <div className={`${styles.homeStickers}`}>
            <img className={`${styles.cat} hidden sm:block`} 
                 src={catSticker} 
                 alt="Cat Sticker" />
            <img
              className={`${styles.chair} hidden sm:block`}
              src={chairSticker}
              alt="Chair Sticker"
            />
            <img
              className={styles.yearbook2026}
              src={yearbookSticker}
              alt="Yearbook 2026 Sticker"
            />
            <img
              className={`${styles.booklet} hidden sm:block`}
              src={bookletSticker}
              alt="Booklet Sticker"
            />
          </div>
          {/* CTA Content */}
          <div className="max-w-[700px] h-full flex flex-col justify-end gap-10 text-center pb-28 sm:pb-36">
            <h1 className={`font-extrabold ${styles.CTA} text-[#EEDB49] font-libre-caslon`}>
              Keep your memories alive.
            </h1>
            <div className={`flex flex-col sm:flex-row justify-center gap-2.5 ${styles.glass}`}>
              <a
                className="pointer-events-auto z-50"
                href="https://forms.gle/xNBJWFrup67DRsjP8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`${styles.glassCard} cursor-pointer transition transform duration-200 ease-in-out hover:scale-105 hover:bg-white/20 border border-white/50`}
                >
                  Pre-register now
                </div>
              </a>
              <a
                className="pointer-events-auto z-50"
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`${styles.glassCard} cursor-pointer transition transform duration-200 ease-in-out hover:scale-105 hover:bg-white/20 border border-white/50`}
                >
                  View 2026 primer
                </div>
              </a>
            </div>
          </div>

          {/* Stickers */}
          
        </div>

        {/* Page 2: More Information */}
        <div className="h-screen relative flex flex-col items-center justify-center text-white">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">This is Page 2</h2>
            <p>You can add more scrollable content here.</p>
          </div>
        </div>
      </section>
    </>
  );
}
