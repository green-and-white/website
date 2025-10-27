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
        <div className="flex items-end">
          <h3 className={`${styles.h3} ml-auto`} data-text="Timeline">
            Timeline
          </h3>
        </div>

        <div className="relative w-full max-w-[1075px] mx-auto">
          {/* CSS Grid approach for better alignment */}
          <div className="relative" style={{ height: '490px' }}>
            {/* Horizontal line - absolutely positioned */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[3px] bg-white flex items-center">
              {/* Dots positioned along the line */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full" />
              <div className="absolute left-[20%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full" />
              <div className="absolute left-[40%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full" />
              <div className="absolute left-[60%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full" />
              <div className="absolute left-[80%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full" />
            </div>

            {/* Item 1 - DURING PICTORIALS (top left) */}
            <div className="absolute left-[20%] bottom-[50%] flex flex-row items-end">
              <div className="w-[3px] bg-white shrink-0" style={{ height: 'calc(50% - 10px)' }} />
              <div className="text-white text-[17px] pl-4 pb-8 w-[195px]">
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
            </div>

            {/* Item 2 - 2-3 MONTHS AFTER (bottom middle-left) */}
            <div className="absolute left-[40%] top-[50%] flex flex-row items-start">
              <div className="w-[3px] bg-white shrink-0" style={{ height: 'calc(50% - 10px)' }} />
              <div className="text-white text-[17px] pl-4 pt-8 w-[200px]">
                <p className="font-bold mb-2 whitespace-nowrap">
                  2-3 MONTHS AFTER PICTORIALS
                </p>
                <p className="font-bold mb-2">ONLINE VERIFICATION</p>
                <ul className="list-disc pl-5">
                  <li>Digital copy of the Graduate portrait</li>
                </ul>
              </div>
            </div>

            {/* Item 3 - 3-4 MONTHS AFTER (top right) */}
            <div className="absolute left-[60%] bottom-[50%] flex flex-row items-end">
              <div className="w-[3px] bg-white shrink-0" style={{ height: 'calc(50% - 10px)' }} />
              <div className="text-white text-[17px] pl-4 pb-8 w-[230px]">
                <p className="font-bold mb-2 whitespace-nowrap">
                  3-4 MONTHS AFTER PICTORIALS
                </p>
                <p className="font-bold mb-2">RELEASING</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>The framed image together with all the printouts</li>
                  <li>Subscribers must pick up their frames on campus</li>
                </ul>
              </div>
            </div>

            {/* Item 4 - END OF '26 (bottom right) */}
            <div className="absolute left-[80%] top-[50%] flex flex-row items-start">
              <div className="w-[3px] bg-white shrink-0" style={{ height: 'calc(50% - 10px)' }} />
              <div className="text-white text-[17px] pl-4 pt-8 w-[180px]">
                <p className="font-bold mb-2 whitespace-nowrap">
                  END OF '26 TO START OF '27
                </p>
                <ul className="list-disc pl-5">
                  <li>Physical Yearbook delivered to your home</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
