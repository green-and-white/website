import React, { useEffect, useState } from 'react';
import './SparkleCursor.css';

const Sparkle = ({ position }) => {
  return <div className="sparkle" style={{ left: position.x, top: position.y }} />;
};

const SparkleCursor = () => {
  const [sparkles, setSparkles] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileDevice = window.innerWidth < 768;
      setIsMobile(isMobileDevice);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

      const newSparkle = {
        id: Date.now(),
        position: { x: e.clientX, y: e.clientY },
      };

      setSparkles((prevSparkles) => [...prevSparkles, newSparkle]);

      setTimeout(() => {
        setSparkles((prevSparkles) =>
          prevSparkles.filter((sparkle) => sparkle.id !== newSparkle.id)
        );
      }, 1000); // Sparkle disappears after 1 second
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <div className="sparkle-container">
      <div
        className="cursor-glow"
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
      />
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} position={sparkle.position} />
      ))}
    </div>
  );
};

export default SparkleCursor;
