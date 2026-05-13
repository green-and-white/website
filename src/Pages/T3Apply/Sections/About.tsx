import React from 'react';

function About() {
  return (
    <section id="about" className="min-h-screen bg-[#F5F0E8] flex flex-col justify-center items-center px-6 py-16 md:py-24">
      <div className="w-full max-w-4xl xl:max-w-5xl flex flex-col gap-10 lg:gap-12">
        {/* Top row: Title and Green Sub-text */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* Title column */}
          <div className="flex flex-col">
            <h1 className="font-micu text-5xl md:text-6xl lg:text-7xl tracking-wide text-[#2D6A3F]">
              ABOUT US
            </h1>
            <div className="mt-4 lg:mt-6 h-2 w-16 bg-[#B34865] rounded-full"></div>
          </div>

          {/* Green block & tagline */}
          <div className="flex items-stretch gap-4 max-w-lg">
            <div className="w-2 md:w-3 bg-[#2D6A3F] rounded-full shrink-0"></div>
            <p className="text-xl md:text-2xl text-[#2D6A3F] font-libre-caslon-condensed font-bold py-1">
              Green & White is the official yearbook publication of De La Salle University.
            </p>
          </div>
        </div>

        {/* Bottom row: Detailed paragraph */}
        <div className="flex justify-start lg:justify-end">
          <div className="max-w-2xl font-dm-mono text-base md:text-lg leading-relaxed text-gray-700 bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-[#2D6A3F]/10 shadow-sm transition-all duration-300 hover:shadow-md">
            Celebrating its 101st year, the publication lives as the record-keeper of Lasallian memories. From portraits to pages, Green & White brings the Lasallian community together and etches their place in time through the yearbook.
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;