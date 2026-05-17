import React from 'react';
import grainTexture from "@/assets/textures/grain.avif"
import { T3_ASSETS } from '../../../lib/t3Assets';
import { CloudinaryImage } from '../../../components/t3-recweek/CloudinaryImage';

function Hero() {
  // Find the required assets from the registry
  const whiteLogo = T3_ASSETS.logos.find(
    (logo) => logo.public_id === "Vertical_-_White_elepk2"
  ) || { public_id: "Vertical_-_White_elepk2", display_name: "Vertical - White" };

  const connonImage = T3_ASSETS.images.find(
    (img) => img.public_id === "Connon_orxosh"
  ) || { public_id: "Connon_orxosh", display_name: "Connon" };

  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden ">
      {/* Absolute Background Image Layer */}
      <CloudinaryImage
        publicId="Hero_tcg8tg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-[0.9]"
        width={1000}
      />
      {/* Grain overlay */}
      <img
        src={grainTexture}
        aria-hidden="true"
        alt=""
        className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-difference"
      />


      {/* Vertically Oriented Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center gap-9 max-w-4xl h-full py-16 px-6">
        {/* 1. Vertical - White Logo */}
        <div className="transition-transform duration-500 hover:scale-105">
          <CloudinaryImage
            publicId={whiteLogo.public_id}
            alt={whiteLogo.display_name}
            className="h-22 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            width={200}
          />
        </div>

        {/* 2. Connon Image Block */}
        <div className="transition-all duration-300 hover:opacity-95">
          <CloudinaryImage
            publicId={connonImage.public_id}
            alt={connonImage.display_name}
            className="h-60 md:h-70 w-auto max-w-full object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
          />
        </div>

        {/* 3. Group Text 1 - Subtitle and Headline */}
        <div className="flex flex-col items-center gap-2.5">
          <div className="flex flex-col items-center text-white font-micu text-3xl md:text-6xl">
            <p className="">
              Come as you are.
            </p>
            <p className="">
              Leave a page behind.
            </p>
          </div>

          <div className="text-app-yellow font-futura-extrabold text-2xl">
            term 3 recruitment week
          </div>
        </div>

        {/* 4. Group Text 2 - Call to Action and micro-tagline */}
        <a
          href="https://bit.ly/GW26-T3-Application"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-4 bg-app-white hover:bg-app-green hover:text-app-white transition-colors ease-in-out text-app-green font-futura-extrabold text-xl cursor-pointer"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
}

export default Hero;
