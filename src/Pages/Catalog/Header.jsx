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
            className={`z-20 font-extrabold ${styles.CTA} text-[#EEDB49] font-libre-caslon mb-8 text-center`}
        >
            Visual Archive
        </motion.h1>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={`mb-10 z-20 max-w-3xl text-center text-white font-helvetica text-sm sm:text-base md:text-lg lg:text-xl `}
        >
              This catalog showcases works inspired by the design of Yearbook 2026. It reflects the places and hallmarks of student life that were ever-familiar sights during your time in the University.
        </motion.div>
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className={`py-8 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 rounded-lg max-w-4xl text-white bg-opacity-20 shadow-lg font-helvetica`}
        >
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center mt-2 backdrop-blur-lg rounded-lg p-8">
               Memories of wandering empty halls resurface in moments of solitude, where absence is nothing but a reminder of the space you once echoed with life.
               The alma mater that witnessed your every becoming has transformed into a home, shaped by the memories you made between its halls.
            </p>
        </motion.div>
        </motion.section>
    )
}