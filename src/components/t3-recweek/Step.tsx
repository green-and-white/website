import React, { ReactNode } from 'react';

export interface StepProps {
    number?: string | number;
    title: string;
    description: ReactNode;
}

function Step({
    number,
    title,
    description,
}: StepProps) {
    return (
        <div className="flex flex-row lg:flex-col gap-6 bg-app-white p-6 items-start lg:items-start h-full">
            {number && (
                <div className="font-futura-extrabold text-app-white bg-app-red w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center text-4xl lg:text-5xl shrink-0">
                    {number}
                </div>
            )}
            <div className="flex flex-col gap-1">
                <h3 className="font-futura-bold uppercase text-3xl text-app-red tracking-wide">
                    {title}
                </h3>
                <div className="font-futura-bold text-base text-app-red leading-relaxed">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default Step;