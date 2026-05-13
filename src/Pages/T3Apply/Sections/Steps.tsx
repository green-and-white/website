import React from 'react';

function Steps() {
  const stepsData = [
    {
      number: "1",
      title: "APPLICATION",
      description: (
        <>
          Fill out the application form at{' '}
          <a 
            href="https://bit.ly/GW26-T3-Application" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-[#FFE500] transition-colors duration-200 break-all"
          >
            bit.ly/GW26-T3-Application
          </a>{' '}
          by Saturday, May 23.
        </>
      )
    },
    {
      number: "2",
      title: "EXAMINATION",
      description: "Wait for the details of your committee exam and practical exam to be sent to you by May 25. Submit your exam deliverables, resume, and portfolio within the given time period."
    },
    {
      number: "3",
      title: "COMMITTEE HEAD INTERVIEW",
      description: "Schedule your interview with your priority and secondary committee choices after submitting your exam deliverables."
    },
    {
      number: "4",
      title: "EXECUTIVE EDITORS INTERVIEW",
      description: "Schedule your final interview with the Executive Editors to discuss your potential role and overall vision."
    }
  ];

  return (
    <section id="steps" className="min-h-screen bg-[#2D6A3F] flex flex-col justify-center items-center px-6 py-16 md:py-24 overflow-hidden">
      {/* Title Container */}
      <div className="flex flex-col items-center text-center w-full max-w-4xl">
        <h1 className="font-micu text-white text-4xl md:text-5xl lg:text-6xl tracking-wide">
          APPLICATION STEPS
        </h1>
        <div className="mt-4 h-1 w-32 md:w-48 bg-white rounded-full"></div>
      </div>

      {/* Steps Grid / Flex Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-12 md:mt-20 w-full max-w-7xl">
        {stepsData.map((step, index) => (
          <div 
            key={index} 
            className="group flex flex-col items-center md:items-start text-center md:text-left bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
          >
            {/* Number Badge */}
            <div className="relative flex h-24 w-24 md:h-28 md:w-28 shrink-0 items-center justify-center border-2 border-black bg-[#f7f3e9] text-6xl md:text-7xl font-libre-caslon-condensed font-bold text-black shadow-[6px_6px_0px_0px_black] group-hover:shadow-[4px_4px_0px_0px_black] group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all duration-300">
              {step.number}
            </div>

            {/* Step Title */}
            <h3 className="mt-6 font-libre-caslon-condensed text-[#f7f3e9] text-xl md:text-2xl font-bold tracking-wide">
              {step.title}
            </h3>

            {/* Step Description */}
            <p className="mt-3 font-libre-caslon-condensed text-[#f7f3e9]/90 text-base md:text-lg leading-relaxed max-w-sm">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Steps;
