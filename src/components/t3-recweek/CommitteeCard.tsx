import { CloudinaryImage } from './CloudinaryImage';
import { buildCloudinaryUrl } from '../../lib/cloudinary';

export interface CommitteeCardProps {
  /** The Cloudinary public ID for the committee image */
  imagePublicId: string;
  /** The official name of the committee */
  name: string;
  /** A brief description of the committee's responsibilities */
  description: string;
  /** Optional custom classname to apply to the card container */
  className?: string;
}

export function CommitteeCard({
  imagePublicId,
  name,
  description
}: CommitteeCardProps) {
  return (
    <div
      className={`group relative flex flex-col bg-app-white border max-w-[330px] h-[380px] px-8 py-6 border-app-red hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
    >
      {/* Upper Image Section with micro-animation zoom */}
      {/* <CloudinaryImage
        publicId={imagePublicId}
        alt={name}
        fallback={buildCloudinaryUrl(`${imagePublicId}.png`)}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
      /> */}
      <div className="h-16 flex items-center">
        <img
          src={imagePublicId}
          alt={name}
          className="h-full object-contain object-left pl-8 group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
      {/* Subtle interior bottom gradient overlay for premium visual separation */}
      
      {/* Lower Content Section */}
      <div className="flex flex-col p-6 gap-3 flex-grow justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="font-micu text-2xl text-app-red group-hover:text-app-red transition-colors duration-300">
            {name}
          </h3>
          <p className="font-futura-bold text-base text-app-red leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommitteeCard;