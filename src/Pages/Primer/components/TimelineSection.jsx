import { useEffect, useRef, useState } from "react";
import styles from "../Primer.module.css";
import texture from "../../../assets/textures/texture.png";

export default function TimelineSection() {
  const timelineContent = {
    items: [
      {
        title: "PICTORIALS",
        subtitle: null,
        bullets: [
          "Hair & Make-Up",
          "Live-editing",
          "Additional P500 for the raw and edited files of all your portraits (graduate, business, and creative)",
        ],
      },
      {
        title: "ONLINE VERIFICATION",
        subtitle: "2 to 3 months after pictorials",
        bullets: ["Digital copy of the Graduate portrait"],
      },
      {
        title: "RELEASING",
        subtitle: "3 to 4 months after pictorials",
        bullets: [
          "The framed image together with all the printouts",
          "Subscribers must pick up their frames on campus",
        ],
      },
      {
        title: "Yearbook Distribution",
        subtitle: "End of 2026 to start of 2027",
        bullets: ["Physical Yearbook delivered to your home"],
      },
    ],
  };

  const [item1, item2, item3, item4] = timelineContent.items;

  const mobileTimelineRef = useRef(null);
  const [isMobileTimelineVisible, setIsMobileTimelineVisible] = useState(false);

  useEffect(() => {
    const node = mobileTimelineRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMobileTimelineVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const mobileAnimClass = isMobileTimelineVisible ? "timelineFadeInLeft" : "timelineHidden";

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-[#00995e] via-[#00995e] to-[#00653e]" />
        <img
          src={texture}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20">
        <div className="flex pb-8">
          <h3 className={`${styles.h3} text-center w-full`} data-text="Timeline">
            Timeline
          </h3>
        </div>

        {/* DESKTOP HORIZONTAL TIMELINE (>1024px) */}
        <div className="hidden xl:block relative w-full max-w-[1075px] h-[490px] mx-auto">
          {/* Timeline line with dots */}
          <div className="absolute left-0 right-0 top-[48.46%] h-[3px]">
            {/* Horizontal line segments */}
            <div className="absolute left-0 right-[80%] top-0 h-full bg-white" />
            <div className="absolute left-[20%] right-[60%] top-0 h-full bg-white" />
            <div className="absolute left-[40%] right-[40%] top-0 h-full bg-white" />
            <div className="absolute left-[60%] right-[20%] top-0 h-full bg-white" />
            <div className="absolute left-[80%] right-[-5%] top-0 h-full bg-white" />
            
            {/* Dots - positioned on the horizontal line */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full border-[3px] border-white" />
            <div className="absolute left-[20%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full border-[3px] border-white" />
            <div className="absolute left-[40%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full border-[3px] border-white" />
            <div className="absolute left-[60%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full border-[3px] border-white" />
            <div className="absolute left-[80%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full border-[3px] border-white" />
            <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full border-[3px] border-white" />

            {/* Vertical connectors - starting from the dots */}
            {/* Pattern: UP, DOWN, UP, DOWN (alternating, starting with UP for top-left text) */}
            <div className="absolute left-[20%] bottom-1/2 -translate-x-1/2 w-[3px] h-[270px] bg-white" />
            <div className="absolute left-[40%] top-1/2 -translate-x-1/2 w-[3px] h-[239px] bg-white" />
            <div className="absolute left-[60%] bottom-1/2 -translate-x-1/2 w-[3px] h-[270px] bg-white" />
            <div className="absolute left-[80%] top-1/2 -translate-x-1/2 w-[3px] h-[239px] bg-white" />
          </div>

          {/* Timeline items - DESKTOP */}
          {/* 
            TO ADJUST TEXT:
            - Position: Change left-[X%], top-[X%]
            - Size: Change w-[Xpx] for width
            - Font size: Change text-[Xpx]
            - Spacing from line: Change ml-[Xpx] (margin-left)
          */}
          
          {/* Item 1: DURING PICTORIALS (top left) */}
          <div className="absolute left-[22%] top-[-5%] ml-3 w-[195px] text-white text-[17px]">
            <p className="font-bold mb-2">{item1.title}</p>
            <ul className="list-disc pl-5 space-y-1">
              {item1.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>

          {/* Item 2: 2 to 3 MONTHS (bottom, after 40% line) */}
          <div className="absolute left-[41%] top-[54%] ml-3 w-[200px] text-white text-[17px]">
            <p className="font-bold mb-2">{item2.title}</p>
            <p className="font-bold mb-2">{item2.subtitle}</p>
            <ul className="list-disc pl-5">
              {item2.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>

          {/* Item 3: 3 to 4 MONTHS (top right, after 60% line) */}
          <div className="absolute left-[61%] top-[-5%] ml-3 w-[220px] text-white text-[17px]">
            <p className="font-bold mb-2 ">{item3.title}</p>
            <p className="font-bold mb-2">{item3.subtitle}</p>
            <ul className="list-disc pl-5 space-y-1">
              {item3.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>

          {/* Item 4: END OF '26 (bottom right, after 80% line) */}
          <div className="absolute left-[81%] top-[54%] ml-3 w-[180px] text-white text-[17px]">
            <p className="font-bold mb-2">{item4.title}</p>
            <ul className="list-disc pl-5">
              {item4.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* TABLET HORIZONTAL TIMELINE (768px to 1024px) */}
        <div className="hidden md:block xl:hidden relative w-full max-w-[800px] h-[400px] mx-auto">
          {/* Timeline line with dots */}
          <div className="absolute left-0 right-0 top-[48.46%] h-[3px]">
            {/* Horizontal line segments */}
            <div className="absolute left-0 right-[80%] top-0 h-full bg-white" />
            <div className="absolute left-[20%] right-[60%] top-0 h-full bg-white" />
            <div className="absolute left-[40%] right-[40%] top-0 h-full bg-white" />
            <div className="absolute left-[60%] right-[20%] top-0 h-full bg-white" />
            <div className="absolute left-[80%] right-[-5%] top-0 h-full bg-white" />
            
            {/* Dots - positioned on the horizontal line */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-[2px] border-white" />
            <div className="absolute left-[20%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full border-[2px] border-white" />
            <div className="absolute left-[40%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full border-[2px] border-white" />
            <div className="absolute left-[60%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full border-[2px] border-white" />
            <div className="absolute left-[80%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full border-[2px] border-white" />
            <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-[2px] border-white" />

            {/* Vertical connectors */}
            <div className="absolute left-[20%] bottom-1/2 -translate-x-1/2 w-[2px] h-[200px] bg-white" />
            <div className="absolute left-[40%] top-1/2 -translate-x-1/2 w-[2px] h-[180px] bg-white" />
            <div className="absolute left-[60%] bottom-1/2 -translate-x-1/2 w-[2px] h-[200px] bg-white" />
            <div className="absolute left-[80%] top-1/2 -translate-x-1/2 w-[2px] h-[180px] bg-white" />
          </div>

          {/* Timeline items - TABLET (scaled down, adjust positions here) */}
          
          {/* Item 1: DURING PICTORIALS (top left) */}
          <div className="absolute left-[22%] top-0 ml-2 w-[150px] text-white text-[14px]">
            <p className="font-bold mb-1 text-[13px]">{item1.title}</p>
            <ul className="list-disc pl-4 space-y-0.5 text-[12px]">
              {item1.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>

          {/* Item 2: 2 to 3 MONTHS (bottom) */}
          <div className="absolute left-[41%] top-[55%] ml-2 w-[150px] text-white text-[14px]">
            <p className="font-bold mb-1 text-[13px]">{item2.title}</p>
            <p className="font-bold mb-1 text-[13px]">{item2.subtitle}</p>
            <ul className="list-disc pl-4 text-[12px]">
              {item2.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>

          {/* Item 3: 3 to 4 MONTHS (top right) */}
          <div className="absolute left-[61%] top-0 ml-2 w-[160px] text-white text-[14px]">
            <p className="font-bold mb-1 text-[13px]">{item3.title}</p>
            <p className="font-bold mb-1 text-[13px]">{item3.subtitle}</p>
            <ul className="list-disc pl-4 space-y-0.5 text-[12px]">
              {item3.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>

          {/* Item 4: END OF '26 (bottom right) */}
          <div className="absolute left-[81%] top-[55%] ml-2 w-[140px] text-white text-[14px]">
            <p className="font-bold mb-1 text-[13px]">{item4.title}</p>
            <ul className="list-disc pl-4 text-[12px]">
              {item4.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* MOBILE VERTICAL TIMELINE (<768px) */}
        <div ref={mobileTimelineRef} className="md:hidden relative w-full max-w-[400px] mx-auto px-4">
          {/* Vertical main line starts from left side */}
          <div className="absolute left-4 top-[38px] bottom-0 w-[3px] bg-white" />

          {/* Item 1: DURING PICTORIALS */}
          <div className="relative pt-7 pb-12 min-h-[180px]">
            <div className="absolute left-[-15px] top-[12%] w-8 h-8 bg-white rounded-full border-[3px] border-white z-10" />
            <div className="absolute left-4 top-[18%] w-12 h-[3px] bg-white" />
            <div className="relative ml-20 text-white text-[1.2rem]">
              <p className={`font-bold mb-2 ${mobileAnimClass}`}>{item1.title}</p>
              <ul className={`list-disc pl-5 space-y-1 text-[.8rem] ${mobileAnimClass} timelineDelay1`}>
                {item1.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Item 2: 2 to 3 MONTHS */}
          <div className="relative min-h-[140px] pb-6 my-6md:mt-0">
            <div className="absolute left-[-15px]  w-8 h-8 bg-white rounded-full border-[3px] border-white z-10" />
            <div className="absolute left-4 top-[9%] w-12 h-[3px] bg-white" />
            <div className="relative ml-20 text-white text-[1.2rem]">
              <p className={`font-bold ${mobileAnimClass}`}>{item2.title}</p>
              <p className={`font-bold mb-2 text-sm ${mobileAnimClass} timelineDelay1`}>({item2.subtitle})</p>
              <ul className={`list-disc pl-5 text-[.8rem] space-y-1 ${mobileAnimClass} timelineDelay2`}>
                {item2.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Item 3: 3 to 4 MONTHS */}
          <div className="relative pb-6 min-h-[160px] my-6 md:mt-0">
            <div className="absolute left-[-15px] top-[-1.5%] w-8 h-8 bg-white rounded-full border-[3px] border-white z-10" />
            <div className="absolute left-4 top-[8%] w-12 h-[3px] bg-white" />
            <div className="relative ml-20 text-white text-[1.2rem]">
              <p className={`font-bold ${mobileAnimClass}`}>{item3.title}</p>
              <p className={`font-bold mb-2 text-sm ${mobileAnimClass} timelineDelay1`}>({item3.subtitle})</p>
              <ul className={`list-disc pl-5 space-y-1 text-[.8rem] ${mobileAnimClass} timelineDelay2`}>
                {item3.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Item 4: END OF '26 */}
          <div className="relative pb-6 min-h-[120px] my-6 md:mt-0">
            <div className="absolute left-[-15px] top-[-1.5%] w-8 h-8 bg-white rounded-full border-[3px] border-white z-10" />
            <div className="absolute left-4 top-[10%] w-12 h-[3px] bg-white" />
            <div className="relative ml-20 text-white text-[1.2rem]">
              <p className={`font-bold mb-2 ${mobileAnimClass}`}>{item4.title}</p>
              <p className={`font-bold mb-2 text-sm ${mobileAnimClass} timelineDelay1`}>({item4.subtitle})</p>
              <ul className={`list-disc pl-5 text-[.8rem] space-y-1 ${mobileAnimClass} timelineDelay1`}>
                {item4.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom dot */}
          <div className="relative pb-8">
            <div className="absolute left-[-15px] top-0 w-8 h-8 bg-white rounded-full border-[3px] border-white z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
