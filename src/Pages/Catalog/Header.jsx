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
            className={`mb-15 z-20 font-extrabold ${styles.CTA} text-[#EEDB49] font-libre-caslon mb-8 text-center`}
        >
            Layout Catalog
        </motion.h1>
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className={`${styles.glassCard} py-8 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 rounded-lg max-w-4xl text-white bg-white bg-opacity-20 backdrop-blur-md shadow-lg`}
        >
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center mt-2">
                The catalog is a reflection of works that reflect the design of Yearbook 2026. It mirrors the places that were an ever-familiar sight of your time in the university. Each decision is an accumulation that lets you arrive in the now.
            </p>
        </motion.div>
        </motion.section>
    )
}