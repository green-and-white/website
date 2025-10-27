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
        
        <ul className="pl-6 list-disc list-inside space-y-3 text-sm md:text-base lg:text-[20px] helvetica">
          <li>Students with 4 terms or less are eligible for the yearbook.</li>
          
          <li>
            The completion of registration will require coming on-site. In the event that you cannot complete the onsite registration, you may authorize someone on your behalf to accomplish the step for you.
          </li>
          
          <li>
            We suggest allotting 30 minutes to complete the entire registration, including the payment.
          </li>
          
          <li>
            There is a pre-registration process, which will allow you to pre-fill your information beforehand to expedite the process on-site. However, registration must still be verified at the Green & White booth. Access the forms here: 
            <a href="https://forms.gle/xNBJWFrup67DRsjP8"> Pre-registration Forms</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default function HeroSection() {
  return (
    <section className={`${styles.primerHero}  min-h-screen flex flex-col pt-8 pb-0`}>
      <div className={`${styles.heroInner} flex justify-between`}>
        <h2 className={styles.h2} data-text="Registration">
          Registration
        </h2>
        <h3 className={styles.h3} data-text="Guidelines">
          Guidelines
        </h3>
      </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10">
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
