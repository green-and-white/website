import HeaderBg from '@/assets/catalog/Header.webp'
import styles from '../Main/home.module.css'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from 'react'

export default function Header() {
    const sectionRef = useRef(null)
    
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    })
    
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
    const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.3, 0])
    
    return (
        <motion.section 
            ref={sectionRef}
            id="header" 
            className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 overflow-hidden"
            style={{ opacity }}
        >
            <motion.div
                className="absolute inset-0 -z-10"
                style={{
                    backgroundImage: `url(${HeaderBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    scale
                }}
            />
        <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`mb-15 z-20 font-extrabold ${styles.CTA} text-[#EEDB49] font-libre-caslon text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 text-center`}
        >
            Keep your memories alive.
        </motion.h1>
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className={`${styles.glassCard} py-8 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 rounded-lg max-w-4xl text-white bg-white bg-opacity-20 backdrop-blur-md shadow-lg`}
        >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center"><b>Green & White</b> is the official yearbook publication of De La Salle University.</p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center mt-2">
                Celebrating its 101st year, the publication lives on as the record-keeper of Lasallian memories. 
                From portraits to pages, <b>Green & White</b> brings the Lasallian community together and etches
                their place in time through the yearbook.
            </p>
        </motion.div>
        </motion.section>
    )
}