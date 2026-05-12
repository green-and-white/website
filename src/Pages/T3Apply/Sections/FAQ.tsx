import FaqDropdown from "../../../components/t3-recweek/FaqDropdown"

const faqs = [
  {
    question: "Who can apply?",
    answer: "All undergraduate students from all campuses under DLSU-Manila, with a minimum of three (3) terms left are eligible to apply for Green & White."
  },
  {
    question: "What committees may I apply for?",
    answer: (
      <div className="flex flex-col gap-1">
        <p>You may apply to any of the seven (7) committees:</p>
        <ul className="list-disc list-inside flex flex-col gap-1 mt-1">
          <li><span className="font-bold">Literary:</span> Pitch and write stories for the yearbook, proofread yearbook write-ups, and create captions for online platforms.</li>
          <li><span className="font-bold">Photo:</span> Handle operations behind photoshoots and provide visual-photo assets for the yearbook and campaign materials.</li>
          <li><span className="font-bold">Layout:</span> Creates publicity materials and designs the contents of the yearbook.</li>
          <li><span className="font-bold">Marketing:</span> Ideates and executes promotion strategies that encourage students to subscribe to the yearbook.</li>
          <li><span className="font-bold">Customer Care:</span> Accommodates subscriber concerns and guides subscribers throughout yearbook processes.</li>
          <li><span className="font-bold">Office:</span> Organizes the systems, logistics and data of the yearbook operations.</li>
          <li><span className="font-bold">Web:</span> Deploys and manages the digital solutions behind G&W's systems.</li>
        </ul>
      </div>
    )
  },
  {
    question: "Can I apply for more than one (1) committee?",
    answer: "Yes, you may apply to two (2) committees! Kindly note, however, that you can only be accepted into one (1) committee if and when you pass the application process. If you do apply for two committees, you may be redirected to your second choice."
  },
  {
    question: "I am a member of another org. Can I still join?",
    answer: "Yes, you can! Aspiring applicants from other organizations may still apply, as long as you are not an officer or member of any political organization within the university."
  },
  {
    question: "What are the expectations for a Green & White staffer?",
    answer: "Members of the publication are expected to be active contributors with a nose for initiative. Outside of section-specific deliverables, staffers are expected to be available on-site to man the publication's booths and assist subscribers with yearbook concerns."
  },
  {
    question: "Is there a minimum grade requirement?",
    answer: "None."
  },
  {
    question: "What does the application process look like?",
    answer: (
      <div className="flex flex-col gap-1">
        <p>Green & White's application process is conducted in five (5) stages:</p>
        <ol className="list-decimal list-inside flex flex-col gap-1 mt-1">
          <li><span className="font-bold">Application:</span> Fill out the application form at <a href="http://bit.ly/GW26-T3-Application" className="underline" onClick={(e) => e.stopPropagation()}>bit.ly/GW26-T3-Application</a> by Saturday, May 23.</li>
          <li><span className="font-bold">Examination:</span> Wait for the details of your committee exam and practical exam to be sent to you by May 25. Submit your exam deliverables, resume, and portfolio within the given time period.</li>
          <li><span className="font-bold">Committee Head Interview:</span> Schedule your interview with your priority and secondary committee choices.</li>
          <li><span className="font-bold">Executive Editors Interview:</span> Schedule your interview with the executive editors.</li>
          <li><span className="font-bold">Results:</span> Wait for the results to be posted.</li>
        </ol>
      </div>
    )
  },
  {
    question: "Are Green & White application exams difficult?",
    answer: "Don't worry, the workload fits right into a student's schedule! Here in Green & White, we take our workload and time management holistically, always with the student in mind. We know some tasks may seem time consuming but with time and practice, we are able to manage work at a breathable and competent pace. These exams are also meant to test your technical skills and commitment and help us identify which committee you best belong to."
  }
] 

function FAQ() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-[#E8E4DD] py-16">
      <div className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <h1 className="font-micu text-[#B34865] text-5xl md:text-6xl lg:text-7xl text-center mb-16 md:mb-20">
          FAQS 
        </h1>

        <div className="flex flex-col gap-3 w-full">
          { faqs.map((faq, index) => {
              return <FaqDropdown
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
              />
            })
          } 
          
        </div>
      </div>
    </section>
  )
}

export default FAQ
