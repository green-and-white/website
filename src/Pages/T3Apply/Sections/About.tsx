import React from 'react';
import { T3_ASSETS } from '../../../lib/t3Assets';
import { CloudinaryImage } from '../../../components/t3-recweek/CloudinaryImage';

function About() {
  const aboutImage = T3_ASSETS.images.find(
    (img) => img.public_id === "About_Us_ke5fkt"
  ) || { public_id: "About_Us_ke5fkt", display_name: "About Us" };

  return (
    <section id="about" className="min-h-screen bg-app-white flex flex-col items-center justify-center text-app-red px-6 md:px-16 md:py-24 gap-4">
      <div className="font-micu text-[40px] md:text-[64px] leading-10 md:leading-20 text-center text-app-red">
        Green & White
      </div>
      <div className="flex flex-col gap-5">
        <div className="font-futura-extrabold text-center text-2xl">
          The official yearbook publication of De La Salle University.
        </div>
        <div className="font-futura-bold text-center max-w-[730px] text-2xl ">
          Celebrating its 101st year, the publication lives as the record-keeper of Lasallian memories.
          From portraits to pages, <span className="font-futura-extrabold text-app-green">Green & White</span> brings the Lasallian community together and etches their place in time through the yearbook.
        </div>
      </div>

      {/* About Us Image - full width container but max-w-[750px] on larger screens */}
      <div className="w-full max-w-[750px] mt-2 flex justify-center transition-transform duration-500 hover:scale-[1.02]">
        <CloudinaryImage
          publicId={aboutImage.public_id}
          alt={aboutImage.display_name}
          className="w-full h-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
          width={1000}
        />
      </div>
    </section>
  );
}

export default About;