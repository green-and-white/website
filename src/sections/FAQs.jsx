import React, { useState } from "react";

const faqsData = [
  {
    "question": "Who can apply?",
    "answer": "All Manila and Laguna Campus undergraduate students with a minimum of three (3) terms left are eligible to apply for Green & White."
  },
  {
    "question": "What committees may I apply for?",
    "answer": "You may apply to any of the seven (7) committees:",
    "list": [
        "Literary: Pitch and write stories for the yearbook, proofread yearbook write-ups, and create captions for online platforms.",
        "Photo: Handle operations behind photoshoots and provide visual-photo assets for the yearbook and campaign materials.",
        "Layout: Creates publicity materials and designs the contents of the yearbook.",
        "Marketing: Ideates and executes promotion strategies that encourage students to subscribe to the yearbook.",
        "Customer Care: Accommodates subscriber concerns and guides subscribers throughout yearbook processes.",
        "Office: Organizes the systems, logistics and data of the yearbook operations.",
        "Web: Deploys and manages the digital solutions behind G&W’s systems."
    ]   
  },
  {
    "question": "Can I apply for more than one (1) committee?",
    "answer": "Yes, you may apply to two (2) committees! Kindly note, however, that you can only be accepted into one (1) committee if and when you pass the application process. If you do apply for two committees, you may be redirected to your second choice."
  },
  {
    "question": "I am a member of another org. Can I still join?",
    "answer": "Yes, you can! Aspiring applicants from other organizations may still apply, as long as you are not an officer or member of any political organization within the university."
  },
  {
    "question": "What are the expectations for a Green & White staffer?",
    "answer": "Outside of section-specific deliverables, staffers are expected to be available on-site to man the publication’s booths and assist subscribers with yearbook concerns."
  },
  {
    "question": "Is there a minimum grade requirement?",
    "answer": "None."
  },
  {
  "question": "What does the application process look like?",
  "answer": "Green & White’s application process is conducted in four (4) stages:",
  "list": [
    "Application: Fill out the application form at bit.ly/GW26-T1-Application by Saturday, September 13.",
    "Examination: Wait for the details of your committee exam and take-home exam to be sent to you by September 15. Submit your exam deliverables, resume, and portfolio within the given time period.",
    "Committee Head Interview: Schedule your interview with the committee interview of your priority and secondary committee choices.",
    "Executive Editors Interview: Schedule your interview with the executive editors.",
    "Results: Wait for the results to be posted."
  ],
},
  {
    "question": "Are Green & White application exams difficult?",
    "answer": "Don't worry, the workload fits right into a student's schedule! Here in Green & White, we take our workload and time management holistically, always with the student in mind. We know some tasks may seem time consuming but with time and practice, we are able to manage work at a breathable and competent pace. These exams are also meant to test your technical skills and commitment and help us identify which committee you best belong to."
  },
  {
    "question": "Have any more questions?",
    "answer": "For any other questions or concerns, kindly message our Facebook inbox through fb.com/dlsu.gnw or send us an email at gw@dlsu.edu.ph with the subject line “[GW26] T1 Recruitment Concern”."
  }

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
                openIndexes.includes(index) ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6 pt-0">
                <p className="text-base font-montserrat">{faq.answer}</p>
                {faq.list && (
                    <ul className="list-disc pl-6">
                        {faq.list.map((item, i) => (
                        <li key={i}>{item}</li>
                        ))}
                    </ul>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
