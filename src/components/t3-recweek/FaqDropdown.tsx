import { useState } from "react"
import { ChevronUp } from "lucide-react";

export default function FaqDropdown(
  { question, answer }: { question: string; answer: string }
) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col border-b-2 border-b-[#B34865] px-2 py-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-[#B34865] font-bold text-xl md:text-lg lg:text-xl">
          {question}
        </h3>
        <span
          className="text-[#B34865] font-bold text-xl transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <ChevronUp />
        </span>
      </div>
      {isOpen && (
        <p className="text-[#48B39A] text-lg md:text-base lg:text-lg mt-2">
          {answer}
        </p>
      )}
    </div>
  )
}
