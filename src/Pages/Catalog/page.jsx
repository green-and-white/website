import React, { useState } from 'react'
import RealisticWater from './RealisticWater'
import pubs from "../../assets/catalog/pubs.webp"
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { redirect } from 'react-router-dom'

// Import all catalog images dynamically
const catalogImages = import.meta.glob('../../assets/catalog/*.avif', { eager: true });

// Facebook post URLs mapped by pub number
const pubLinks = {
  1: "https://fb.com/gwyearbookdlsu/posts/1335933848323397",
  2: "https://fb.com/gwyearbookdlsu/posts/1405786991338082",
  3: "https://fb.com/gwyearbookdlsu/posts/1377637320819716",
  4: "https://fb.com/gwyearbookdlsu/posts/1364805358769579",
  5: "https://fb.com/gwyearbookdlsu/posts/1347074927209289",
  6: "https://fb.com/gwyearbookdlsu/posts/1375280967722018",
  7: "https://fb.com/gwyearbookdlsu/posts/1376786110904837",
  8: "https://fb.com/gwyearbookdlsu/posts/1345116050738510",
  9: "https://fb.com/gwyearbookdlsu/posts/1366674618582653",
  10: "https://fb.com/gwyearbookdlsu/posts/1371142848135830",
  12: "https://fb.com/gwyearbookdlsu/posts/1343313314252117",
  13: "https://fb.com/gwyearbookdlsu/posts/1355712633012185",
  14: "https://fb.com/gwyearbookdlsu/posts/1356595966257185",
  15: "https://fb.com/gwyearbookdlsu/posts/1357528499497265",
  16: "https://fb.com/gwyearbookdlsu/posts/1378472687402846",
  17: "https://fb.com/gwyearbookdlsu/posts/368932981690150",
  18: "https://fb.com/gwyearbookdlsu/posts/1351496216767160",
  19: "https://fb.com/gwyearbookdlsu/posts/1376971294219652",
  20: "https://fb.com/gwyearbookdlsu/posts/1377699417480173",
  21: "https://fb.com/gwyearbookdlsu/posts/1378154200768028",
  22: "https://fb.com/gwyearbookdlsu/posts/1424443542805760",
  23: "https://fb.com/gwyearbookdlsu/posts/1424443509472430"
};

// Create pubsData array from imported images, sorted numerically
const pubsData = Object.keys(catalogImages)
  .filter(path => /\/\d+\.avif$/.test(path)) // Only include numbered files (1.avif, 2.avif, etc.)
  .sort((a, b) => {
    const numA = parseInt(a.match(/\/(\d+)\.avif$/)[1]);
    const numB = parseInt(b.match(/\/(\d+)\.avif$/)[1]);
    return numA - numB;
  })
  .map(path => {
    const pubNumber = parseInt(path.match(/\/(\d+)\.avif$/)[1]);
    return {
      image: catalogImages[path].default,
      link: pubLinks[pubNumber] || null
    };
  });

export default function page() {
  const [selectedPub, setSelectedPub] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [footerProgress, setFooterProgress] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;
      
      // Header fade transition - trigger at 200vh
      const progress = Math.min(scrollPosition / (windowHeight * 2), 1);
      setScrollProgress(progress);
      
      // Footer sink transition - only when near the end
      // Start at 80% of total scroll, complete at end
      const footerTrigger = scrollableHeight * 0.8;
      const footerRange = scrollableHeight - footerTrigger;
      const footerProg = footerRange > 0 ? Math.max(0, Math.min((scrollPosition - footerTrigger) / footerRange, 1)) : 0;
      setFooterProgress(footerProg);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openPubDialog = (index) => {
    setSelectedPub(index);
  };

  const closePubDialog = () => {
    setSelectedPub(null);
  };

  const navigatePub = (direction) => {
    if (selectedPub === null) return;
    
    if (direction === 'next') {
      setSelectedPub((prev) => (prev + 1) % pubsData.length);
    } else {
      setSelectedPub((prev) => (prev - 1 + pubsData.length) % pubsData.length);
    }
  };

  return (
    <div className="relative">
        {/* Scroll anchor for header */}
        <div id="hero" className="absolute top-0"></div>
        
        {/* Water Background - Behind everything */}
        <div className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url(${pubs})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            pointerEvents: 'none'
          }}>
          
        </div>

        <Navbar />
        
        {/* Header Section - Fixed, fades out */}
        <div 
          className="fixed inset-0 z-10 transition-opacity duration-300"
          style={{ 
            opacity: scrollProgress < 0.3 ? 1 : scrollProgress < 0.5 ? 1 - ((scrollProgress - 0.3) / 0.2) : 0,
            pointerEvents: scrollProgress > 0.4 ? 'none' : 'auto'
          }}
        >
          <Header />
        </div>

        {/* Spacer for scroll */}
        <div className="h-[200vh]">
        </div>

        {/* Subtext section - visible during scroll, before transition */}
        <div 
          className="fixed inset-0 z-10 w-full flex items-center justify-center"
          style={{
            opacity: scrollProgress >= 0.4 && scrollProgress < 0.8 ? 1 : 0,
            transition: 'opacity 0.5s ease',
            pointerEvents: 'none'
          }}
        >
          <div className='w-full max-w-[950px] px-6 sm:px-8 md:px-12'>
            <p 
              className="text-white text-center font-helvetica font-light text-base md:text-xl lg:text-2xl leading-relaxed drop-shadow-xl text-shadow-lg"
              style={{
                WebkitTextStrokeColor: '#000',
                WebkitTextStrokeWidth: '1.5px',
                paintOrder: 'stroke fill'
              }}
            >
              Memories of wandering empty halls resurface in moments of solitude, where absence is nothing but a reminder of the space you once echoed with life. 
              The alma mater that witnessed your every becoming has transformed into a home, shaped by the memories you made between its halls.
            </p>
          </div>
        </div>

       

        {/* Regular scrollable catalog section */}
        <section 
          className="relative md:min-h-screen w-full transition-all duration-700"
          style={{
            opacity: scrollProgress >= 0.8 ? Math.min((scrollProgress - 0.8) / 0.1, 1) : 0,
            pointerEvents: scrollProgress >= 0.85 ? 'auto' : 'none'
          }}
        >
          <div className="relative z-10 container mx-auto py-12 md:py-16 px-4">
            <motion.h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-8 md:mb-10 font-libre-caslon" 
                      style={{ pointerEvents: 'none' }}>

            </motion.h2>
            
            <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-12 gap-y-6 max-w-[900px] mx-auto">
              {pubsData.map((pub, i) => (
                <div 
                  key={pub.id} 
                  className="w-[250px] h-[325px] bg-white lg:opacity-70 hover:opacity-100 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                  style={{ 
                    pointerEvents: 'auto',
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.7))'
                  }}
                  onClick={() => openPubDialog(i)}
                >
                  <img 
                    src={pub.image} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <div className="relative z-20">
          <Footer />
        </div>

        {/* Pub Dialog Modal */}
        <AnimatePresence>
          {selectedPub !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              onClick={closePubDialog}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-[75vw] h-[60vh] md:w-[70vw] md:max-w-3xl md:h-[70vh]"
                onClick={(e) => e.stopPropagation()}
              >
                

                {/* Navigation Buttons */}
                <button
                  onClick={() => navigatePub('prev')}
                  className="absolute left-1/4 -translate-x-1/2 -bottom-8 md:-left-6 lg:left-12 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:bottom-auto z-10 w-12 h-12 bg-white text-black rounded-full hover:bg-gray-700 transition-colors flex items-center justify-center"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => navigatePub('next')}
                  className="absolute right-1/4 translate-x-1/2 -bottom-8 md:-right-6 lg:right-12 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:bottom-auto z-10 w-12 h-12 bg-white text-black rounded-full hover:bg-gray-700 transition-colors flex items-center justify-center"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Pub Content */}
                <div className="h-full flex items-center justify-center">
                  {pubsData[selectedPub].link ? (
                    <a 
                      href={pubsData[selectedPub].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-3/4 md:h-5/6 cursor-pointer"
                    >
                      <img 
                        src={pubsData[selectedPub].image} 
                        alt={pubsData[selectedPub].title}
                        className="w-full h-full object-fit hover:opacity-90 transition-opacity"
                      />
                    </a>
                  ) : (
                    <img 
                      src={pubsData[selectedPub].image} 
                      alt={pubsData[selectedPub].title}
                      className="w-full h-full object-contain"
                    />
                    
                  )}
                  {/* Counter */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 px-4 py-2 bg-white/90 text-black rounded-full text-sm font-medium">
                  {selectedPub + 1} of {pubsData.length}
                </div>
                
                  {/* Close Button */}
                <button
                  onClick={closePubDialog}
                  className="absolute top-0 right-0 z-20 w-10 h-10 bg-white text-black rounded-full hover:bg-gray-700 transition-colors flex items-center justify-center"
                >
                  <X size={20} />
                </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  )
}
