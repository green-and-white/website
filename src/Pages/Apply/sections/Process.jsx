import React, { useState, useEffect } from "react";
import island from "@/assets/icons/GW_Island-Dust.png"
const stepsData = [
  { number: "1", title: "Application", description: "Fill out the application form at bit.ly/GW26-T1-Application by Saturday, September 13.", color: "var(--color-marketing)" },
  { number: "2", title: "Examination", description: "Wait for the details of your committee exam and take-home exam to be sent to you by September 15. Submit your exam deliverables, resume, and portfolio within the given time period.", color: "var(--color-customer-care)" },
  { number: "3", title: "Committee Head Interview", description: " Schedule your interview with the committee head of your priority and secondary committee choices.", color: "var(--color-layout)" },
  { number: "4", title: "Executive Editor Interview", description: "Schedule your interview with the executive editors.", color: "var(--color-web)" },
];

function StepItem({ number, title, description, color, isActive, onClick, enableClick }) {
    const parsedDescription = description.replace(
        /(https?:\/\/[^\s]+|bit\.ly\/[^\s]+)/g,
        (url) => {
            const tempLink = document.createElement('a');
            tempLink.href = url.startsWith('http') ? url : `https://${url}`;
            tempLink.target = '_blank';
            tempLink.rel = 'noopener noreferrer';
            tempLink.className = 'text-red-500 font-bold underline';
            tempLink.textContent = url;
            return tempLink.outerHTML;
        }
    );

    return (
        <div
            className="relative group rounded-xl max-w-[500px] w-full overflow-visible"
            onClick={enableClick ? onClick : undefined}
        >
        {/* Highlight */}
            <div className={`absolute inset-0
                  flex items-center justify-center
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-700
                  pointer-events-none 
                  w-[110%] h-[120%]
                  `}
            >
              <div
                  className="w-full h-full relative ounded-full overflow-visible"
                  style={{
                  background: `radial-gradient(ellipse at center, ${color} 0%, transparent 90%)`,
                  filter: "blur(45px)",
                  }}
              ></div>
            </div> 

            {/* Content */}
            <div className="relative flex items-start space-x-6 md:space-x-4 px-2 py-4">
                <div className="flex flex-row h-full gap-4 items-center">
                    <span 
                      className="font-pixar text-xl md:text-2xl font-bold transition-all duration-300 group-hover:text-shadow-lg"
                      style={{ 
                          textShadow: '0 0 5px var(--highlight)',
                          '--tw-text-shadow-lg': `0 0 15px var(--highlight), 0 0 25px var(--highlight)`
                      }}
                    >
                      {number}
                    </span>
                </div>
                <div className="w-[2px] h-9 bg-white"></div>
                <div className="flex-1 flex flex-col gap-2">
                    <h3 
                      className="font-insideout text-2xl md:text-2xl font-bold mb-2 transition-all duration-300 group-hover:text-shadow-lg"
                      style={{ 
                          textShadow: '0 0 5px var(--highlight)',
                          '--tw-text-shadow-lg': `0 0 15px var(--highlight), 0 0 25px var(--highlight)`
                      }}
                    >
                      {title}
                    </h3>
                    <p className="font-montserrat text-xs md:text-sm"
                        dangerouslySetInnerHTML={{ __html: parsedDescription }}>
                    </p>
                </div>
            </div>
        </div>
    );
}


export default function Steps() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 1025); // lg breakpoint
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <>
    <div id = "process"></div>
    <section className="bg-radial-gradient-custom text-white flex flex-col items-center justify-center font-montserrat">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl items-center lg:space-x-16">
        {/* Left Section */}
        <div className="flex-1 flex flex-col h-full items-center text-center lg:text-left mb-12 lg:mb-0">
          <img src={island} alt="Island" className="max-w-[350px] h-auto w-full mb-6 object-contain island"></img>
          <h2 className="text-2xl md:text-4xl text-center font-insideout mb-4">Ready to make core memories with us?</h2>
          <p className="max-w-xs md:max-w-md lg:max-w-none text-center text-xs md:text-base font-montserrat">
            Prepare to make unforgettable memories by taking these steps
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 w-full flex flex-col items-center space-y-2 md:space-y-6">
          {stepsData.map((step, index) => (
            <StepItem
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              color={step.color}
              isActive={isMobile && activeIndex === index} // only mobile tracks active
              enableClick={isMobile}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
  
}


 {/* Highlight
    <div
        className={`
            absolute inset-0
            flex items-center justify-center
            opacity-0 group-hover:opacity-100
            transition-opacity duration-700
            pointer-events-none border border-black
            w-[120%] h-[120%]
        `}
        style={{ overflow: "visible" }} // allow the glow to bleed
        >
            <div
                className="w-[120%] h-[50%] border border-black rounded-full"
                style={{
                background: `radial-gradient(ellipse at center, ${color} 0%, transparent 70%)`,
                filter: "blur(60px)",
                }}
            ></div>
        </div> */
  }
