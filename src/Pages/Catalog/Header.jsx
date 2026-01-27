import HeaderBg from '@/assets/catalog/Header.webp'
import styles from './home.module.css'
import { motion } from "framer-motion"

const glassStyle = {
  color: 'white',
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '16px',
//   border: '0.5px solid rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  zIndex: 10
}; 

// Retrieved from main css module
const fontStyle = {
  textShadow: `
    0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.5),
    0px 4px 20px #000000
  `
};

export default function Header() {
    return (
        <section id="header" className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12"
            style={{
                backgroundImage: `url(${HeaderBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
        <motion.h1 className={`mb-15 z-20 font-extrabold ${styles.CTA} text-[#EEDB49] font-libre-caslon text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 text-center`}>
            Keep your memories alive.
        </motion.h1>
        <div style={glassStyle} className="py-8 px-6 md:px-18 max-w-5xl text-center mx-4 sm:mx-6 md:mx-auto flex flex-col gap-4">
            <p style={fontStyle} className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center"><b>Green & White</b> is the official yearbook publication of De La Salle University.</p>
            <p style={fontStyle} className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center mt-2">
                Celebrating its 101st year, the publication lives on as the record-keeper of Lasallian memories. 
                From portraits to pages, <b>Green & White</b> brings the Lasallian community together and etches
                their place in time through the yearbook.
            </p>
        </div>
        </section>
    )
}