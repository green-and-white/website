
export default function DateCard(
  { title, dateRange }:{ title: string; dateRange: string}
) {
  return (
    <div className="flex flex-col border-b-2 border-b-[#B34865] pb-3 px-2">
      <h3 className="text-[#B34865] font-bold text-xl">
        { title }
      </h3>
      <p className="text-[#48B39A] text-lg">
        { dateRange }
      </p> 
    </div> 
  )
}
