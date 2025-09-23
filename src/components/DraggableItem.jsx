import { useEffect, useRef, useState } from "react";

export default function DraggableItem({ id, children, start = { x: 0, y: 0 }, lastItemIdx, setLastItemIdx, index}
 ) {
  const ref = useRef(null);
  const [pos, setPos] = useState(start);
  const [drag, setDrag] = useState(false);
  const startRef = useRef({ x: 0, y: 0 });
  const lastRef = useRef(start);

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  // Helper to clamp a position inside the viewport
  const clampPosition = (p) => {
    const el = ref.current;
    if (!el) return p;

    const { offsetWidth: w, offsetHeight: h } = el;
    const maxX = window.innerWidth - w;
    const maxY = window.innerHeight - h;

    return {
      x: clamp(p.x, 0, maxX),
      y: clamp(p.y, 0, maxY),
    };
  };

  // Load saved position or clamp the start
  useEffect(() => {
    const saved = localStorage.getItem(`drag:${id}`);
    let p = saved ? JSON.parse(saved) : start;

    p = clampPosition(p);

    setPos(p);
    lastRef.current = p;
  }, [id, start]);

  // Save position
  useEffect(() => {
    localStorage.setItem(`drag:${id}`, JSON.stringify(pos));
  }, [id, pos]);

  // Re-clamp on resize
  useEffect(() => {
    const handleResize = () => {
      const clamped = clampPosition(lastRef.current);
      setPos(clamped);
      lastRef.current = clamped;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const begin = (x, y) => {
    setDrag(true);
    setLastItemIdx(index); 
    startRef.current = { x: x - lastRef.current.x, y: y - lastRef.current.y };
  };

  const move = (x, y) => {
    const nx = x - startRef.current.x;
    const ny = y - startRef.current.y;

    const clamped = clampPosition({ x: nx, y: ny });
    lastRef.current = clamped;
    setPos(clamped);
  };

  const end = () => setDrag(false);

  // Mouse
  const onMouseDown = (e) => {
    e.preventDefault();
    begin(e.clientX, e.clientY);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp, { once: true });
  };
  const onMouseMove = (e) => move(e.clientX, e.clientY);
  const onMouseUp = () => {
    window.removeEventListener("mousemove", onMouseMove);
    end();
  };

  // Touch
  const onTouchStart = (e) => {
    const t = e.touches[0];
    setLastItemIdx(index);
    begin(t.clientX, t.clientY);
  };
  const onTouchMove = (e) => {
    const t = e.touches[0];
    setLastItemIdx(index);
    move(t.clientX, t.clientY);
  };
  const onTouchEnd = end;
  
  
  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className={`fixed select-none`}
      style={{
        left: pos.x,
        top: pos.y,
        cursor: drag ? "grabbing" : "grab",
        zIndex: lastItemIdx == index ? 49 : 2, 
        touchAction: "none",
      }}
    >
      {children}
    </div>
  );
}
