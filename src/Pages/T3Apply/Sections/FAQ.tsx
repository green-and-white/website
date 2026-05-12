import FaqDropdown from "../../../components/t3-recweek/FaqDropdown"

function FAQ() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-[#E8E4DD] py-16">
      <div className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <h1 className="font-micu text-[#B34865] text-5xl md:text-6xl lg:text-7xl text-center mb-16 md:mb-20">
          FAQS 
        </h1>

        <div className="flex flex-col gap-3 w-full">
          <FaqDropdown
            question="Do I need formal brutalist desing experience?"
            answer="No formal experience is require, just a strong alignment with our manifesto and a willingness to break conventions purposefully"
          /> 
        </div>
      </div>
    </section>
  )
}

export default FAQ
