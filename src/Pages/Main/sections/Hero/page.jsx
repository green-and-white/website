import React from 'react'

import styles from '../../home.module.css'

import henryBackground from "@/assets/home_page/henryc.webp";

import whiteHorizontal from "@/assets/logos_updated/white-horizontal.svg";
import whiteVertical from "@/assets/logos_updated/white-vertical.svg";

import chairSticker from '@/assets/stickers/chair.webp';
import yearbookSticker from '@/assets/stickers/YEARBOOK_2026.webp';
import catSticker from '@/assets/stickers/cat2.webp'
import bookletSticker from "@/assets/stickers/booklet.webp"

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';


// <main className='relative min-h-screen'
//     style={{
//       backgroundImage: `url(${henryBackground})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
// }}> 


export default function Hero() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({ 
        target: container, 
        offset: ['start end', 'end start']
    });
    const sm = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <>
      {/* 
        This section holds the fixed background. The two divs inside act as 
        scrollable pages. 
      */}
      <section
        className={`${styles.henry}`}
        style={{ backgroundImage: `url(${henryBackground})`, 
                    backgroundSize: "cover" }}
        ref={container}
        id='hero'
      >
        {/* Page 1: Hero Content */}
        <div className="h-screen relative flex flex-col items-center justify-center text-white">
          {/* GW Logo */}
          <motion.img
            src={whiteHorizontal}
            alt="Green & White Logo"
            className="absolute top-8 h-14 sm:h-16"
            style={{y:sm}}
          />
        <motion.div className={`${styles.homeStickers}`}
                    style={{y:lg}}>
            <img className={`${styles.cat} hidden sm:block`} 
                 src={catSticker} 
                 alt="Cat Sticker" 
                 style={{top:md}}/>
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
          </motion.div>
          {/* CTA Content */}
          <div className="max-w-[700px] h-full flex flex-col justify-end gap-8 text-center pb-28 sm:pb-20">
            <motion.h1 className={`font-extrabold ${styles.CTA} text-[#EEDB49] font-libre-caslon`}
                        style={{y:md}}>
              Keep your memories alive.
            </motion.h1>
            <motion.div className={`flex flex-col sm:flex-row justify-center gap-2.5 ${styles.glass}`}
                        style={{y:sm}}>
              <a
                className="pointer-events-auto z-50"
                href="https://forms.gle/xNBJWFrup67DRsjP8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`${styles.glassCard} px-4 py-3 cursor-pointer transition transform duration-200 ease-in-out hover:scale-105 hover:bg-white/20 border border-white/50`}
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
                  className={`${styles.glassCard} px-4 py-3 cursor-pointer transition transform duration-200 ease-in-out hover:scale-105 hover:bg-white/20 border border-white/50`}
                >
                  View 2026 primer
                </div>
              </a>
            </motion.div>
          </div>

          
        </div>

        {/* Page 2: More Information */}
        <motion.div className="pt-40 relative flex flex-col items-center justify-center text-white"
                        style={{y:lg}}>
          <div className={`flex flex-col max-w-[650px] gap-12 justify-center items-center ${styles.glassCard} p-4 py-8 sm:p-8`}>
                <img
                    src={whiteVertical}
                    alt="Green & White Logo"
                    className="h-48"
                />
            <p className = "font-helvetica text-center text-sm sm:test-base lg:text-lg">
                    <strong>Green & White </strong>is the official yearbook publication of 
                    <br className='hidden md:block'/> De La Salle University.
                    <br></br><br />
                    Celebrating its 101st year, the publication lives as the record-keeper of Lasallian 
                    memories. From portraits to pages, Green & White brings the Lasallian community together 
                    and etches their place in time through the yearbook.
            </p>
            </div>
          </motion.div>
         
      </section>
    </>
  );
}
