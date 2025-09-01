import React, { useEffect, useState } from "react";
import Orb from "../components/Orb.jsx";
import MobileCommitteeCarousel from "../components/MobileCommitteeCarousel.jsx";
import Modal from "../components/Modal.jsx";
import descriptionsRaw from "../assets/committee_info/descriptions.txt?raw";

export default function Committees({ animated = true }) {
  const [selectedCommittee, setSelectedCommittee] = useState(null);
  const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  const MARKETING = "orb-theme--marketing";
  const CUSTOMER_CARE = "orb-theme--customer-care";
  const LITERARY = "orb-theme--literary";
  const OFFICE = "orb-theme--office";
  const LAYOUT = "orb-theme--layout";
  const WEB = "orb-theme--web";
  const PHOTO = "orb-theme--photo";

  const descriptions = descriptionsRaw
    .split(/\n\s*\n/)
    .reduce((acc, block) => {
      const [title, ...rest] = block.trim().split('\n');
      if (title) {
        acc[title.trim()] = rest.join(' ').trim();
      }
      return acc;
    }, {});

  const placements = [
    {
      angle: 0,
      size: "md",
      className: LAYOUT,
      label: "Layout",
      description: descriptions.Layout,
    },
    {
      angle: -90,
      size: "md",
      className: CUSTOMER_CARE,
      label: "Customer Care",
      description: descriptions["Customer Care"],
    },
    {
      angle: -50,
      size: "md",
      className: LITERARY,
      label: "Literary",
      description: descriptions.Literary,
    },
    {
      angle: 180,
      size: "md",
      className: OFFICE,
      label: "Office",
      description: descriptions.Office,
    },
    {
      angle: -130,
      size: "md",
      className: MARKETING,
      label: "Marketing",
      offsetX: 5,
      description: descriptions.Marketing,
    },
    {
      angle: 60,
      size: "md",
      className: WEB,
      label: "Web",
      description: descriptions.Web,
    },
    {
      angle: 120,
      size: "md",
      className: PHOTO,
      label: "Photo",
      description: descriptions.Photo,
    },
  ];

  // Responsive ring radii based on viewport width to keep orbs within view on small screens
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scaleX = vw < 400 ? 0.65 : vw < 640 ? 0.75 : vw < 840 ? 0.8 : vw < 1024 ? 0.9 : 1;
  const scaleY = vw < 400 ? 0.85 : vw < 640 ? 0.90 : vw < 840 ? 0.95 : 1;
  const radii = { aPercent: 50 * scaleX, bPercent: 50 * scaleY };

  // Map orb sizes to half-width/height in px for accurate centering
  const halfSizePx = { sm: 40, md: 55, lg: 65 };
  // Responsive orb size
  const responsiveSize = vw < 768 ? 'sm' : 'md';
  // We will de-sync animation via negative delays and vary duration/amplitude per orb
  const delays = [0, 150, 300, 450, 600, 750, 900];

  const handleOrbClick = (committee) => {
    setSelectedCommittee(committee);
  };

  const isMobileCards = vw < 640;

  return (
    <>
  {/* SVG glass-distortion filter removed to avoid cross-browser inconsistencies */}

      <section id="committees" className="committee-orbs relative py-6 sm:py-24 md:py-36">
        <div className="container mx-auto px-6">
          {isMobileCards ? (
            <div className="mx-auto w-full max-w-2xl">
              <div className="text-center">
                <h2 className="font-insideout text-white text-3xl sm:text-5xl select-none">Core Committees</h2>
              </div>
              <div className="mt-3">
                <MobileCommitteeCarousel committees={placements} />
              </div>
            </div>
          ) : (
            <div className="relative mx-auto w-full max-w-5xl h-[400px] sm:h-[440px] md:h-[500px]">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className="font-insideout text-white text-5xl sm:text-6xl md:text-7xl select-none">
                  Core Committees
                </h2>
              </div>

              <div className="absolute inset-0">
                {placements.map((p, i) => {
                  const rad = (p.angle * Math.PI) / 180;
                  const x = Math.cos(rad) * radii.aPercent + (p.offsetX ?? 0);
                  const y = Math.sin(rad) * radii.bPercent + (p.offsetY ?? 0);

                  // Per-orb animation variance (deterministic by index)
                  const durationSec = 6 + ((i * 7) % 5) * 0.7; // 6s..9.8s
                  const ampX = 3 + ((i * 5) % 6); // 3px..8px
                  const ampY = 7 + ((i * 3) % 6); // 7px..12px
                  const phaseMs = -((delays[i] ?? 0) + (i * 97) % 500); // negative to start mid-cycle

                  return (
                    <div
                      key={i}
                      className="orb-container-clickable"
                      style={{
                        left: `calc(50% + ${x}% - ${halfSizePx[responsiveSize] ?? 55}px)`,
                        top: `calc(50% + ${y}% - ${halfSizePx[responsiveSize] ?? 55}px)`,
                        // Motion control
                        animationDelay: `${phaseMs}ms`,
                        animationName: animated ? undefined : "none",
                        // Per-orb variables consumed by CSS keyframes
                        ["--float-duration"]: `${durationSec}s`,
                        ["--float-x"]: `${ampX}px`,
                        ["--float-y"]: `${ampY}px`,
                      }}
                      onClick={() => handleOrbClick(p)}
                    >
                      <Orb
                        size={responsiveSize}
                        imageSrc={p.src}
                        label={p.label}
                        aPercent={0}
                        bPercent={0}
                        layout="static"
                        className={`opacity-80 ${p.className ?? ""}`}
                        shineTop={`${10 + (i * 5) % 20}%`}
                        shineLeft={`${20 + (i * 7) % 30}%`}
                        shineRotate={`${10 + (i * 10) % 60}deg`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      <Modal
        isOpen={!!selectedCommittee}
        onClose={() => setSelectedCommittee(null)}
        committee={selectedCommittee}
      />
    </>
  );
}
