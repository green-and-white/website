
export default function DateCard(
  { title, dateRange }: { title: string; dateRange: string }
) {
  return (
    <div className="group flex flex-col md:flex-row md:items-center md:justify-between border-b-2 border-b-[#B34865] px-2 py-4 cursor-pointer">
      <h3 className="font-futura-extra-bold text-[#B34865] font-bold text-2xl md:text-xl lg:text-2xl transition-all duration-300 group-hover:text-3xl md:group-hover:text-2xl lg:group-hover:text-3xl">
        {title}
      </h3>
      <p className="font-futura-cond-medium text-[#48B39A] text-xl md:text-lg lg:text-xl transition-all duration-300 group-hover:text-2xl md:group-hover:text-xl lg:group-hover:text-2xl">
        {dateRange}
      </p>
    </div>
  )
}
