// src/lib/cloudinary.ts

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string;

interface CloudinaryTransforms {
  width?: number;
  height?: number;
}

/**
 * Builds a Cloudinary delivery URL.
 * Format is always avif. Width and height are optional.
 *
 * @example
 * buildCloudinaryUrl("Hero_tcg8tg", { width: 800 })
 * // => "https://res.cloudinary.com/yourcloud/image/upload/f_avif,w_800/Hero_tcg8tg"
 */
export function buildCloudinaryUrl(
  publicId: string,
  { width, height }: CloudinaryTransforms = {}
): string {
  const parts: string[] = ["f_avif", "q_auto"];
  if (width) parts.push(`w_${width}`);
  if (height) parts.push(`h_${height}`);

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${parts.join(",")}/${publicId}`;
}