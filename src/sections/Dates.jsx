import {useState, useEffect} from 'react';

const eventsData = [
  {
    title: "Committee Exams",
    date: "Sept. 15 - 17",
    color: "#CA6702",
  },
  {
    title: "Practical Exams",
    date: "Sept. 15 - 20",
    color: "#F6BB46",
  },
  {
    title: "Committee Head Interviews",
    date: "Sept. 18 - 20",
    color: "#05A54C",
  },
  {
    title: "Executive Editor Interviews",
    date: "Sept. 22 - 26",
    color: "#036074",
  },
];

function VerticalTimeline(){
    return(
    <div className="relative flex lg:hidden">
        <div className="flex flex-col space-y-4 w-full">
        {eventsData.map((event, index) => (
            <div
            key={index}
            className={`relative flex flex-col items-center`}
            >
            {/* Card */}
            <div
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 w-full sm:w-1/2 transition-transform duration-300 hover:-translate-y-1"
                style={{ "--event-color": event.color }}
            >
                <span className="text-lg md:text-xl font-bold text-[var(--event-color)]">
                {event.date}
                </span>
                <h3 className="text-xl md:text-2xl font-bold font-insideout mt-2 text-white">
                {event.title}
                </h3>
            </div>
            </div>
        ))}
        </div>
    </div>
    )
}

function HorizontalTimeline(){
    return(
     <div className="relative hidden lg:block py-8 max-w-[1280px] mx-auto">
          {/* Main Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/30"></div>

          <div className="flex items-center justify-between relative z-10">
            {eventsData.map((event, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center flex-1 group"
                style={{ "--event-color": event.color }}
              >
                {/* Timeline Dot */}
                <div
                  className={`
                    w-8 h-8 rounded-full border-4 transition-all duration-300 
                    bg-[var(--event-color)] border-[var(--event-color)]
                    group-hover:scale-125 group-hover:shadow-[0_0_15px_var(--event-color)]
                  `}
                ></div>

                {/* Event Info (alternate up/down) */}
                <div
                  className={`absolute ${
                    index % 2 === 0 ? "-top-28" : "top-12"
                  } w-40 md:w-56 text-center p-3 rounded-2xl bg-white/5 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1`}
                >
                  <span className="block text-base md:text-lg font-pixar text-white group-hover:text-[var(--event-color)]">
                    {event.date}
                  </span>
                  <h3 className="text-base font-montserrat mt-1 leading-snug group-hover:text-[var(--event-color)]">
                    {event.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
    )
}

export default function Dates() {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 1025); // lg breakpoint
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
    }, []);
return (
    <section id="dates" className="text-white py-20 font-montserrat flex flex-col items-center justify-center">
        <div className="w-full">
            <h2
                className={`text-3xl md:text-5xl text-center font-bold font-insideout ${
                    isMobile ? "mb-12" : "mb-48"
                }`}
            >
                Important Dates
            </h2>
            {isMobile ? <VerticalTimeline /> : <HorizontalTimeline />}
        </div>
    </section>
);
}
