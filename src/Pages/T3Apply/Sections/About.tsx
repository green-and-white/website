import React from 'react'

function About() {
  return (
    <section className="min-h-screen bg-[#F5F0E8] flex flex-col">
      <div className='flex justify-center mt-50 items-start gap-10'>
        <div className="flex flex-col">
          <h1 className="font-micu text-7xl">ABOUT US</h1>
          <div className="mt-10 h-2 w-15 bg-red-600"></div>
        </div>
        <div className="flex items-start gap-4 max-w-105">
        <div className="w-2 h-35 bg-green-700 ml-5"></div>
          <p className="text-xl mt-10 text-green-700">
            Green & White is the official yearbook publication of De La Salle University.
          </p>
        </div>
      </div>
      <div className='max-w-120 ml-186 mt-10'>
        Celebrating its 101st year, the publication lives as the record-keeper of Lasallian memories. From portraits to pages, Green & White brings the Lasallian community together and etches their place in time through the yearbook.
      </div>
    </section>
  )
}

export default About