import HeaderBg from '@/assets/catalog/Header.webp'
import styles from './catalog.module.css'
import horizontalLogo from '@/assets/icons/white-horizontal.svg'
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
        <>
            <motion.section ref={sectionRef}
                id="header" 
                className="relative w-full min-h-[100vh] overflow-y-scroll flex flex-col justify-beginning items-center"
                style={{ opacity }}
            >
                {/* White rectangle at bottom of screen */}
                <div className="absolute top-0 left-0 right-0 w-full h-24 bg-white/40 flex items-center justify-center">
                </div>
                <div className='w-full max-w-[1280px] min-h-[100vh] flex flex-col items-start justify-center px-6 sm:px-8 md:px-12'>
                    {/* logo */}
                    <motion.img 
                        src={horizontalLogo} 
                        alt="Yearbook 2026" 
                        className="h-12 sm:h-14 md:h-16 mb-4 sm:mb-6 md:mb-8"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className={`mb-6 sm:mb-8 md:mb-10 z-20 max-w-3xl text-left text-white font-helvetica font-light text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed`}
                        style={{
                            WebkitTextStrokeColor: '#000',
                            WebkitTextStrokeWidth: '1.5px',
                            paintOrder: 'stroke fill'
                        }}
                    >
                    This catalog showcases works inspired by the design of Yearbook 2026. It reflects the places and hallmarks of student life that were ever-familiar sights during your time in the University. 
                    </motion.div>
                    <img
                        src={HeaderBg}
                        alt="Header Background"
                        className="absolute inset-0 -z-10 w-full h-full object-cover"
                    />
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`z-20 font-extrabold text-[#EEDB49] font-libre-caslon mb-6 sm:mb-8 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl`}
                        style={{
                            WebkitTextStrokeColor: '#000',
                            WebkitTextStrokeWidth: '2px',
                            paintOrder: 'stroke fill'
                    }}
                    >
                        VISUAL CATALOG
                    </motion.h1>
                </div>
                
        </motion.section>
        </>
       
        
    )
}