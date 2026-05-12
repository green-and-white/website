import DateCard from "../../../components/t3-recweek/DateCard"

function Dates() {
  return (
    <section className="min-h-screen">
      <h1>important dates</h1>
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
    </section>
  )
}

export default Dates;
