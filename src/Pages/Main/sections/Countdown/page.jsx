import React from 'react'
import styles from '../../home.module.css'
import Countdown from 'react-countdown'

import skyBackground from "@/assets/home_page/sky.webp";

export default function Countdownpage() {
    const targetTime = new Date('2025-11-05T00:00:00');
    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
        <div className="font-libre-caslon text-center">
            <div className="flex justify-center items-center text-3xl font-bold gap-12 text-white">
            <div className="flex flex-col items-center">
                <span>{days}</span>
                <span className="text-sm mt-1">Days</span>
            </div>
            <div className="flex flex-col items-center mx-2">
                <span>:</span>
            </div>
            <div className="flex flex-col items-center">
                <span>{hours}</span>
                <span className="text-sm mt-1">Hours</span>
            </div>
            <div className="flex flex-col items-center mx-2">
                <span>:</span>
            </div>
            <div className="flex flex-col items-center">
                <span>{minutes}</span>
                <span className="text-sm mt-1">Minutes</span>
            </div>
            <div className="flex flex-col items-center mx-2">
                <span>:</span>
            </div>
            <div className="flex flex-col items-center">
                <span>{seconds}</span>
                <span className="text-sm mt-1">Seconds</span>
            </div>
            </div>
        </div>
        );
    };
  
  return (
    <>
        {/*Sky Section*/}
        <section className={styles.sky} style={{ backgroundImage: `url(${skyBackground})` }}>
            <h1 className={`font-extrabold text-[#D9B350] font-libre-caslon flex justify-center mt-16 text-5xl`} style={{ zIndex: 500 }}>
            Ready to be part of the yearbook?
            </h1>
            <div className="flex justify-center mt-28">
            <Countdown date={targetTime} renderer={renderer}/>
            </div>
            <div className="text-white font-libre-caslon flex justify-center mt-6 mb-24 text-xl">
            Until registration proper begins!
            </div>
            <div className="text-white font-libre-caslon flex justify-center text-2xl">
            Calling all students with 4 terms or less to pre-register and register!
            </div>
            <div className={`mt-3 flex justify-center gap-8 ${styles.glass}`}>
                <a
                    className="pointer-events-auto z-50"
                    href="https://forms.gle/xNBJWFrup67DRsjP8"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <div className={`${styles.glassCard} cursor-pointer transition transform duration-200 ease-in-out hover:scale-105 hover:bg-white/20 border border-white/50`}>
                    Pre-register now
                </div>
                </a>
                <a
                    className="pointer-events-auto z-50"
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <div className={`${styles.glassCard} cursor-pointer transition transform duration-200 ease-in-out hover:scale-105 hover:bg-white/20 border border-white/50`}>
                    View the registration primer
                </div>
                </a>
            </div>
        </section>
    </>
  )
}
