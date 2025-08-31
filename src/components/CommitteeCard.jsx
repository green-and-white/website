import React from "react";
import Orb from "./Orb.jsx";

export default function CommitteeCard({ committee }) {
  if (!committee) return null;
  return (
    <div className={`flex flex-col gap-1 committee-orbs ${committee.className || ""}`}>
      <div className="flex items-center gap-5">
        <div className="shrink-0">
          <Orb layout="static" showLabel={false} size="sm" />
        </div>
        <h3 className="font-insideout text-white text-2xl leading-tight">{committee.label}</h3>
      </div>
      <p className="font-montserrat text-white/90 text-sm mt-2 leading-relaxed">{committee.description}</p>
    </div>
  );
}
