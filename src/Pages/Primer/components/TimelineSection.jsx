import styles from "../Primer.module.css";
import texture from "../../../assets/textures/texture.png";

export default function TimelineSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-[#00995e] via-[#00995e] to-[#00653e]" />
        <img
          src={texture}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-20">
        <div className="flex pb-32">
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
            <p className="font-bold mb-2">DURING PICTORIALS</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Hair & Make-Up</li>
              <li>Live-editing</li>
              <li>
                Additional P500 for the raw and edited files of all your
                portraits (graduate, business, and creative)
              </li>
            </ul>
          </div>

          {/* Item 2: 2 to 3 MONTHS (bottom, after 40% line) */}
          <div className="absolute left-[41%] top-[54%] ml-3 w-[200px] text-white text-[17px]">
            <p className="font-bold mb-2">
              2 to 3 MONTHS AFTER PICTORIALS
            </p>
            <p className="font-bold mb-2">ONLINE VERIFICATION</p>
            <ul className="list-disc pl-5">
              <li>Digital copy of the Graduate portrait</li>
            </ul>
          </div>

          {/* Item 3: 3 to 4 MONTHS (top right, after 60% line) */}
          <div className="absolute left-[61%] top-[-5%] ml-3 w-[220px] text-white text-[17px]">
            <p className="font-bold mb-2 ">
              3 to 4 MONTHS AFTER PICTORIALS
            </p>
            <p className="font-bold mb-2">RELEASING</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>The framed image together with all the printouts</li>
              <li>Subscribers must pick up their frames on campus</li>
            </ul>
          </div>

          {/* Item 4: END OF '26 (bottom right, after 80% line) */}
          <div className="absolute left-[81%] top-[54%] ml-3 w-[180px] text-white text-[17px]">
            <p className="font-bold mb-2">
              END OF '26 TO START OF '27
            </p>
            <ul className="list-disc pl-5">
              <li>Physical Yearbook delivered to your home</li>
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
            <p className="font-bold mb-1 text-[13px]">DURING PICTORIALS</p>
            <ul className="list-disc pl-4 space-y-0.5 text-[12px]">
              <li>Hair & Make-Up</li>
              <li>Live-editing</li>
              <li>
                Additional P500 for the raw and edited files of all your
                portraits (graduate, business, and creative)
              </li>
            </ul>
          </div>

          {/* Item 2: 2 to 3 MONTHS (bottom) */}
          <div className="absolute left-[41%] top-[55%] ml-2 w-[150px] text-white text-[14px]">
            <p className="font-bold mb-1 text-[13px] whitespace-nowrap">
              2 to 3 MONTHS AFTER
            </p>
            <p className="font-bold mb-1 text-[13px]">PICTORIALS</p>
            <p className="font-bold mb-1 text-[13px]">ONLINE VERIFICATION</p>
            <ul className="list-disc pl-4 text-[12px]">
              <li>Digital copy of the Graduate portrait</li>
            </ul>
          </div>

          {/* Item 3: 3 to 4 MONTHS (top right) */}
          <div className="absolute left-[61%] top-0 ml-2 w-[160px] text-white text-[14px]">
            <p className="hidden md:block font-bold mb-1 text-[13px] whitespace-nowrap">
              3 to 4 MONTHS AFTER
            </p>
            <p className="font-bold mb-1 text-[13px]">PICTORIALS</p>
            <p className="font-bold mb-1 text-[13px]">RELEASING</p>
            <ul className="list-disc pl-4 space-y-0.5 text-[12px]">
              <li>The framed image together with all the printouts</li>
              <li>Subscribers must pick up their frames on campus</li>
            </ul>
          </div>

          {/* Item 4: END OF '26 (bottom right) */}
          <div className="absolute left-[81%] top-[55%] ml-2 w-[140px] text-white text-[14px]">
            <p className="font-bold mb-1 text-[13px] whitespace-nowrap">
              END OF '26 TO
            </p>
            <p className="font-bold mb-1 text-[13px]">START OF '27</p>
            <ul className="list-disc pl-4 text-[12px]">
              <li>Physical Yearbook delivered to your home</li>
            </ul>
          </div>
        </div>

        {/* MOBILE VERTICAL TIMELINE (<768px) */}
        <div className="md:hidden relative w-full max-w-[400px] mx-auto px-4">
          {/* Vertical main line down the center - adjust top-[Xpx] to start line higher/lower */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[-80px] bottom-0 w-[3px] bg-white" />
          
          {/* Timeline items with alternating horizontal lines */}
          
          {/* Item 1: DURING PICTORIALS (line to right, text on right) */}
          <div className="relative pt-8 pb-12 min-h-[180px]">
            {/* Top dot - adjust top-[Xpx] to move starting dot higher (use negative values) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[-80px] w-8 h-8 bg-white rounded-full border-[3px] border-white z-10" />
            {/* Junction dot (where horizontal line meets vertical) - adjust top-[X%] to move dot up/down */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[32%] w-8 h-8 bg-white rounded-full border-[3px] border-white z-10" />
            {/* Horizontal line to right - adjust top-[X%] to move line up/down, w-X to change length */}
            <div className="absolute left-1/2 top-[40%] w-12 h-[3px] bg-white" />
            {/* Text content on right - adjust top-[X%] to move vertically, ml-[calc(50%+Xrem)] to move horizontally */}
            <div className="absolute left-0 top-[-20%] ml-[calc(47%+4rem)] text-white text-[1.2rem]">
              <p className="font-bold mb-2">DURING PICTORIALS</p>
              <ul className="list-disc pl-5 space-y-1 text-[.8rem]">
                <li>Hair & Make-Up</li>
                <li>Live-editing</li>
                <li>
                  Additional P500 for the raw and edited files of all your
                  portraits (graduate, business, and creative)
                </li>
              </ul>
            </div>
          </div>

          {/* Item 2: 2 to 3 MONTHS (line to left, text on left) */}
          <div className="relative pb-12 min-h-[140px] mt-14 md:mt-0">
            {/* Dot - adjust top-[Xpx] or top-[X%] to move dot up/down */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[5%] w-8 h-8 bg-white rounded-full border-[3px] border-white z-10" />
            {/* Horizontal line to left - adjust top-[Xpx] or top-[X%] to move line up/down, w-X to change length */}
            <div className="absolute right-1/2 top-[15%] w-12 h-[3px] bg-white" />
            {/* Text content on left - adjust top-[Xpx] to move vertically, mr-[calc(50%+Xrem)] to move horizontally */}
            <div className="absolute right-0 top-[-50%] mr-[calc(44%+3.5rem)] text-right text-white text-[1.2rem]">
              <p className="font-bold mb-2 hidden md:block">
                2 to 3 MONTHS AFTER PICTORIALS
              </p>
              <p className="font-bold mb-2 text-left md:text-start">ONLINE VERIFICATION</p>
              <ul className="list-disc text-[.8rem] text-left md:text-start space-y-1">
                <li><strong>2 to 3 months after pictorials</strong></li>
                <li>Digital copy of the Graduate portrait</li>
              </ul>
            </div>
          </div>

          {/* Item 3: 3 to 4 MONTHS (line to right, text on right) */}
          <div className="relative pb-12 min-h-[160px] mt-14 md:mt-0">
            {/* Dot - adjust top-[Xpx] or top-[X%] to move dot up/down */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[10%] w-8 h-8 bg-white rounded-full border-[3px] border-white z-10" />
            {/* Horizontal line to right - adjust top-[Xpx] or top-[X%] to move line up/down, w-X to change length */}
            <div className="absolute left-1/2 top-[20%] w-12 h-[3px] bg-white" />
            {/* Text content on right - adjust top-[Xpx] to move vertically, ml-[calc(50%+Xrem)] to move horizontally */}
            <div className="absolute left-0 top-[-60%] ml-[calc(55%+3.5rem)] text-white text-[1.2rem]">
              <p className="font-bold mb-2 hidden md:block">
                3 to 4 MONTHS AFTER PICTORIALS
              </p>
              <p className="font-bold mb-2">RELEASING</p>
              <ul className="list-disc pl-5 space-y-1 text-[.8rem]">
                <li className="md:hidden"><strong>3 to 4 months after pictorials</strong></li>
                <li>The framed image together with all the printouts</li>
                <li>Subscribers must pick up their frames on campus</li>
              </ul>
            </div>
          </div>

          {/* Item 4: END OF '26 (line to left, text on left) */}
          <div className="relative pb-12 min-h-[120px] mt-14 md:mt-0">
            {/* Dot - adjust top-[Xpx] or top-[X%] to move dot up/down */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[-2%] w-8 h-8 bg-white rounded-full border-[3px] border-white z-10" />
            {/* Horizontal line to left - adjust top-[Xpx] or top-[X%] to move line up/down, w-X to change length */}
            <div className="absolute right-1/2 top-[10%] w-12 h-[3px] bg-white" />
            {/* Text content on left - adjust top-[Xpx] to move vertically, mr-[calc(50%+Xrem)] to move horizontally */}
            <div className="absolute right-0 top-[-50%] mr-[calc(50%+3.5rem)] text-right text-white text-[1.2rem]">
              <p className="font-bold mb-2 text-left">
                END OF 2026 TO START OF 2027
              </p>
              <ul className="list-disc text-left text-[.8rem] space-y-1">
                <li> Physical Yearbook delivered to your home</li>
              </ul>
            </div>
          </div>

          {/* Bottom dot */}
          <div className="relative pb-8">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-8 h-8 bg-white rounded-full border-[3px] border-white z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
