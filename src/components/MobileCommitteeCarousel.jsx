import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Orb from "./Orb.jsx";

export default function MobileCommitteeCarousel({ committees = [] }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [containerWidth, setContainerWidth] = useState(0);
  const [index, setIndex] = useState(1); // start at first real slide
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [uniformHeight, setUniformHeight] = useState(null);
  const [measured, setMeasured] = useState(true);
  const MIN_CARD_HEIGHT = 280; // a bit taller for more text
  const MAX_CARD_HEIGHT = 320; // allow more text before scroll

  // Build slides with clones for infinite loop
  const slides = useMemo(() => {
    if (committees.length === 0) return [];
    const first = committees[0];
    const last = committees[committees.length - 1];
    return [last, ...committees, first];
  }, [committees]);

  // widths (wider slides; neighbors barely visible but still peeking)
  const sidePadding = 0; // let viewport edges perform the clipping (no internal padding)
  const gap = 12; // gap between slides in px
  const slideWidth = Math.round(containerWidth * 0.8 - gap); // 80% width -> larger peeks
  // Center the current slide so both left and right peeks are visible
  const translateX = Math.round(containerWidth / 2 - (sidePadding + index * (slideWidth + gap) + slideWidth / 2));

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      setContainerWidth(containerRef.current.clientWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Measure tallest card and apply uniform height so sizes are consistent
  const measureHeights = useCallback(() => {
    const heights = (cardRefs.current || [])
      .map((el) => (el && el.offsetHeight) || 0)
      .filter((h) => h > 0);
    if (heights.length) {
      const max = Math.max(...heights);
      const clamped = Math.max(MIN_CARD_HEIGHT, Math.min(max, MAX_CARD_HEIGHT));
      setUniformHeight(clamped);
      setMeasured(true);
    }
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(measureHeights);
    return () => cancelAnimationFrame(id);
  }, [slides, containerWidth, measureHeights]);

  // Re-measure after webfonts load (prevents inconsistent heights on first paint)
  useEffect(() => {
    if (document && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        requestAnimationFrame(measureHeights);
      });
    }
  }, [measureHeights]);

  // Observe card size changes to keep uniform height accurate
  useEffect(() => {
    if (typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(() => measureHeights());
    cardRefs.current.forEach((el) => el && ro.observe(el));
    return () => ro.disconnect();
  }, [slides, measureHeights]);

  // Handle transition end for infinite loop
  const onTransitionEnd = () => {
    setIsTransitioning(false);
    const n = slides.length;
    if (n <= 2) return;
    if (index === 0) {
      // moved to clone of last -> jump to last real
      setIndex(n - 2);
    } else if (index === n - 1) {
      // moved to clone of first -> jump to first real
      setIndex(1);
    }
  };

  const canNavigate = slides.length > 1 && slideWidth > 0;

  const next = () => {
    if (!canNavigate || isTransitioning) return;
    setIsTransitioning(true);
    setIndex((i) => i + 1);
  };

  const prev = () => {
    if (!canNavigate || isTransitioning) return;
    setIsTransitioning(true);
    setIndex((i) => i - 1);
  };

  // Keyboard nav (optional)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      ref={containerRef}
      style={{ width: "100vw", marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)" }}
    >
      {/* Track */}
      <div
        ref={trackRef}
        className="flex items-stretch"
        style={{
          width: slideWidth > 0 ? `${slides.length * (slideWidth + gap) + sidePadding * 2}px` : undefined,
          transform: `translate3d(${translateX}px, 0, 0)`,
          transition: isTransitioning ? "transform 380ms ease" : "none",
          padding: `0 ${sidePadding}px`,
          gap: `${gap}px`,
          opacity: measured ? 1 : 0,
          pointerEvents: measured ? "auto" : "none",
        }}
        onTransitionEnd={onTransitionEnd}
      >
        {slides.map((c, i) => (
          <div key={i} style={{ width: `${slideWidth}px` }}>
            <div className={`committee-orbs ${c.className || ""}`}>
              <div
                ref={(el) => (cardRefs.current[i] = el)}
                className="rounded-lg p-2 box-border flex flex-col"
                style={{ backgroundColor: "var(--color-modal-bg)", color: "var(--color-blue-900)", minHeight: `${MIN_CARD_HEIGHT}px`, height: uniformHeight ? `${uniformHeight}px` : undefined }}
              >
                <div className="my-0.5 modal-orb-container">
                  <Orb layout="static" showLabel={false} size="xs" />
                </div>
                <hr className="modal-separator my-1" />
                <h3 className="font-insideout text-center py-2" style={{ fontSize: "1.4rem" }}>{c.label}</h3>
                <p className="font-montserrat text-center flex-1 overflow-y-auto pr-1" style={{ fontSize: "0.85rem", lineHeight: "1.3" }}>
                    {c.description.split(/(Green & White)/g).map((part, index) => (
                      <span key={index} className={part === "Green & White" ? "font-bold" : ""}>
                        {part}
                      </span>
                    ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        aria-label="Previous"
        onClick={prev}
        disabled={isTransitioning}
        className={`absolute top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/50 text-black p-1.5 z-30 ${isTransitioning ? 'opacity-60' : ''}`}
        style={{ left: Math.max(6, sidePadding * 0.5) }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button
        aria-label="Next"
        onClick={next}
        disabled={isTransitioning}
        className={`absolute top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/50 text-black p-1.5 z-30 ${isTransitioning ? 'opacity-60' : ''}`}
        style={{ right: Math.max(6, sidePadding * 0.5) }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
}
