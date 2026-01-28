import React, { useState } from 'react'
import RealisticWater from './RealisticWater'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import image1 from '../../assets/catalog/1.jpg'
import image2 from '../../assets/catalog/2.png'
import image3 from '../../assets/catalog/3.png'
import image4 from '../../assets/catalog/4.png'
import image5 from '../../assets/catalog/5.png'
import image6 from '../../assets/catalog/6.png'
import { motion, useScroll, useTransform } from "framer-motion"

const pubsData = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image5 },
  { image: image6 },
];

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
      
      // Header fade transition (first 2 screens)
      const progress = Math.min(scrollPosition / (windowHeight * 0.8), 1);
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
        {/* Water Background - Behind everything */}
        <div className="fixed inset-0 z-0">
          <RealisticWater />
        </div>

        <Navbar />
        
        {/* Header Section - Fixed, fades out */}
        <div 
          className="fixed inset-0 z-10 transition-opacity duration-300"
          style={{ 
            opacity: 1 - scrollProgress,
            pointerEvents: scrollProgress > 0.5 ? 'none' : 'auto'
          }}
        >
          <Header />
        </div>

        {/* Spacer for scroll */}
        <div className="h-[100vh]"></div>

       

        {/* Regular scrollable catalog section */}
        <section 
          className="relative min-h-screen w-full transition-all duration-700"
          style={{
            opacity: scrollProgress >= 0.85 ? (scrollProgress - 0.85) / 0.15 : 0,
            transform: `scale(${1 - footerProgress * 0.15}) translateY(${footerProgress * 100}px)`,
            pointerEvents: scrollProgress >= 0.9 && footerProgress < 0.7 ? 'auto' : 'none'
          }}
        >
          <div className="relative z-10 container mx-auto py-20 px-4">
            <motion.h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-8 md:mb-10 font-libre-caslon" 
                      style={{ pointerEvents: 'none' }}>

            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {pubsData.map((pub, i) => (
                <div 
                  key={pub.id} 
                  className="w-full max-w-[250px] h-[325px] mx-auto bg-white opacity-70 hover:opacity-100 rounded-lg border border-white/10 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg overflow-hidden"
                  style={{ pointerEvents: 'auto' }}
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
        <div 
          className="relative z-20 transition-all duration-700"
          style={{
            opacity: footerProgress,
            transform: `scale(${0.95 + footerProgress * 0.05}) translateY(${-50 + footerProgress * 50}px)`
          }}
        >
          <Footer footerProgress={footerProgress} />
        </div>

        {/* Pub Dialog Modal */}
        {selectedPub !== null && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
            onClick={closePubDialog}
          >
            <div 
              className="relative w-[90vw] max-w-4xl h-[80vh] animate-zoomIn"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Navigation Buttons */}
              <button
                onClick={() => navigatePub('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors flex items-center justify-center"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => navigatePub('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors flex items-center justify-center"
              >
                <ChevronRight size={24} />
              </button>

              {/* Pub Content */}
              <div className="h-full flex items-center justify-center p-8">
                <img 
                  src={pubsData[selectedPub].image} 
                  alt={pubsData[selectedPub].title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes zoomIn {
            from { 
              opacity: 0;
              transform: scale(0.8);
            }
            to { 
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
          .animate-zoomIn {
            animation: zoomIn 0.3s ease-out;
          }
        `}</style>
    </div>
  )
}
