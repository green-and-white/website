import React, { useRef, useState, useEffect } from 'react'

import styles from '../../home.module.css'


import caveBackground from "@/assets/home_page/cave.jpg";

import model1 from '@/assets/stickers/model1.png'
import model2 from '@/assets/stickers/model2.png'
import laptopSticker from '@/assets/stickers/laptop.png'
import cameraSticker from '@/assets/stickers/camera.png'
import vitoCruzSticker from '@/assets/stickers/VC2.webp'
import taftSticker from '@/assets/stickers/taft.png'

import YearBookActivitiesCard from '@/components/YearBookActivitiesCard'
import yearbookActivitiesData from '@/assets/data/yearbookActivities.json'

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
  return (
    <>
      {/*Cave Section*/}
      <section 
        className={`${styles.cave} sm:h-screen sm:flex sm:flex-col sm:justify-center`} 
        style={{ backgroundImage: `url(${caveBackground})` }}
      >
        <div className={`${styles.heading} sm:mb-12`}>Yearbook Activities</div>
        
        {/* Desktop layout: 2x2 grid with rotations and animations */}
        <div className="hidden sm:grid sm:grid-cols-2 sm:gap-8 sm:max-w-5xl sm:mx-auto sm:px-8">
          {yearbookActivitiesData.map((activity, index) => {
            // Alternating rotation angles for visual interest
            const rotations = ['rotate-[-2deg]', 'rotate-[3deg]', 'rotate-[2deg]', 'rotate-[-3deg]'];
            const hoverRotations = ['hover:rotate-0', 'hover:rotate-0', 'hover:rotate-0', 'hover:rotate-0'];
            
            return (
              <div 
                key={activity.id} 
                className={`relative transition-all duration-300 ease-out ${rotations[index]} ${hoverRotations[index]} hover:scale-105 hover:z-10`}
                style={{
                  animation: `fadeIn 0.6s ease-out ${index * 0.15}s both`
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

        {/* Add keyframe animation */}
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
        `}</style>

        {/* Mobile layout: zigzag pattern */}
        <div className="sm:hidden flex flex-col gap-6 mt-12 px-4">
          {yearbookActivitiesData.map((activity, index) => (
            <div 
              key={activity.id} 
              className={`flex w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
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
            ))}
        </div>
      </section>
    </>
  )
}
