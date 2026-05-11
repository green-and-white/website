import React from 'react'
import grainTexture from "@/assets/textures/grain.avif"

function buildCloudinaryUrl(
  publicId: string,
  version: string,
  options: {
    width?: number
    height?: number
    quality?: string
    format?: string
    crop?: string
  } = {}
) {
  const CLOUD_NAME = "dukjilemt"
  const BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`
  const { width, height, quality = "auto", format = "avif", crop } = options

  const transforms = [
    `f_${format}`,
    `q_${quality}`,
    width && `w_${width}`,
    height && `h_${height}`,
    crop && `c_${crop}`,
  ].filter(Boolean).join(",")

  return `${BASE}/${transforms}/${version}/${publicId}`
}

function CldImage({
  publicId,
  version,
  width,
  height,
  alt,
  className,
  style,
}: {
  publicId: string
  version: string
  width?: number
  height?: number
  alt: string
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <picture>
      <source srcSet={buildCloudinaryUrl(publicId, version, { width, height, format: "avif" })} type="image/avif" />
      <source srcSet={buildCloudinaryUrl(publicId, version, { width, height, format: "webp" })} type="image/webp" />
      <img
        src={buildCloudinaryUrl(publicId, version, { width, height, format: "png" })}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={style}
      />
    </picture>
  )
}

export default function T3Apply() {
  return (
    <div 
      className="relative min-h-screen bg-white flex flex-col justify-center items-center font-futura overflow-hidden"
      style={{ colorScheme: 'light' }}
    >
      {/* Grain overlay */}
      <img
        src={grainTexture}
        aria-hidden="true"
        alt=""
        className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-multiply z-10"
      />

      {/* Cat Image */}
      <div className="relative z-0 mb-4">
        <CldImage
          publicId="cat2_jj5cru"
          version="v1778498888"
          width={600}
          alt="Cat"
          className="object-contain max-w-xs sm:max-w-sm lg:max-w-md h-auto"
        />
      </div>

      {/* Header */}
      <h1 className="text-5xl sm:text-6xl lg:text-8xl text-[#f0614b] text-center w-full z-0">
        Recruiting soon.
      </h1>

      {/* Logo */}
      <div className="mt-4 z-0">
        <CldImage
          publicId="apply-horizontal_xdhvmy"
          version="v1778499334"
          height={65}
          alt="Apply horizontal logo"
          className="object-contain"
        />
      </div>

    </div>
  )
}