
export default function DateCard(
  { title, dateRange }: { title: string; dateRange: string }
) {
  return (
    <div className="group flex flex-col md:flex-row md:items-center md:justify-between border-b-2 border-b-[#B34865] px-2 py-4 cursor-pointer">
      <h3 className="font-futura-bold text-[#B34865] font-bold text-xl md:text-lg lg:text-xl transition-all duration-300 group-hover:text-2xl md:group-hover:text-xl lg:group-hover:text-2xl">
        {title}
      </h3>
      <p className="font-futura-bold text-[#48B39A] text-lg md:text-base lg:text-lg transition-all duration-300 group-hover:text-xl md:group-hover:text-lg lg:group-hover:text-xl">
        {dateRange}
      </p>
    </div>
  )
}
