import React from "react";

/**
 * Orb component
 * - Absolutely positions itself inside a relative container.
 * - Positions along an ellipse using angle + radii, then applies offsetX/offsetY (percent).
 * - Colors can be provided via props (colorTint, glowInner, glowOuter, borderColor)
 *   or Tailwind arbitrary properties in className that set CSS variables:
 *   --orb-tint, --orb-glow-inner, --orb-glow-outer, --orb-border
 */
export default function Orb({
  size = "md", // "sm" | "md" | "lg"
  angle = 0, // degrees (0=right, 90=bottom, -90=top)
  aPercent = 42, // ellipse horizontal radius (% of container width)
  bPercent = 30, // ellipse vertical radius (% of container height)
  offsetX = 0, // additional x offset in % (positive -> right)
  offsetY = 0, // additional y offset in % (positive -> down)
  delay = 0, // animation delay in ms
  imageSrc,
  colorTint, // inner/tint color (e.g., rgba(18,46,142,0.22))
  glowInner, // inner glow color
  glowOuter, // outer glow color
  borderColor, // border color
  label,
  layout = "absolute", // "absolute" | "static"
  showLabel = true,
  className = "",
  shineTop = "10%",
  shineLeft = "25%",
  shineWidth = "50%",
  shineHeight = "25%",
  shineRotate = "20deg",
}) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * aPercent + offsetX;
  const y = Math.sin(rad) * bPercent + offsetY;

  const style = {
    ...(layout === "absolute"
      ? {
          left: `calc(50% + ${x}%)`,
          top: `calc(50% + ${y}%)`,
          transform: "translate(-50%, -50%)",
        }
      : {}),
    animationDelay: `${delay}ms`,
    ...(colorTint ? { ["--orb-tint"]: colorTint } : {}),
    ...(glowInner ? { ["--orb-glow-inner"]: glowInner } : {}),
    ...(glowOuter ? { ["--orb-glow-outer"]: glowOuter } : {}),
    ...(borderColor ? { ["--orb-border"]: borderColor } : {}),
  };

  return (
    <div
      className={`${layout === "absolute" ? "orb-floater" : "orb-static"} flex flex-col items-center ${className}`}
      style={style}
    >
  {/* spinning ring behind the orb - purely decorative */}
  <span className="orb-ring" aria-hidden="true" />
      <div className={`orb ${size} orb-theme`}>
        {/* inner spinning ring (visible on top of image but beneath shine/overlays) */}
        <span className="orb-ring-inner" aria-hidden="true" />
        <div
          className="orb-image"
          style={imageSrc ? { backgroundImage: `url(${imageSrc})` } : undefined}
        />
        <div
          className="orb-shine"
          style={{
            top: shineTop,
            left: shineLeft,
            width: shineWidth,
            height: shineHeight,
            transform: `rotate(${shineRotate})`,
          }}
        />
      </div>
      {label && showLabel ? <div className="orb-label mt-2">{label}</div> : null}
    </div>
  );
}
