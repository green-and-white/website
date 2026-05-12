
export default function DateCard(
  { title, dateRange }:{ title: string; dateRange: string}
) {
  return (
    <div>
      <h3>{ title }</h3>
      <p>{dateRange}</p> 
    </div> 
  )
}
