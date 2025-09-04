import React, { useEffect, useState } from "react";
import Orb from "../components/Orb.jsx";
import MobileCommitteeCarousel from "../components/MobileCommitteeCarousel.jsx";
import Modal from "../components/Modal.jsx";
import descriptionsRaw from "../assets/committee_info/descriptions.txt?raw";


import cc from "../assets/orbpics/cc.jpg"
import photo from "../assets/orbpics/photo.jpg"
import office from "../assets/orbpics/office.jpeg"
import marketing from "../assets/orbpics/marketing.jpg"
import layout from "../assets/orbpics/layout.jpg"
import web from "../assets/orbpics/web.jpg"
import literary from "../assets/orbpics/literary.jpg"

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



  // ...existing code... (placements are computed after radii to use accurate ellipse geometry)

  // Responsive ring radii based on viewport width to keep orbs within view on small screens
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scaleX = vw < 400 ? 0.65 : vw < 640 ? 0.75 : vw < 840 ? 0.8 : vw < 1024 ? 0.9 : 1;
  const scaleY = vw < 400 ? 0.85 : vw < 640 ? 0.90 : vw < 840 ? 0.95 : 1;
  const radii = { aPercent: 50 * scaleX, bPercent: 50 * scaleY };

  // Permanent oblong multipliers tuned from temporary testing so the oval
  // placement matches the desired look at large sizes.
  // (Previously you adjusted these with sliders; final values chosen:)
  const OBLONG_X = 1.12; // horizontal stretch multiplier
  const OBLONG_Y = 0.60; // vertical squeeze multiplier

  // Base list of committees in the desired display order. Keep metadata but
  // compute angles using ellipse arc-length sampling below for visual evenness.
  const _rawPlacements = [
    // Removed the percent nudge so Marketing sits exactly on the computed top angle
    { size: "md", className: MARKETING, label: "Marketing", offsetX: 0, description: descriptions.Marketing, src: marketing},
  // Customer Care nudges slightly inward on wide/oval layouts
  { size: "md", className: CUSTOMER_CARE, label: "Customer Care", radialFactor: 0.85, description: descriptions["Customer Care"], src: cc },
    { size: "md", className: LITERARY, label: "Literary", description: descriptions.Literary, src: literary},
    { size: "md", className: OFFICE, label: "Office", description: descriptions.Office, src: office},
    { size: "md", className: LAYOUT, label: "Layout", description: descriptions.Layout, src: layout},
    { size: "md", className: WEB, label: "Web", description: descriptions.Web, src:web},
  // Photo nudges slightly inward on wide/oval layouts
  { size: "md", className: PHOTO, label: "Photo", radialFactor: 0.85, description: descriptions.Photo, src: photo, src:photo},
  ];

  // Compute visually even angles around an ellipse by numerical arc-length
  // parametrization. We start at -90° (top) and go clockwise.
  const placements = (() => {
    const a = radii.aPercent * OBLONG_X; // x-radius in percent (final tuned)
    const b = radii.bPercent * OBLONG_Y; // y-radius in percent (final tuned)
    const n = _rawPlacements.length;

    // Parametric ellipse: x = a*cos(t), y = b*sin(t), t in [0, 2PI)
    // We'll compute target arc-length positions along t starting from top (-90deg -> t = -PI/2)
    const samples = 1000; // sampling resolution for arc-length approximation
    const ts = new Array(samples + 1);
    const ss = new Array(samples + 1);
    let cumulative = 0;
    const t0 = -Math.PI / 2;
    for (let i = 0; i <= samples; i++) {
      const t = t0 + (i / samples) * 2 * Math.PI;
      ts[i] = t;
      if (i === 0) {
        ss[i] = 0;
      } else {
        const tPrev = ts[i - 1];
        // approximate segment length via chord length
        const x1 = a * Math.cos(tPrev);
        const y1 = b * Math.sin(tPrev);
        const x2 = a * Math.cos(t);
        const y2 = b * Math.sin(t);
        const dx = x2 - x1;
        const dy = y2 - y1;
        cumulative += Math.sqrt(dx * dx + dy * dy);
        ss[i] = cumulative;
      }
    }

    const total = ss[samples];
    const targets = new Array(n).fill(0).map((_, i) => (i / n) * total);

    // For each target arc length, find corresponding t via linear search on ss
    const angles = targets.map((target) => {
      let idx = 0;
      while (idx < ss.length - 1 && ss[idx + 1] < target) idx++;
      const s0 = ss[idx];
      const s1 = ss[idx + 1] || s0;
      const tInterp = ss[idx + 1] === s0 ? ts[idx] : ts[idx] + ((target - s0) / (s1 - s0)) * (ts[idx + 1] - ts[idx]);
      // convert t to degrees; note that t = -PI/2 corresponds to -90deg
      return (tInterp * 180) / Math.PI;
    });

    return _rawPlacements.map((p, idx) => ({ angle: angles[idx], ...p }));
  })();

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

      <section className="committee-orbs relative py-6 sm:py-24 md:py-36">
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
                  // If the ellipse is wider than tall, allow radialFactor to pull
                  // certain orbs closer to center for visual balance.
                  const isWide = radii.aPercent > radii.bPercent;
                  const radial = isWide && p.radialFactor ? p.radialFactor : 1;
                  const aEffective = radii.aPercent * radial;
                  const bEffective = radii.bPercent * radial;
                  const x = Math.cos(rad) * aEffective + (p.offsetX ?? 0);
                  const y = Math.sin(rad) * bEffective + (p.offsetY ?? 0);

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
                        // Motion control (restored)
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
