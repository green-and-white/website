import React from "react";
import Orb from "./Orb.jsx";

export default function Modal({ isOpen, onClose, committee }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal-content committee-orbs ${committee.className}`} onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button 
          onClick={onClose}
          className="modal-close-button"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="my-4 modal-orb-container">
          <Orb {...committee} layout="static" showLabel={false} imageSrc={committee.src} />
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
