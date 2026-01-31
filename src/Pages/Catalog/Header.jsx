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
                id="hero" 
                className="relative w-full min-h-[100vh] overflow-y-scroll flex flex-col justify-center items-center"
                style={{ opacity }}
            >
                <div className='w-full max-w-[350px] md:max-w-[600px] lg:max-w-[900px] min-h-[100vh] flex flex-col items-center justify-center gap-4 md:gap-8 px-6 sm:px-8 md:px-12'>
                    {/* logo */}
                    <motion.img 
                        src={horizontalLogo} 
                        alt="Yearbook 2026" 
                        className="h-10 sm:h-14 md:h-16"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={`z-20 w-full font-extrabold text-[#FEC530] font-libre-caslon text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide`}
                        style={{
                            WebkitTextStrokeColor: '#000',
                            WebkitTextStrokeWidth: '1.5px',
                            paintOrder: 'stroke fill'
                    }}
                    >
                        Visual Catalog
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className={`md:block hidden z-20 max-w-3xl text-white font-helvetica font-light text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center leading-relaxed text-shadow-lg`}
                        style={{
                             WebkitTextStrokeColor: '#000',
                            WebkitTextStrokeWidth: '1.5px',
                            paintOrder: 'stroke fill'
                        }}
                    >
                    This catalog showcases works inspired by the design of Yearbook 2026. It reflects the places and hallmarks of student life that were ever-familiar sights during your time in the University. 
                    </motion.div>
                    
                    {/* Mobile version with glass background */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className={`block md:hidden absolute bottom-0 z-20 text-white font-helvetica font-light text-xs text-center leading-relaxed p-4 w-full ${styles.glassCardHero}`}
                    >
                    This catalog showcases works inspired by the design of Yearbook 2026. It reflects the places and hallmarks of student life that were ever-familiar sights during your time in the University. 
                    </motion.div>
                    <motion.div>

                    </motion.div>
                    <img
                        src={HeaderBg}
                        alt="Header Background"
                        className="absolute inset-0 -z-10 w-full h-full object-cover"
                    />
                </div>
                
        </motion.section>
        </>
       
        
    )
}