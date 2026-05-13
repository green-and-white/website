import DateCard from "../../../components/t3-recweek/DateCard"

function Dates() {
  return (
    <section id="dates" className="min-h-screen flex flex-col justify-center items-center px-6 bg-[#E8E4DD] py-16">
      <div className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <h1 className="font-micu text-[#B34865] text-5xl md:text-6xl lg:text-7xl text-center mb-16 md:mb-20">
          important dates
        </h1>

        <div className="flex flex-col gap-3 w-full">
          <DateCard title="COMMITTEE EXAMS" dateRange="May 25 to 27" />
          <DateCard title="PRACTICAL EXAMS" dateRange="May 25 to 29" />
          <DateCard title="COMMITTEE HEAD INTERVIEW" dateRange="May 28 to June 2" />
          <DateCard title="EXECUTIVE EDITOR INTERVIEW" dateRange="June 1 to June 5" />
        </div>
      </div>
    </section>
  )
}

export default Dates;
