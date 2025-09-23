import DraggableItem from "./components/DraggableItem";
import logo from "./assets/icons/horizontal.svg";
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
import { useState, useEffect} from "react";



export default function ComingSoon() {
  const resetLayout = () => {
    items.forEach((i) => localStorage.removeItem(`drag:${i.id}`));
    window.location.reload();
  };
  
  const [lastItemIdx, setLastItemIdx] = useState(-1);
  const [windowSize, setWindowSize] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });

  
  const items = [
    { id: "obj1", src: i26, w: 130, h: 100, start: { x: windowSize.w * 0.8, y: windowSize.h * 0.04 }, alt: "26" },     
    { id: "obj4", src: cat, w: 200, h: 200, start: { x: windowSize.w * 0.82, y: windowSize.h * 0.60 }, alt: "Cat" },     
    { id: "obj5", src: chappy, w: 150, h: 150, start: { x: windowSize.w * 0.13, y: windowSize.h * 0.36 }, alt: "Chappy" },
    { id: "obj6", src: id, w: 100, h: 140, start: { x: windowSize.w * 0.05, y: windowSize.h * 0.4 }, alt: "ID" },      
    { id: "obj7", src: paper, w: 250, h: 180, start: { x: windowSize.w * 0.05, y: windowSize.h * 0.65 }, alt: "Paper" }, 
    { id: "obj11", src: ticket, w: 100, h: 300, start: { x: windowSize.w * 0.86, y: windowSize.h * 0.2 }, alt: "Ticket" }, 
    { id: "obj12", src: beep, w: 260, h: 150, start: { x: windowSize.w * 0.58, y: windowSize.h * 0.6 }, alt: "Beep" },  
    { id: "obj13", src: chair, w: 180, h: 220, start: { x: windowSize.w * 0.10, y: windowSize.h * 0.04 }, alt: "Chair" }, 
    { id: "obj14", src: slip, w:200, h:200, start: { x: windowSize.w * 0.69, y: windowSize.h * 0.66 }, alt: "Slip" },   
  ];

  return (
    <main className="relative h-screen overflow-hidden text-gray-800">
      {/* Background image */}
      <section className="background"></section>

      <section className="content z-1">
        {/* Logo at top center */}
        <div className="pointer-events-none fixed inset-x-0 top-4  flex justify-center">
          <img
            src={logo}
            alt="Green & White"
            className="h-12 drop-shadow-md select-none z-[200]"
          />
        </div>

        {/* Hero text center */}
        <section
          aria-label="Coming soon message"
          className="pointer-events-none fixed inset-0 flex flex-col items-center justify-center gap-3 text-center z-50"
        >

          <h1
            className="font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight
                       bg-clip-text text-[#D9B350] drop-shadow-sm font-libre-caslon z-50"
            style={{zIndex:500}}
          >
            Keep your memories alive.
          </h1>

          <a
            className="pointer-events-auto liquid-glass py-4 px-6 text-white font-helvetica"
            href="https://forms.gle/your-prereg-form"
            target="_blank"
            rel="noreferrer"
          >
            Pre-register now
          </a>

        </section>

        {/* Draggable objects */}
        {items.map((it, index) => (
          <DraggableItem key={it.id} id={it.id} start={it.start} 
                          lastItemIdx = {lastItemIdx}
                          setLastItemIdx={setLastItemIdx}
                          index={index}
                          >
            <figure className={`m-0 flex flex-col items-center text-center `}>
              <img
                src={it.src}
                alt={it.alt}
                style={{ 
                  width: `${it.w}px`,
                  height: `${it.h}px`,
                }}
                className={`m-0 block select-none`}
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

        {/* Footer */}
        <footer className="fixed inset-x-0 bottom-0 bg-[rgba(0,0,0,0.2)] text-white text-center py-4 shadow-lg">
          <h1 className="text-2xl font-bold">COMING SOON</h1>
          <div className="mt-1 text-xs opacity-90">
            Website by Ramon Enrico Martinez, Johan Mario Cabili, &amp; Danielle
            Ang
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
      </section>
    </main>
  );
}