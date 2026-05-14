import React from 'react';
import { CommitteeCard } from '../../../components/t3-recweek/CommitteeCard';
import committeesData from '../committees.json';
import pinkRisoImg from '../../../assets/textures/pink_riso.avif';

function Committees() {
    return (
        <section id="committees" className="min-h-screen py-16 flex flex-col items-center bg-app-white overflow-hidden gap-8 w-full">
            {/* Title Div with Pink Riso Background */}
            <div className="relative w-full overflow-hidden py-8 px-6 md:py-16 flex flex-col justify-center items-center text-app-white">
                {/* Absolute Background Texture Layer using local high-fidelity AVIF asset */}
                <img
                    src={pinkRisoImg}
                    alt="Pink Riso Texture"
                    className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-[0.95]"
                />

                {/* Foreground Content Layer */}
                <div className="relative z-10 flex flex-col items-center text-center gap-2">
                    <h1 className="font-micu text-4xl md:text-6xl tracking-wide">
                        core committees
                    </h1>
                    <p className="font-futura-bold text-xl md:text-2xl text-app-white drop-shadow">
                        the people behind the yearbook
                    </p>
                </div>
            </div>

            {/* Horizontal Free-Sliding Carousel Section */}
            <div className="w-full pl-4 md:pl-8 max-w-7xl">
                <div className="flex gap-6 overflow-x-auto pb-8 pt-4 scrollbar-hide scroll-smooth snap-x mr-4">
                    {committeesData.committees.map((committee) => (
                        <div
                            key={committee.id}
                            className=" flex-shrink-0 snap-start"
                        >
                            <CommitteeCard
                                imagePublicId={committee.icons.colored}
                                name={committee.name}
                                description={committee.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Committees;
