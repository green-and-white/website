// src/components/CloudinaryImage.tsx
import { useState } from "react";
import { buildCloudinaryUrl } from "../../lib/cloudinary";

interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  width?: number;
  height?: number;
  fallback?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

/**
 * Renders a single Cloudinary image as avif, with lazy loading and
 * an optional fallback if the image fails to load.
 *
 * @example
 * <CloudinaryImage
 *   publicId="Hero_tcg8tg"
 *   alt="Hero banner"
 *   width={1200}
 * />
 */
export function CloudinaryImage({
  publicId,
  alt,
  width,
  height,
  fallback,
  className = "",
  style = {},
  onClick,
}: CloudinaryImageProps) {
  const [hasError, setHasError] = useState(false);

  const src =
    hasError && fallback
      ? fallback
      : buildCloudinaryUrl(publicId, { width, height });

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className={className}
      style={style}
      onClick={onClick}
      onError={() => setHasError(true)}
    />
  );
}