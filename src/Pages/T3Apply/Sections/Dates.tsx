import DateCard from "../../../components/t3-recweek/DateCard"

function Dates() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 bg-[#E8E4DD]">
      <h1 className="font-micu text-[#B34865] text-5xl text-center mb-24">
        important dates
      </h1>

      <div className="flex flex-col gap-3">
        <DateCard
          title="COMMITTEE EXAMS" 
          dateRange="May 25 to 27"
        />
        <DateCard 
          title="PRACTICAL EXAMS"
          dateRange="May 25 to 29"
        />
        <DateCard
          title="COMMITTEE HEAD INTERVIEW"
          dateRange="May 28 to June 2"
        />
        <DateCard
          title="EXECTUIVE EDITOR INTERVIEW"
          dateRange="June 1 to June 5"
        /> 
      </div> 
       
    </section>
  )
}

export default Dates;
