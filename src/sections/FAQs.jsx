import React, { useState } from "react";

const faqsData = [
  {
    question: "WILL I GRADUATE?",
    answer:
      "The answer to the first question goes here. You can fill in the appropriate information about graduation requirements.",
  },
  {
    question: "HOW DO I APPLY TO GREEN & WHITE?",
    answer:
      "Fill out the forms, submit them, take the exam, and get interviewed. This is a placeholder description.",
  },
  {
    question: "DOES THIS LOOK RIGHT?",
    answer:
      "The answer to the third question. You can use this space to add information about the application process or a general welcome message.",
  },
];

export default function FAQs() {
  const [openIndexes, setOpenIndexes] = useState([]); // store multiple open indexes

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // close if already open
        : [...prev, index] // open if closed
    );
  };

  return (
    <section className="text-white py-20 px-4 md:px-8 font-montserrat flex flex-col items-center">
      <div className="w-full max-w-4xl space-y-2">
        <h2 className="text-3xl md:text-5xl font-bold font-insideout text-center mb-16">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="border-l-2 bg-blue-900 bg-opacity-50 backdrop-blur-sm shadow-xl overflow-hidden cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question Row */}
            <div className="flex items-center justify-between p-6">
              <h3 className="text-xl font-bold font-insideout">
                {faq.question}
              </h3>
              <div className="flex items-center justify-center w-6 h-6 text-2xl font-bold leading-none">
                {openIndexes.includes(index) ? "−" : "+"}
              </div>
            </div>

            {/* Answer with smooth transition */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndexes.includes(index) ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6 pt-0">
                <p className="text-base font-montserrat">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
