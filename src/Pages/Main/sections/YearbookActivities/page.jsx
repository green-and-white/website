import React, { useRef, useState, useEffect } from 'react'

import styles from '../../home.module.css'


import caveBackground from "@/assets/home_page/cave.jpg";
import photoBackground from "@/assets/home_page/photo_studio.webp";

import model1 from '@/assets/stickers/model1_cutout.png'
import model2 from '@/assets/stickers/model2_cutout.png'
import laptopSticker from '@/assets/stickers/laptop.png'
import cameraSticker from '@/assets/stickers/camera.png'
import vitoCruzSticker from '@/assets/stickers/VC2.webp'
import taftSticker from '@/assets/stickers/taft.png'

import YearBookActivitiesCard from '@/components/YearBookActivitiesCard'
import yearbookActivitiesData from '@/assets/data/yearbookActivities.json'

import { useBrowserDetection } from '@/hooks/useBrowserDetection';

// Map sticker names to imported images
const stickerImages = {
  taft: taftSticker,
  camera: cameraSticker,
  laptop: laptopSticker,
  vitoCruz: vitoCruzSticker
};

// Helper function to get position classes based on position string
const getPositionClasses = (position) => {
  const positions = {
    'top-left': '-top-8 -left-8',
    'top-right': '-top-8 -right-16',
    'bottom-left': '-bottom-8 -left-16',
    'bottom-right': '-bottom-10 -right-8'
  };
  return positions[position] || '';
};

export default function YearbookActivities() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [modelsVisible, setModelsVisible] = useState(false);
  const cardRefs = useRef([]);
  const modelsRef = useRef(null);
  const { isSafari } = useBrowserDetection();

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    // Observer for models
    const modelsObserver = modelsRef.current ? new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setModelsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    ) : null;

    if (modelsRef.current) {
      modelsObserver.observe(modelsRef.current);
    }

    return () => {
      observers.forEach((observer) => observer?.disconnect());
      modelsObserver?.disconnect();
    };
  }, []);

  return (
    <>
      <section 
        className={`${styles.henry} min-h-screen text-sm !py-20 sm:flex sm:flex-col sm:justify-center`} 
       style={{ backgroundImage: `url(${photoBackground})`,
                backgroundAttachment: isSafari ? 'scroll' : 'fixed'}}
        id='yearbookActs'
      >
        <div className={`${styles.heading} sm:mb-12`}>Yearbook Activities</div>
        
        {/* Desktop layout: flex row with model1, 2x2 grid, model2 */}
        <div 
          ref={modelsRef}
          className="relative hidden sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-8 lg:gap-14 sm:max-w-7xl sm:mx-auto sm:px-8"
        >
          {/* Model 1 */}
          <img 
            src={model1} 
            alt="model1 sticker"
            className="w-40 h-auto lg:w-60 -rotate-6 pointer-events-none flex-shrink-0"
            style={{
              animation: modelsVisible ? 'slideInLeft 0.8s ease-out both' : 'none',
              opacity: modelsVisible ? 1 : 0
            }}
          />

          {/* Activity Cards Grid */}
          <div className="grid grid-cols-2 gap-8 lg:gap-14 flex-shrink-0">
            {yearbookActivitiesData.map((activity, index) => {
              // Alternating rotation angles for visual interest
              const rotations = ['rotate-[-2deg]', 'rotate-[3deg]', 'rotate-[2deg]', 'rotate-[-3deg]'];
              const hoverRotations = ['hover:rotate-0', 'hover:rotate-0', 'hover:rotate-0', 'hover:rotate-0'];
              
              return (
                <div 
                  key={activity.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`relative transition-all duration-300 ease-out ${rotations[index]} ${hoverRotations[index]} hover:scale-105 hover:z-10`}
                  style={{
                    animation: visibleCards.has(index) ? `fadeIn 0.6s ease-out ${index * 0.15}s both` : 'none',
                    opacity: visibleCards.has(index) ? 1 : 0
                  }}
                >
                  <YearBookActivitiesCard 
                    bgColor={activity.bgColor} 
                    activity={activity.activity}
                    description={activity.description}
                  />
                  {/* Sticker positioned relative to this card */}
                  {activity.sticker && (
                    <img 
                      src={stickerImages[activity.sticker.src]} 
                      alt={`${activity.activity} sticker`}
                      className={`absolute ${getPositionClasses(activity.sticker.position)} ${activity.sticker.className} pointer-events-none z-10`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Model 2 */}
          <img 
            src={model2} 
            alt="model2 sticker"
            className="w-40 h-auto rotate-6 lg:w-60 pointer-events-none flex-shrink-0"
            style={{
              animation: modelsVisible ? 'slideInRight 0.8s ease-out both' : 'none',
              opacity: modelsVisible ? 1 : 0
            }}
          />
        </div>

        {/* Add keyframe animations */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>

        {/* Mobile layout: zigzag pattern */}
        <div className="sm:hidden flex flex-col gap-6 mt-12 px-4">
          {yearbookActivitiesData.map((activity, index) => {
            const mobileIndex = index + yearbookActivitiesData.length; // Offset for mobile refs
            return (
              <div 
                key={activity.id}
                ref={(el) => (cardRefs.current[mobileIndex] = el)}
                className={`flex w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                style={{
                  animation: visibleCards.has(mobileIndex) ? `fadeIn 0.6s ease-out ${index * 0.15}s both` : 'none',
                  opacity: visibleCards.has(mobileIndex) ? 1 : 0
                }}
              >
                <div className="relative">
                  <YearBookActivitiesCard 
                    bgColor={activity.bgColor} 
                    activity={activity.activity}
                    description={activity.description}
                  />
                  {/* Sticker positioned relative to this card */}
                  {activity.sticker && (
                    <img 
                      src={stickerImages[activity.sticker.src]} 
                      alt={`${activity.activity} sticker`}
                      className={`absolute ${getPositionClasses(activity.sticker.position)} ${activity.sticker.className} pointer-events-none z-10`}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  )
}
