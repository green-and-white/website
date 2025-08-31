import React, { useState, useEffect } from "react";

const stepsData = [
  { number: "01", title: "APPLICATION", description: "Fill out the application form at bit.ly/GW26-T1-Application by Saturday, September 13.", color: "var(--color-marketing)" },
  { number: "02", title: "EXAMINATION", description: "Wait for the details of your committee exam and take-home exam to be sent to you by September 15. Submit your exam deliverables, resume, and portfolio within the given time period.", color: "var(--color-customer-care)" },
  { number: "03", title: "COMMITTEE HEAD INTERVIEW", description: " Schedule your interview with the committee head of your priority and secondary committee choices.", color: "var(--color-layout)" },
  { number: "04", title: "EXECUTIVE EDITOR INTERVIEW", description: "Schedule your interview with the executive editors.", color: "var(--color-web)" },
];

function StepItem({ number, title, description, color, isActive, onClick, enableClick }) {
    const parsedDescription = description.replace(
        /(https?:\/\/[^\s]+|bit\.ly\/[^\s]+)/g,
        (url) => {
            // Create a temporary element to safely parse the URL
            const tempLink = document.createElement('a');
            tempLink.href = url.startsWith('http') ? url : `https://${url}`;
            tempLink.target = '_blank'; // Open in a new tab
            tempLink.rel = 'noopener noreferrer'; // Security best practice
            tempLink.className = 'text-blue-500 underline';
            tempLink.textContent = url;
            
            return tempLink.outerHTML;
        }
    );
  return (
    <div
      className="relative overflow-hidden group rounded-xl"
      style={{ "--highlight": color }}
      onClick={enableClick ? onClick : undefined}
    >
      {/* Highlight */}
      <div
        className={`absolute inset-0 bg-[var(--highlight)] transition-transform duration-500
        ${isActive ? "translate-x-0" : "translate-x-[-100%]"}
        group-hover:translate-x-0`}
      ></div>

      {/* Content */}
      <div className="relative flex items-start space-x-6 md:space-x-8 px-2 py-4">
        <div className="flex flex-row h-full gap-4 items-center">
          <span className="font-pixar text-xl md:text-2xl font-bold">{number}</span>
          <div className="w-[2px] h-10 bg-white"></div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h3 className="font-insideout text-2xl md:text-3xl font-bold mb-2">{title}</h3>
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
    const checkWidth = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <section className="bg-radial-gradient-custom text-white min-h-screen flex flex-col items-center justify-center font-montserrat">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl items-center lg:space-x-16">
        {/* Left Section */}
        <div className="flex-1 flex flex-col h-full items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0">
          <h2 className="text-2xl md:text-4xl font-insideout mb-4">JOIN GREEN & WHITE</h2>
          <p className="max-w-xs md:max-w-md lg:max-w-none text-xs md:text-base font-montserrat">
            Take these next steps to be part of a community that celebrates milestones.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 w-full md:space-y-6">
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
  );
}
