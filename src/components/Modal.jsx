import React from "react";
import Orb from "./Orb.jsx";

export default function Modal({ isOpen, onClose, committee }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal-content committee-orbs ${committee.className}`} onClick={(e) => e.stopPropagation()}>
        <div className="my-4 modal-orb-container">
          <Orb {...committee} layout="static" showLabel={false} />
        </div>
        <hr className="modal-separator" />
        <h3 className="modal-title font-insideout text-black">{committee.label}</h3>
        <p className="modal-description">
            {committee.description.split(/(Green & White)/g).map((part, index) => (
              <span key={index} className={part === "Green & White" ? "font-bold" : ""}>
                {part}
              </span>
            ))}
        </p>
      </div>
    </div>
  );
}
