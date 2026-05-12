import React from 'react'

function Steps() {
  return (
    <section className="min-h-screen bg-[#2D6A3F] flex flex-col">
      <div className='flex justify-center mt-40'>
        <h1 className='font-micu text-white text-5xl'>APPLICATION STEPS</h1>
      </div>
      <div className="mt-8 h-1 w-250 bg-white ml-65"></div>
      <div className="flex w-full items-start justify-center mt-20 px-10 gap-x-24">
        <div className="flex flex-col items-start justify-start">
          <div className="relative flex h-30 w-30 items-center justify-center border-2 border-black bg-[#f7f3e9] text-8xl font-libre-caslon-condensed shadow-[6px_6px_0px_0px_black]">
            1
          </div>
          <p className="mt-3 w-44 font-libre-caslon-condensed text-[#f7f3e9] text-lg">
            APPLICATION
          </p>
          <p className="mt-3 w-44 font-libre-caslon-condensed text-[#f7f3e9]">
            Fill out the application at <a href="https://bit.ly/GW26-T1-Application" target="_blank" rel="noopener noreferrer"><u>bit.ly/GW26-T1-Application</u></a> by Saturday, placeholder date.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="relative flex h-30 w-30 items-center justify-center border-2 border-black bg-[#f7f3e9] text-8xl font-libre-caslon-condensed shadow-[6px_6px_0px_0px_black]">
            2
          </div>
          <p className="mt-3 w-44 font-libre-caslon-condensed text-[#f7f3e9] text-lg">
            EXAMINATION
          </p>
          <p className="mt-3 w-44 font-libre-caslon-condensed text-[#f7f3e9]">
            Fill out the application at <a href="https://bit.ly/GW26-T1-Application" target="_blank" rel="noopener noreferrer"><u>bit.ly/GW26-T1-Application</u></a> by Saturday, placeholder date.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="relative flex h-30 w-30 items-center justify-center border-2 border-black bg-[#f7f3e9] text-8xl font-libre-caslon-condensed shadow-[6px_6px_0px_0px_black]">
            3
          </div>
          <p className="mt-3 w-44 font-libre-caslon-condensed text-[#f7f3e9] text-lg">
            COMMITTEE HEAD INTERVIEW
          </p>
          <p className="mt-3 w-44 font-libre-caslon-condensed text-[#f7f3e9]">
            Fill out the application at <a href="https://bit.ly/GW26-T1-Application" target="_blank" rel="noopener noreferrer"><u>bit.ly/GW26-T1-Application</u></a> by Saturday, placeholder date.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="relative flex h-30 w-30 items-center justify-center border-2 border-black bg-[#f7f3e9] text-8xl font-libre-caslon-condensed shadow-[6px_6px_0px_0px_black]">
            4
          </div>
          <p className="mt-3 w-44 font-libre-caslon-condensed text-[#f7f3e9] text-lg">
            EXECUTIVE EDITOR INTERVIEW
          </p>
          <p className="mt-3 w-44 font-libre-caslon-condensed text-[#f7f3e9]">
            Fill out the application at <a href="https://bit.ly/GW26-T1-Application" target="_blank" rel="noopener noreferrer"><u>bit.ly/GW26-T1-Application</u></a> by Saturday, placeholder date.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Steps
