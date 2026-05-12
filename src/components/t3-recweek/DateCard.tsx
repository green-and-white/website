
export default function DateCard(
  { title, dateRange }: { title: string; dateRange: string }
) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b-2 border-b-[#B34865] px-2 py-4">
      <h3 className="font-futura-bold text-[#B34865] font-bold text-xl md:text-lg lg:text-xl">
        {title}
      </h3>
      <p className="font-futura-bold text-[#48B39A] text-lg md:text-base lg:text-lg">
        {dateRange}
      </p>
    </div>
  )
}
