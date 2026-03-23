import React, { useState } from "react";
import { FAQs } from "../primerData";
import styles from "../Primer.module.css";

function CustomFAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/60 py-5">
      <button 
        type="button" 
        className="w-full flex items-start gap-3 sm:gap-4 text-left focus:outline-hidden group cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={`mt-[2px] sm:mt-1 text-white transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-90' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </span>
        <span className="flex-1 font-[Libre_Caslon_Condensed] font-bold text-white text-[1.1rem] sm:text-[1.35rem] italic group-hover:text-[#ffc567] transition-colors duration-300">
          {faq.question}
        </span>
      </button>
      <div 
        className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out pl-[32px] sm:pl-[40px] ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
        aria-hidden={!isOpen}
      >
        <div className="overflow-hidden">
          <p className="text-[15px] sm:text-[16.5px] font-[Helvetica] text-white leading-[1.6]">
            {faq.answer.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line.split('Green & White').map((part, index, array) => (
                  <React.Fragment key={index}>
                    {part.split('fb.com/gwyearbookdlsu').map((subpart, j, subArray) => (
                      <React.Fragment key={j}>
                        {subpart}
                        {j < subArray.length - 1 && <a href="https://fb.com/gwyearbookdlsu" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#ffc567] transition-colors duration-300">fb.com/gwyearbookdlsu</a>}
                      </React.Fragment>
                    ))}
                    {index < array.length - 1 && <strong className="font-bold">Green &amp; White</strong>}
                  </React.Fragment>
                ))}
                {i < faq.answer.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <div className="max-w-4xl mx-auto mt-24 px-4 sm:px-6 md:px-8">
      <div className="relative mb-8 sm:mb-12">
        <h3 className={styles.h3} data-text="Frequently Asked Questions">
          Frequently Asked Questions
        </h3>
      </div>
      <div className="flex flex-col border-t border-white/60">
        {FAQs.map((faq, index) => (
          <CustomFAQItem key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
}
