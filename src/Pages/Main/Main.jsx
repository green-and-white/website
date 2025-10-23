import henryBackground from "@/assets/home_page/henry.webp";
import cardboardBackground from "@/assets/home_page/cardboard_bg.png";
import whiteVertical from "@/assets/logos_updated/white-vertical.svg";
import whiteHorizontal from "@/assets/logos_updated/white-horizontal.svg";
import audiHallBackground from "@/assets/home_page/audi_hall.jpg";
import caveBackground from "@/assets/home_page/cave.jpg";
import skyBackground from "@/assets/home_page/sky.webp";
import styles from "./home.module.css";
import gwYearSticker from '@/assets/stickers/1924.webp';
import yearbookSticker from '@/assets/stickers/YEARBOOK_2026.webp';
import catSticker from '@/assets/stickers/cat.webp';
import chappySticker from '@/assets/stickers/chappy.png';
import yearbookClaiming from '@/assets/yearbook_claiming.jpg'
import Countdown from 'react-countdown'
import YearBookActivitiesCard from '@/components/YearBookActivitiesCard'
import taftSticker from '@/assets/stickers/taft.png'
import cameraSticker from '@/assets/stickers/camera.png'
import model1 from '@/assets/stickers/model1.png'
import model2 from '@/assets/stickers/model2.png'
import laptopSticker from '@/assets/stickers/laptop.png'
import vitoCruzSticker from '@/assets/stickers/VC2.webp'


export default function Main() {
  const targetTime = new Date('2025-11-05T00:00:00');
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="font-libre-caslon text-center">
        <div className="flex justify-center items-center text-3xl font-bold gap-12 text-white">
          <div className="flex flex-col items-center">
            <span>{days}</span>
            <span className="text-sm mt-1">Days</span>
          </div>
          <div className="flex flex-col items-center mx-2">
            <span>:</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{hours}</span>
            <span className="text-sm mt-1">Hours</span>
          </div>
          <div className="flex flex-col items-center mx-2">
            <span>:</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{minutes}</span>
            <span className="text-sm mt-1">Minutes</span>
          </div>
          <div className="flex flex-col items-center mx-2">
            <span>:</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{seconds}</span>
            <span className="text-sm mt-1">Seconds</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className='relative'>
      {/* Henry Section */}
      <section className={styles.henry} style={{ backgroundImage: `url(${henryBackground})` }}>
        <img src={whiteHorizontal} alt="whiteHorizontal" className={styles.whiteHorizontal} />
        <div className="h-full pointer-events-none mt-36 justify-center text-center">
          <h1 className={`font-extrabold ${styles.CTA} text-[#D9B350] font-libre-caslon`} style={{ zIndex: 500 }}>
            Keep your memories alive.
          </h1>
          <div className={`mt-10 flex justify-center gap-8 ${styles.glass}`}>
            <a
              className="pointer-events-auto z-50"
              href="https://forms.gle/xNBJWFrup67DRsjP8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${styles.glassCard} cursor-pointer transition transform duration-200 ease-in-out hover:scale-105 hover:bg-white/20 border border-white/50`}>
                Pre-register now
              </div>
            </a>
            <a
              className="pointer-events-auto z-50"
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${styles.glassCard} cursor-pointer transition transform duration-200 ease-in-out hover:scale-105 hover:bg-white/20 border border-white/50`}>
                View the registration primer
              </div>
            </a>
          </div>
        </div>

        <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none' }}>
          <img src={gwYearSticker} alt="sticker-1" className="w-28 h-28" style={{ top: 400, left: 1000, position: 'absolute' }} />
          <img src={yearbookSticker} alt="sticker-2" className="w-28 h-28" style={{ top: 100, left: 250, position: 'absolute' }} />
          <img src={catSticker} alt="sticker-3" className="w-28 h-28" style={{ top: 370, left: 200, position: 'absolute' }} />
          <img src={chappySticker} alt="sticker-4" className="w-28 h-28" style={{ top: 150, left: 1000, position: 'absolute' }} />
        </div>
      </section>

      {/* Cardboard Section */}
      <section className={styles.cardboard} style={{ backgroundImage: `url(${cardboardBackground})` }}>
        <img src={whiteVertical} alt="whiteVertical" className={styles.whiteVertical} />
        <div className={`${styles.description} text-white`}>
          <strong>Green & White</strong> is the official yearbook publication of De La Salle University.
          Celebrating its 101st year, the publication lives as the record-keeper of Lasallian memories.
          From portraits to pages, <strong>Green & White</strong> brings the Lasallian community together
          and etches their place in time through the yearbook.
        </div>
      </section>

      {/* Audihall Section */}
      <section className={styles.audihall} style={{ backgroundImage: `url(${audiHallBackground})` }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
          <img
            src={yearbookClaiming}
            alt="Yearbook Claiming"
            className="w-xs shadow-lg m-8"
          />
          <p className="max-w-xl mt-4 text-lg opacity-90">
            See the guidelines here: <a href="https://docs.google.com/document/d/e/2PACX-1vT6Os-uhqgMJFBJaFj7zfLa-PCThoT9Y5qqknTXqmRW6MNnuIa8QLlFU0YXnlRH05wDDkHrr9h4d3jL/pub"><u>bit.ly/gwyearbookclaiming</u></a>
          </p>
        </div>
      </section>
      
      {/*Cave Section*/}
      <section className={styles.cave} style={{ backgroundImage: `url(${caveBackground})` }}>
        <div className="font-helvetica flex justify-center font-bold text-3xl m-20 text-white" style={{WebkitTextStroke: "1px black"}}>YEARBOOK ACTIVITIES</div>
        <div className="flex justify-center gap-12 mt-32">
          <YearBookActivitiesCard bgColor="bg-sky-400" activity="Registration"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."/>
          <YearBookActivitiesCard bgColor="bg-teal-400" activity="Pictorials"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."/>
          <YearBookActivitiesCard bgColor="bg-orange-300" activity="Online Verification"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."/>
          <YearBookActivitiesCard bgColor="bg-yellow-200" activity="Releasing"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."/>
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none' }}>
          <img src={laptopSticker} alt="sticker-5" className="w-36 h-28 -rotate-20" style={{ top: 180, left: 600, position: 'absolute' }} />
          <img src={cameraSticker} alt="sticker-6" className="w-36 h-24 -rotate-15" style={{ top: 470, left: 310, position: 'absolute' }} />
          <img src={taftSticker} alt="sticker-7" className="w-28 h-28 -rotate-25" style={{ top: 200, left: 45, position: 'absolute' }} />
          <img src={model1} alt="sticker-8" className="w-22 h-28" style={{ top: 450, left: 620, position: 'absolute' }} />
          <img src={model2} alt="sticker-9" className="w-22 h-28" style={{ top: 450, left: 860, position: 'absolute' }} />
          <img src={vitoCruzSticker} alt="sticker-10" className="w-28 h-28 rotate-15" style={{ top: 190, left:1100, position: 'absolute' }} />
        </div>
      </section>
      
      {/*Sky Section*/}
      <section className={styles.sky} style={{ backgroundImage: `url(${skyBackground})` }}>
        <h1 className={`font-extrabold text-[#D9B350] font-libre-caslon flex justify-center mt-16 text-5xl`} style={{ zIndex: 500 }}>
          Ready to be part of the yearbook?
        </h1>
        <div className="flex justify-center mt-28">
          <Countdown date={targetTime} renderer={renderer}/>
        </div>
        <div className="text-white font-libre-caslon flex justify-center mt-6 mb-24 text-xl">
          Until registration proper begins!
        </div>
        <div className="text-white font-libre-caslon flex justify-center text-2xl">
          Calling all students with 4 terms or less to pre-register and register!
        </div>
        <div className={`mt-3 flex justify-center gap-8 ${styles.glass}`}>
            <a
              className="pointer-events-auto z-50"
              href="https://forms.gle/xNBJWFrup67DRsjP8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${styles.glassCard} cursor-pointer transition transform duration-200 ease-in-out hover:scale-105 hover:bg-white/20 border border-white/50`}>
                Pre-register now
              </div>
            </a>
            <a
              className="pointer-events-auto z-50"
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${styles.glassCard} cursor-pointer transition transform duration-200 ease-in-out hover:scale-105 hover:bg-white/20 border border-white/50`}>
                View the registration primer
              </div>
            </a>
          </div>
      </section>
    </main>
  );
}
