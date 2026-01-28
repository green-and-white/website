import React, { useState } from 'react'
import RealisticWater from './RealisticWater'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import image1 from '../../assets/catalog/1.png'
import image2 from '../../assets/catalog/2.png'
import image3 from '../../assets/catalog/3.png'
import image4 from '../../assets/catalog/4.png'
import image5 from '../../assets/catalog/5.png'
import image6 from '../../assets/catalog/6.png'

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
    <div>
        <Navbar />
        {/* Header Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
           <Header />
        </section>

        {/* Pub Catalogue with Interactive Water Background */}
        <section className="relative min-h-screen w-full overflow-hidden">
          {/* Interactive Water Background Layer - absolute positioning within this section only */}
          <div className="absolute inset-0 z-0">
            <RealisticWater />
          </div>

        
          {/* Pub Catalogue Content Layer (On Top) */}
          <div className="relative min-h-screen z-10 container mx-auto py-20">
            <h2 className="text-center text-4xl font-bold text-yellow-400 mb-10" style={{ pointerEvents: 'none' }}>
              Green & White 2026 Layout Catalogue
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-4 max-w-5xl mx-auto">
              {pubsData.map((pub, i) => (
                <div 
                  key={pub.id} 
                  className="w-[250px] h-[325px] mx-auto bg-white opacity-70 hover:opacity-100 rounded-lg border border-white/10 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg overflow-hidden"
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
              {/* Close Button */}
              <button
                onClick={closePubDialog}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors flex items-center justify-center"
              >
                <X size={20} />
              </button>

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

        {/* Footer Section */}
        <Footer />

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
