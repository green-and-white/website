import styles from "../Primer.module.css";
import texture from "../../../assets/textures/texture.png";

import Calendar from "./Calendar";


function Notes(){
  return(
    <>
      <div className="text-white font-helvetica py-4 lg:pl-4 lg:border-t lg:border-b flex flex-col lg:justify-center">
        <h1 className="text-2xl font-bold mb-4"
            style={{color: '#FFFFFF',
            WebkitTextStrokeColor: '#000',
            WebkitTextStrokeWidth: '4px',
            paintOrder: 'stroke fill'}}>
          NOTES
        </h1>
        
        <ul className="pl-6 list-disc list-inside space-y-3 md:text-base lg:text-[20px] helvetica">
          <li style = {{textShadow: '1.5px 1.5px 4px rgba(0, 0, 0, 1)'}}>Students with 4 terms or less are eligible for the yearbook.</li>

          <li style = {{textShadow: '1.5px 1.5px 4px rgba(0, 0, 0, 1)'}}>
            The completion of registration will require coming on-site. In the event that you cannot complete the onsite registration, you may authorize someone on your behalf to accomplish the step for you.
          </li>
          
          <li style = {{textShadow: '1.5px 1.5px 4px rgba(0, 0, 0, 1)'}}>
            We suggest allotting 30 minutes to complete the entire registration, including the payment.
          </li>

          <li style = {{textShadow: '1.5px 1.5px 4px rgba(0, 0, 0, 1)'}}>
            There is a pre-registration process, which will allow you to pre-fill your information beforehand to expedite the process on-site. However, registration must still be verified at the <strong>Green & White</strong> booth.
            <div className="mt-5 mb-2">
              <a 
                href="https://forms.gle/xNBJWFrup67DRsjP8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#ffe66d] text-black font-bold uppercase tracking-wider py-3 px-8 rounded-[20px] border-[3px] border-black shadow-[0_4px_4px_rgba(0,0,0,0.5)] hover:-translate-y-1 hover:shadow-[0_6px_8px_rgba(0,0,0,0.5)] transition-all duration-200 no-underline"
                style={{ textShadow: "none" }}
              >
                Access Pre-registration Forms
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default function HeroSection() {
  return (
    <section className={`${styles.primerHero}  min-h-screen flex flex-col pt-20 pb-0 `}
            id="hero">
      <div className={`${styles.heroInner} flex items-center justify-center`}>
        <h2 className={`${styles.h2}`} data-text="Registration">
          Registration Guidelines
        </h2>
      </div>
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8 lg:gap-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10">
          <Calendar />
          {/* Notes */}
          <Notes />
        </div>
        
      <img
        src={texture}
        alt=""
        aria-hidden="true"
        className={styles.primerTexture}
      />
    </section>
  );
}
