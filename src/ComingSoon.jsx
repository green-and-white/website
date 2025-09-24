import DraggableItem from "./components/DraggableItem";
import logo_horizontal from "./assets/icons/horizontal.svg";
import logo_vertical from "./assets/icons/logo.svg"; //replace with revised
import sample from "./assets/images/sample.png";
import folder from "./assets/images/folder.png";

import i26 from "./assets/stickers/26.webp";
import cat from "./assets/stickers/cat.webp";
import chappy from "./assets/stickers/chappy.webp";
import id from "./assets/stickers/id.webp";
import paper from "./assets/stickers/paper.webp";
import slip from "./assets/stickers/slip.webp";
import ticket from "./assets/stickers/ticket.webp";
import beep from "./assets/stickers/beep.webp";
import chair from "./assets/stickers/chair.webp";

import svg from "./assets/svg.svg";
import { useState, useEffect, useRef } from "react";




export default function ComingSoon() {
  const resetLayout = () => {
    items.forEach((i) => localStorage.removeItem(`drag:${i.id}`));
    window.location.reload();
  };
  
  const [lastItemIdx, setLastItemIdx] = useState(-1);
  const prevWidth = useRef(window.innerWidth)
  const contentRef = useRef(null); 
  const [contentSize, setContentSize] = useState({ w: 0, h: 0 });
  const [items, setItems] = useState([{}]);
  const [windowSize, setWindowSize] = useState({
    w: window.innerWidth, 
    h: window.innerHeight 
  });

  const getScreenSize = (width) => {
    if (width > 1023)
      return "desktop"
    else if(width > 680)
      return "tablet"
    else if (width > 400)
      return "mobile"
    return "mobileS"; 
  }

  const [screenSize, setScreenSize] = useState(getScreenSize(window.innerWidth));

  const stickers = {
    mobileS: {
      i26:    { w: 42,  h: 42,   x: 0.75, y: 0.85 },
      cat:    { w: 0,   h: 0,    x: 0.8,  y: 0.6  }, // unchanged
      chappy: { w: 77,  h: 77,   x: 0.7, y: 0.25 },
      paper:  { w: 105, h: 84,   x: 0.03, y: 0.95 },
      id:     { w: 49,  h: 70,   x: 0.05, y: 0.87 },
      ticket: { w: 0,   h: 0,    x: 0.80, y: 0.18 }, // unchanged
      beep:   { w: 84,  h: 56,   x: 0.64,  y: 1  },
      chair:  { w: 85,  h: 95,  x: 0.05, y: 0.2  },
      slip:   { w: 70,  h: 70,   x: 0.75, y: 0.95  },
    },
    mobile: {
      i26:   { w: 60,  h: 60,  x: 0.75, y: 0.70 },
      cat:   { w: 0, h: 0, x: 0.8, y: 0.6 },
      chappy:{ w: 120,  h: 120,  x: 0.67, y: 0.25 },
      paper: { w: 150, h: 120,  x: 0.03, y: 0.85 },
      id:    { w: 70,  h: 100,  x: 0.05, y: 0.77 },
      ticket:{ w: 0,  h: 0, x: 0.80, y: 0.18 },
      beep:  { w: 120, h: 80,  x: 0.6, y: 0.9 },
      chair: { w: 130, h: 150, x: 0.05, y: 0.2 },
      slip:  { w: 100, h: 100, x: 0.72, y: 0.8 },
    },
    tablet: {
      i26:   { w: 100, h: 80,  x: 0.78, y: 0.1 },
      cat:   { w: 120, h: 120, x: 0.8, y: 0.45 },
      chappy:{ w: 90, h: 90, x: 0.2, y: 0.77 },
      id:    { w: 80,  h: 110, x: 0.03, y: 0.8 },
      paper: { w: 140, h: 100, x: 0.07, y: 1 },
      ticket:{ w: 80, h: 200, x: 0.82, y: 0.6 },
      beep:  { w: 150, h: 100, x: 0.62, y: 0.85 },
      chair: { w: 110, h: 140, x: 0.06, y: 0.07 },
      slip:  { w: 140, h: 140, x: 0.74, y: 0.9 },
    },
    desktop: {
      i26:    { w: 130, h: 100, x: 0.78, y: 0.10 },
      cat:    { w: 200, h: 200, x: 0.80, y: 0.45 },
      chappy: { w: 150, h: 150, x: 0.11, y: 0.56 },
      id:     { w: 100, h: 140, x: 0.03, y: 0.65 },
      paper:  { w: 250, h: 180, x: 0.07, y: 0.8 },
      ticket: { w: 100, h: 300, x: 0.82, y: 0.60 },
      beep:   { w: 260, h: 150, x: 0.62, y: 0.85 },
      chair:  { w: 180, h: 220, x: 0.06, y: 0.07 },
      slip:   { w: 200, h: 200, x: 0.74, y: 0.90 },
    },
  };
  
  useEffect(() => {
    if (contentRef.current){
      const bounds = contentRef.current.getBoundingClientRect();
    
      const baseW = bounds.width;
      const baseH = bounds.height;

      const items = [
        { id: "obj1",  src: i26,    w: stickers[screenSize].i26.w,    h: stickers[screenSize].i26.h,    start: { x: baseW * stickers[screenSize].i26.x,    y: baseH * stickers[screenSize].i26.y },    alt: "26" },     
        { id: "obj4",  src: cat,    w: stickers[screenSize].cat.w,    h: stickers[screenSize].cat.h,    start: { x: baseW * stickers[screenSize].cat.x,    y: baseH * stickers[screenSize].cat.y },    alt: "Cat" },     
        { id: "obj5",  src: chappy, w: stickers[screenSize].chappy.w, h: stickers[screenSize].chappy.h, start: { x: baseW * stickers[screenSize].chappy.x, y: baseH * stickers[screenSize].chappy.y }, alt: "Chappy" },
        { id: "obj7",  src: paper,  w: stickers[screenSize].paper.w,  h: stickers[screenSize].paper.h,  start: { x: baseW * stickers[screenSize].paper.x,  y: baseH * stickers[screenSize].paper.y },  alt: "Paper" }, 
        { id: "obj6",  src: id,     w: stickers[screenSize].id.w,     h: stickers[screenSize].id.h,     start: { x: baseW * stickers[screenSize].id.x,     y: baseH * stickers[screenSize].id.y },     alt: "ID" },      
        { id: "obj11", src: ticket, w: stickers[screenSize].ticket.w, h: stickers[screenSize].ticket.h, start: { x: baseW * stickers[screenSize].ticket.x, y: baseH * stickers[screenSize].ticket.y }, alt: "Ticket" }, 
        { id: "obj12", src: beep,   w: stickers[screenSize].beep.w,   h: stickers[screenSize].beep.h,   start: { x: baseW * stickers[screenSize].beep.x,   y: baseH * stickers[screenSize].beep.y },   alt: "Beep" },  
        { id: "obj13", src: chair,  w: stickers[screenSize].chair.w,  h: stickers[screenSize].chair.h,  start: { x: baseW * stickers[screenSize].chair.x,  y: baseH * stickers[screenSize].chair.y },  alt: "Chair" }, 
        { id: "obj14", src: slip,   w: stickers[screenSize].slip.w,   h: stickers[screenSize].slip.h,   start: { x: baseW * stickers[screenSize].slip.x,   y: baseH * stickers[screenSize].slip.y },   alt: "Slip" },   
      ];
      setItems(items);
    }
  }, [contentRef])
  useEffect(() => {
    const handleResize = () => {
      const currWidth = window.innerWidth; 
      const currHeight = window.innerHeight;
      //use currWidth as parameters to get screen size
        //if the same screen, dont change state 
        //if diff screen, change state according to prevwidth
        //update prev width ref with current width 
      if (getScreenSize(currWidth) != getScreenSize(prevWidth.current)){
        setScreenSize(getScreenSize(currWidth));
        setWindowSize({ w: currWidth, h: currHeight });
        resetLayout();
      }
      prevWidth.current = currWidth;
      
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 // console.log(items[0]);
  
  return (
    
    <main className="relative h-screen flex flex-col justify-between overflow-hidden text-gray-800 pt-4">
      {/* Background image */}
      <section className="background"></section>

       {/* Logo at top center */}
       <div className="pointer-events-none inset-x-0 flex justify-center">
          <img
            src={screenSize.includes("mobile") ? logo_vertical : logo_horizontal}
            alt="Green & White"
            className="h-14 drop-shadow-md select-none z-[200]"
          />
        </div>

      <div className="content flex-1" ref={contentRef}>
       
        {/* Hero text center */}
        <section 
          aria-label="Coming soon message"
          className="h-full pointer-events-none inset-0 flex flex-col items-center justify-center gap-3 text-center z-50">
          <h1
            className="font-extrabold CTA leading-tight max-w-[249px] md:max-w-full 
                       bg-clip-text text-[#D9B350] font-libre-caslon z-50"
            style={{zIndex:500}}>
            Keep your memories alive.
          </h1>

          <a
            className="pointer-events-auto liquid-glass"
            href="https://forms.gle/your-prereg-form"
            target="_blank"
            rel="noreferrer"
          >
              <div class="text-xl glass-card p-5 text-white font-helvetica">Pre-register now</div>
          </a>

        </section>

        {/* Draggable objects */}
        {items.map((it, index) => (
          <DraggableItem key={it.id} id={it.id} start={it.start} 
                          lastItemIdx = {lastItemIdx}
                          setLastItemIdx={setLastItemIdx}
                          index={index}
                          >
            <figure className={`m-0 flex flex-col items-center text-center`}>
              <img
                src={it.src}
                alt={it.alt}
                style={{ 
                  width: `${it.w}px`,
                  height: `${it.h}px`,
                }}
                className={`m-0 block select-none drop-shadow-2xl`}
                draggable={false}
              />
              {it.label && (
                <figcaption className="mt-1 text-xs text-gray-800 break-words leading-tight max-w-[80px]">
                  {it.label}
                </figcaption>
              )}
            </figure>
          </DraggableItem>
        ))}
      </div>  
        {/* Footer */}
        <footer className="bg-[rgba(0,0,0,0.2)] text-white text-center py-4 shadow-lg glass-card-footer">
          <h1 className="text-2xl md:text-4xl font-bold opacity-90 z-100">COMING SOON</h1>
          <div className="mt-1 text-xs md:text-base opacity-90">
            Website by <strong>Ramon Enrico Martinez</strong>, <strong>Johan Mario Cabili</strong>, &amp; <strong>Danielle
            Ang </strong>
          </div>
          {/* 
          <button
            onClick={resetLayout}
            className="absolute right-3 top-3 rounded-md bg-white px-3 py-1 text-[#2a67a7] shadow"
          >
            Reset layout
          </button> 
          */}
        </footer>
      
    </main>
  );
}