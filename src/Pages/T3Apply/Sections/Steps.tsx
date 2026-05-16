import React from 'react';
import Step from '../../../components/t3-recweek/Step';
import { steps } from 'motion';

function Steps() {
  const stepsData = [
    {
      title: "APPLICATION",
      description: (
        <>
          Fill out the application form at{' '}
          <a
            href="https://bit.ly/GW26-T3-Application"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-app-green transition-colors duration-200 break-all"
          >
            bit.ly/GW26-T3-Application
          </a>{' '}
          by Saturday, <span className=" text-app-green">May 23</span>.
        </>
      )
    },
    {
      number: "2",
      title: "EXAMINATION",
      description: (
        <>
          Wait for the details of your committee exam and take-home exam to be sent to you by{' '}
          <span className=" text-app-green">May 25</span>.{' '}
          Submit your exam deliverables, resume, and portfolio within the given time period.
        </>
      )
    },
    {
      number: "3",
      title: "COMMITTEE HEAD INTERVIEW",
      description: "Schedule your interview with your priority and secondary committee choices after submitting your exam deliverables."
    },
    {
      number: "4",
      title: "EXECUTIVE EDITORS INTERVIEW",
      description: "Schedule your final interview with the Executive Editors to discuss your potential role and overall vision."
    }
  ];


  return (
    <section id="steps" className="sm:min-h-fit bg-app-white flex flex-col justify-center items-center px-6 md:px-12 py-16 md:py-24">
      <h1 className="font-micu text-app-red text-5xl md:text-[80px] text-center mb-12 w-full">
        application process
      </h1>
      <div className="flex flex-col max-w-[700px] lg:flex-row gap-4 lg:gap-0 w-full lg:max-w-6xl">
        {stepsData.map((step, idx) => (
          <div key={idx} className="flex-1">
            <Step
              number={idx + 1}
              title={step.title}
              description={step.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Steps;
