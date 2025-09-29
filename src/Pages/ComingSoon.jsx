import DraggableItem from "../components/DraggableItem"; 
import logo_horizontal from "../assets/icons/horizontal.svg";
import logo_vertical from "../assets/icons/White-Vertical.svg"; 

// Stickers
import slip from "../assets/stickers/SLIP.webp";
import taft from "../assets/stickers/taft.webp";
import vc from "../assets/stickers/VC.webp";
import y1924 from "../assets/stickers/1924.webp";
import booklet from "../assets/stickers/BOOKLET.webp";
import cat from "../assets/stickers/CAT.webp";
import chair from "../assets/stickers/CHAIR.webp";
import grad from "../assets/stickers/GRAD.webp";
import id from "../assets/stickers/ID.webp";
import matcha from "../assets/stickers/MATCHA.webp";
import yearbook2026 from "../assets/stickers/YEARBOOK_2026.webp";

import background from "../assets/background.webp";
import styles from "./home.module.css";

import { useState, useEffect, useRef } from "react";


export default function ComingSoon() {
  const resetLayout = () => {
    items.forEach((i) => localStorage.removeItem(`drag:${i.id}`));
    window.location.reload();
  };
  
  const [lastItemIdx, setLastItemIdx] = useState(-1);
  const prevWidth = useRef(window.innerWidth);
  const contentRef = useRef(null); 
  const [items, setItems] = useState([{}]);
  const [windowSize, setWindowSize] = useState({
    w: window.innerWidth, 
    h: window.innerHeight 
  });

  const getScreenSize = (width) => {
    if (width > 1023) return "desktop";
    else if(width > 680) return "tablet";
    else if (width > 400) return "mobile";
    return "mobileS"; 
  };

  const [screenSize, setScreenSize] = useState(getScreenSize(window.innerWidth));

  // Sticker positions & sizes
  const stickers = {
    mobileS: {
      y1924:        { w: 90,  h: 80,   x: 0.78, y: 0.88 },
      cat:          { w: 100, h: 100,  x: 0.25, y: 0.58 },
      booklet:      { w: 110, h: 110,  x: 0.05, y: 0.75 },
      id:           { w: 100, h: 85,   x: 0.02, y: 0.48 },
      grad:         { w: 120, h: 100,  x: 0.42, y: 0.78 },
      matcha:       { w: 105, h: 120,  x: 0.78, y: 0.38 },
      slip:         { w: 100, h: 85,   x: 0.65, y: 0.82 },
      chair:        { w: 115, h: 120,  x: 0.08, y: 0.22 },
      taft:         { w: 105, h: 85,   x: 0.22, y: 0.18 },
      vc:           { w: 110, h: 90,   x: 0.62, y: 0.18 },
      yearbook2026: { w: 110, h: 100,  x: 0.43, y: 0.35 },
    },

    mobile: {
      y1924:        { w: 120, h: 100,  x: 0.80, y: 0.88 },
      cat:          { w: 140, h: 140,  x: 0.25, y: 0.60 },
      booklet:      { w: 150, h: 150,  x: 0.08, y: 0.75 },
      id:           { w: 120, h: 100,  x: 0.02, y: 0.50 },
      grad:         { w: 160, h: 130,  x: 0.42, y: 0.78 },
      matcha:       { w: 140, h: 160,  x: 0.80, y: 0.40 },
      slip:         { w: 130, h: 110,  x: 0.65, y: 0.80 },
      chair:        { w: 150, h: 150,  x: 0.08, y: 0.25 },
      taft:         { w: 120, h: 100,  x: 0.25, y: 0.19 },
      vc:           { w: 150, h: 120,  x: 0.63, y: 0.19 },
      yearbook2026: { w: 150, h: 130,  x: 0.43, y: 0.38 },
    },

    tablet: {
      y1924:        { w: 150, h: 120,  x: 0.82, y: 0.88 },
      cat:          { w: 180, h: 180,  x: 0.26, y: 0.62 },
      booklet:      { w: 190, h: 190,  x: 0.08, y: 0.77 },
      id:           { w: 150, h: 120,  x: 0.02, y: 0.52 },
      grad:         { w: 210, h: 170,  x: 0.44, y: 0.78 },
      matcha:       { w: 170, h: 190,  x: 0.80, y: 0.42 },
      slip:         { w: 170, h: 130,  x: 0.65, y: 0.80 },
      chair:        { w: 190, h: 190,  x: 0.08, y: 0.25 },
      taft:         { w: 170, h: 130,  x: 0.25, y: 0.10 },
      vc:           { w: 190, h: 150,  x: 0.63, y: 0.10 },
      yearbook2026: { w: 190, h: 160,  x: 0.43, y: 0.18 },
    },

    desktop: {
      y1924:        { w: 190, h: 160,  x: 0.83, y: 0.95 },
      cat:          { w: 200, h: 200,  x: 0.28, y: 0.64 },
      booklet:      { w: 220, h: 220,  x: 0.1, y: 0.75 },
      id:           { w: 200, h: 150,  x: 0, y: 0.55 },
      grad:         { w: 260, h: 200,  x: 0.45, y: 0.77 },
      matcha:       { w: 170, h: 220,  x: 0.80, y: 0.45 },
      slip:         { w: 190, h: 140,  x: 0.65, y: 0.77  },
      chair:        { w: 230, h: 220,  x: 0.08, y: 0.25 },
      taft:         { w: 180, h: 130,   x: 0.25, y: 0.1  },
      vc:           { w: 240, h: 180,   x: 0.63, y: 0.1  },
      yearbook2026: { w: 220, h: 200,  x: 0.43, y: 0.15  },
    },
  };

  useEffect(() => {
    if (contentRef.current) {
      const bounds = contentRef.current.getBoundingClientRect();
      const baseW = bounds.width;
      const baseH = bounds.height;

      const items = Object.entries(stickers[screenSize]).map(([key, val], idx) => ({
        id: key,
        src: { y1924, cat, booklet, id, grad, matcha, slip, chair, taft, vc, yearbook2026 }[key],
        w: val.w,
        h: val.h,
        start: { x: baseW * val.x, y: baseH * val.y },
        alt: key,
      }));

      setItems(items);
    }
  }, [contentRef, screenSize]);

  useEffect(() => {
    const handleResize = () => {
      const currWidth = window.innerWidth; 
      const currHeight = window.innerHeight;
      if (getScreenSize(currWidth) !== getScreenSize(prevWidth.current)) {
        setScreenSize(getScreenSize(currWidth));
        setWindowSize({ w: currWidth, h: currHeight });
        resetLayout();
      }
      prevWidth.current = currWidth;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <main className="relative h-[100dvh] flex flex-col justify-between overflow-hidden text-gray-800">
      {/* Background image */}
      <section className={styles.background}
               style={{ backgroundImage: `url(${background})` }}>
      </section>

      {/* Logo at top center */}
      <div className="z-40 pointer-events-none inset-x-0 flex justify-center pt-6">
        <img
          src={screenSize.includes("mobile") ? logo_vertical : logo_horizontal}
          alt="Green & White"
          className={`${screenSize.includes("mobile")? "h-16" : "h-14"} select-none z-[200]`}
        />
      </div>

      <div className="content flex-1" ref={contentRef}>
        {/* Hero text center */}
        <section 
          aria-label="Coming soon message"
          className="h-full pointer-events-none inset-0 flex flex-col items-center justify-center gap-3 md:gap-6 text-center z-50">
          <h1
            className={`font-extrabold ${styles.CTA} leading-tight max-w-[249px] md:max-w-full tracking-normal
                       bg-clip-text text-[#D9B350] font-libre-caslon`}
            style={{zIndex:500}}>
            Keep your memories alive.
          </h1>

          <a
            className="pointer-events-auto z-50"
            href="https://forms.gle/your-prereg-form"
            target="_blank"
            rel="noreferrer"
          >
            <div className={`${styles.glassCard} text-sm md:text-base p-3 md:p-5 text-white font-helvetica`}>
              Pre-register now
            </div>
          </a>
        </section>

        {/* Draggable objects */}
        {items.map((it, index) => (
          <DraggableItem  
            id={it.id} 
            keyIdx={index} 
            key={index} 
            start={it.start} 
            lastItemIdx={lastItemIdx}
            setLastItemIdx={setLastItemIdx}
            index={index}
          >
            <figure className="m-0 flex flex-col items-center text-center">
              <img
                src={it.src}
                alt={it.alt}
                style={{ width: `${it.w}px`, height: `${it.h}px` }}
                className="m-0 block select-none"
                draggable={false}
              />
            </figure>
          </DraggableItem>
        ))}
      </div>  

      {/* Footer */}
      <footer className={`z-40 bg-[rgba(0,0,0,0.2)] text-white text-center py-4 px-8 shadow-lg ${styles.glassCardFooter}`}>
        <h1 className="text-2xl md:text-4xl py-2 font-bold opacity-90 z-100">COMING SOON</h1>
        <div className="mt-1 text-xs pb-2 md:text-base opacity-90">
          Website by <strong>Ramon Enrico Martinez</strong>, <strong>Johan Mario Cabili</strong>, &amp; <strong>Danielle Ang</strong>
        </div>
      </footer>
    </main>
  );
}
