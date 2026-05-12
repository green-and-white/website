import { useState, useRef, useEffect } from "react"
import { ChevronUp } from "lucide-react";
import { ReactNode } from "react"

export default function FaqDropdown(
  { question, answer }: { question: string; answer: ReactNode }
) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div className="flex flex-col border-b-2 border-b-[#B34865] px-2 py-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex flex-row items-center justify-between">
        <h3 className={`font-futura-bold transition-all duration-300 ${isOpen ? "text-[#48B39A] text-2xl md:text-xl lg:text-2xl" : "text-[#B34865] text-xl md:text-lg lg:text-xl"}`}>
          {question}
        </h3>
        <span
          className="text-[#B34865] font-bold text-xl transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <ChevronUp />
        </span>
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: `${height}px` }}
      >
        <div className="font-futura-medium text-[#B34865] text-lg md:text-base lg:text-lg mt-2">
          {answer}
        </div>
      </div>
    </div>
  )
}