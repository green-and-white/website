import React from 'react'
import styles from '../../home.module.css'
import Countdown from 'react-countdown'

import skyBackground from "@/assets/home_page/sky.webp";

export default function Countdownpage() {
    const targetTime = new Date('2025-11-05T00:00:00');
    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
        <div className="text-center">
            <div className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl font-bold gap-4 sm:gap-6 text-white">
            <div className="flex flex-col items-center">
                <span className="font-helvetica font-bold">{days}</span>
                <span className="helvetica text-xs sm:text-sm mt-1">Days</span>
            </div>
            <div className="flex flex-col items-center mx-1 sm:mx-2">
                <span className="font-helvetica font-bold">:</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="font-helvetica font-bold">{hours}</span>
                <span className="helvetica text-xs sm:text-sm mt-1">Hours</span>
            </div>
            <div className="flex flex-col items-center mx-1 sm:mx-2">
                <span className="font-helvetica font-bold">:</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="font-helvetica font-bold">{minutes}</span>
                <span className="helvetica text-xs sm:text-sm mt-1">Minutes</span>
            </div>
            <div className="flex flex-col items-center mx-1 sm:mx-2">
                <span className="font-helvetica font-bold">:</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="font-helvetica font-bold">{seconds}</span>
                <span className="helvetica text-xs sm:text-sm mt-1">Seconds</span>
            </div>
            </div>
        </div>
        );
    };
  
  return (
    <>
        {/*Sky Section*/}
        <section className={styles.henry} style={{ backgroundImage: `url(${skyBackground})` }}
            id='countdown'>
            
            <div className="flex flex-col gap-10 justify-center mt-12 sm:mt-20 md:mt-28 px-4">
                <h1 className={`font-extrabold text-[#D9B350] font-libre-caslon flex justify-center mt-8 sm:mt-12 md:mt-16 text-3xl sm:text-4xl md:text-5xl px-4 text-center`} 
                    style={{ textShadow: '0px 2px 1px rgba(0, 0, 0, 0.5)' }}>
                    Ready to be part of the yearbook?
                </h1>
                <Countdown date={targetTime} renderer={renderer}/>
            </div>
            
            <div className="text-white font-libre-caslon font-bold flex justify-center mt-4 sm:mt-6 mb-12 sm:mb-16 md:mb-24 text-base sm:text-lg md:text-xl px-4 text-center">
                See you there!
            </div>
           
            <div className='mt-8 sm:mt-12 px-4 max-w-4xl mx-auto'>
              <div className='grid grid-cols-2 gap-2 sm:gap-x-12 sm:gap-y-2'>
                {/* Row 1 */}
                <div className='text-white font-helvetica font-light text-center sm:text-right text-sm sm:text-lg'>
                  November 5 to 8
                </div>
                <div className='text-white font-helvetica font-light text-center sm:text-left text-sm sm:text-lg '>
                  6F Henry Sy Sr. Hall
                </div>
                
                {/* Row 2 */}
                <div className='text-white font-helvetica font-light text-center sm:text-right text-sm sm:text-lg'>
                  November 10 to 15
                </div>
                <div className='text-white font-helvetica font-light text-center sm:text-left text-sm sm:text-lg'>
                  Br. Andrew Gonzalez Hall Lobby
                </div>
                
                {/* Row 3 */}
                <div className='text-white font-helvetica font-light text-center sm:text-right text-sm sm:text-lg'>
                  November 17 to 19
                </div>
                <div className='text-white font-helvetica font-light text-center sm:text-left text-sm sm:text-lg'>
                  6F Henry Sy Sr. Hall
                </div>
              </div>
            </div>
            
        </section>
    </>
  )
}

