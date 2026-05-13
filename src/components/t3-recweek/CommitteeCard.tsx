import React from 'react';
import { CloudinaryImage } from './CloudinaryImage';
import { buildCloudinaryUrl } from '../../lib/cloudinary';

export interface CommitteeCardProps {
    /** The Cloudinary public ID for the committee image */
    imagePublicId: string;
    /** The official name of the committee */
    name: string;
    /** A brief description of the committee's responsibilities */
    description: string;
}

export function CommitteeCard({
    imagePublicId,
    name,
    description
}: CommitteeCardProps) {
    // Helper to dynamically style all occurrences of "Green & White" to text-app-green
    const renderFormattedDescription = (text: string) => {
        const parts = text.split("Green & White");
        return parts.map((part, index) => (
            <React.Fragment key={index}>
                {part}
                {index < parts.length - 1 && (
                    <span className="text-app-green font-futura-extrabold">Green & White</span>
                )}
            </React.Fragment>
        ));
    };

    return (
        <div
            className="group relative flex flex-col bg-app-white border max-w-[330px] h-[380px] px-8 py-8 border-app-red hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden justify-between"
        >
            {/* Upper Icon Section: strictly 80x80 */}
            <div className="w-[80px] h-[80px] flex-shrink-0">
                <CloudinaryImage
                    publicId={imagePublicId}
                    alt={name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 ease-out"
                    width={160}
                />
            </div>

            {/* Lower Content Section */}
            <div className="flex flex-col gap-2 flex-grow mt-6">
                <h3 className="font-micu text-2xl text-app-red tracking-wide">
                    {name}
                </h3>
                <p className="font-futura-bold text-base text-app-red leading-relaxed line-clamp-6">
                    {renderFormattedDescription(description)}
                </p>
            </div>
        </div>
    );
}

export default CommitteeCard;