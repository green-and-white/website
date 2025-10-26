import React from 'react'

import styles from '../../home.module.css'


import caveBackground from "@/assets/home_page/cave.jpg";

import model1 from '@/assets/stickers/model1.png'
import model2 from '@/assets/stickers/model2.png'
import laptopSticker from '@/assets/stickers/laptop.png'
import cameraSticker from '@/assets/stickers/camera.png'
import vitoCruzSticker from '@/assets/stickers/VC2.webp'
import taftSticker from '@/assets/stickers/taft.png'

import YearBookActivitiesCard from '@/components/YearBookActivitiesCard'



export default function YearbookActivities() {
  return (
    <>
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
    </>
  )
}
