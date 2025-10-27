import styles from "../Primer.module.css";
import texture from "../../../assets/textures/texture.png";



export default function PaymentDeadlinesSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-[#00653e] to-[#008d57]" />
        <img
          src={texture}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 py-12 sm:py-20">
        <div className="relative mb-8 sm:mb-16">
          <h3 className={styles.h3} data-text="Payment Deadlines">
            Payment Deadlines
          </h3>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop Table */}
          <div className="hidden md:block">
            <div
              className="grid grid-cols-6 gap-1.5 bg-transparent"
              style={{ gridTemplateRows: "auto auto auto auto" }}
            >
              {/* Row 1: Headers */}
              <div
                className="border-[3px] border-black py-3 px-2 flex items-center justify-center text-center text-[17px] min-h-[60px] leading-[1.2] bg-[#bd1d54] text-white font-[Libre_Caslon_Condensed] font-bold italic rounded-tl-[20px]"
                style={{ gridArea: "1 / 1 / 2 / 2" }}
              >
                Deadlines
              </div>
              <div
                className="border-[3px] border-black py-3 px-2 flex items-center justify-center text-center text-[17px] min-h-[60px] leading-[1.2] bg-[#fb7da8] text-white font-[Libre_Caslon_Condensed] font-bold italic whitespace-nowrap"
                style={{ gridArea: "1 / 2 / 2 / 3" }}
              >
                Term of Payment
              </div>
              <div
                className="border-[3px] border-black py-3 px-2 flex items-center justify-center text-center text-[17px] min-h-[60px] leading-[1.2] bg-[#fb7da8] text-white font-[Libre_Caslon_Condensed] font-bold italic"
                style={{ gridArea: "1 / 3 / 2 / 4" }}
              >
                A
              </div>
              <div
                className="border-[3px] border-black py-3 px-2 flex items-center justify-center text-center text-[17px] min-h-[60px] leading-[1.2] bg-[#fb7da8] text-white font-[Libre_Caslon_Condensed] font-bold italic"
                style={{ gridArea: "1 / 4 / 2 / 5" }}
              >
                B
              </div>
              <div
                className="border-[3px] border-black py-3 px-2 flex items-center justify-center text-center text-[17px] min-h-[60px] leading-[1.2] bg-[#fb7da8] text-white font-[Libre_Caslon_Condensed] font-bold italic"
                style={{ gridArea: "1 / 5 / 2 / 6" }}
              >
                C
              </div>
              <div
                className="border-[3px] border-black py-3 px-2 flex items-center justify-center text-center text-[17px] min-h-[60px] leading-[1.2] bg-[#fb7da8] text-white font-[Libre_Caslon_Condensed] font-bold italic rounded-tr-[20px]"
                style={{ gridArea: "1 / 6 / 2 / 7" }}
              >
                D
              </div>

              {/* Row 2: November 19 (spans 2 rows) + Full Payment + Full Payment Prices */}
              <div
                className="border-[3px] border-black py-3 px-2 flex items-center justify-center text-right text-[17px] min-h-[60px] leading-[1.2] bg-[#f4f4f4] text-black font-[Libre_Caslon_Condensed] font-bold italic"
                style={{ gridArea: "2 / 1 / 4 / 2" }}
              >
                November 19
              </div>
              <div
                className="border-[3px] border-black py-5 px-2 flex items-center justify-center text-center text-[17px] min-h-[60px] leading-[1.2] bg-[#f4f4f4] text-black font-[Helvetica]"
                style={{ gridArea: "2 / 2 / 3 / 3" }}
              >
                Full Payment
              </div>
              <div
                className="border-[3px] border-black py-3 px-2 flex items-center justify-center text-center text-[17px] min-h-[60px] leading-[1.2] bg-[#f4f4f4] text-black font-[Helvetica]"
                style={{ gridArea: "2 / 3 / 3 / 4" }}
              >
                P5,000
              </div>
              <div
                className="border-[3px] border-black py-3 px-2 flex items-center justify-center text-center text-[17px] min-h-[60px] leading-[1.2] bg-[#f4f4f4] text-black font-[Helvetica]"
                style={{ gridArea: "2 / 4 / 3 / 5" }}
              >
                P5,150
              </div>
              <div
                className="border-[3px] border-black py-3 px-2 flex items-center justify-center text-center text-[17px] min-h-[60px] leading-[1.2] bg-[#f4f4f4] text-black font-[Helvetica]"
                style={{ gridArea: "2 / 5 / 3 / 6" }}
              >
                P5,300
              </div>
              <div
                className="border-[3px] border-black py-3 px-2 flex items-center justify-center text-center text-[17px] min-h-[60px] leading-[1.2] bg-[#f4f4f4] text-black font-[Helvetica]"
                style={{ gridArea: "2 / 6 / 3 / 7" }}
              >
                P4,800
              </div>

              {/* Row 3 & 4: 1st Installment + 2nd Installment + Installment Prices (span 2 rows) */}
              <div
                className="border-[3px] border-black py-5 px-2 flex items-center justify-center text-center text-[17px] min-h-[60px] leading-[1.2] bg-[#f4f4f4] text-black font-[Helvetica]"
                style={{ gridArea: "3 / 2 / 4 / 3" }}
              >
                1st Installment
              </div>
              <div
                className="border-[3px] border-black py-3 px-2 flex items-center justify-center text-center text-[17px] min-h-[60px] leading-[1.2] bg-[#f4f4f4] text-black font-[Helvetica]"
                style={{ gridArea: "3 / 3 / 5 / 4" }}
              >
                P2,500
              </div>
              <div
                className="border-[3px] border-black py-3 px-2 flex items-center justify-center text-center text-[17px] min-h-[60px] leading-[1.2] bg-[#f4f4f4] text-black font-[Helvetica]"
                style={{ gridArea: "3 / 4 / 5 / 5" }}
              >
                P2,575
              </div>
              <div
                className="border-[3px] border-black py-3 px-2 flex items-center justify-center text-center text-[17px] min-h-[60px] leading-[1.2] bg-[#f4f4f4] text-black font-[Helvetica]"
                style={{ gridArea: "3 / 5 / 5 / 6" }}
              >
                P2,650
              </div>
              <div
                className="border-[3px] border-black py-3 px-2 flex items-center justify-center text-center text-[17px] min-h-[60px] leading-[1.2] bg-[#f4f4f4] text-black font-[Helvetica] rounded-br-[20px]"
                style={{ gridArea: "3 / 6 / 5 / 7" }}
              >
                P2,400
              </div>

              {/* Row 4: January 14 + 2nd Installment */}
              <div
                className="border-[3px] border-black py-3 px-2 flex items-center justify-center text-right text-[17px] min-h-[60px] leading-[1.2] bg-[#f4f4f4] text-[#fd464e] font-[Libre_Caslon_Condensed] font-bold italic rounded-bl-[20px]"
                style={{ gridArea: "4 / 1 / 5 / 2" }}
              >
                January 14
              </div>
              <div
                className="border-[3px] border-black py-5 px-2 flex items-center justify-center text-center text-[17px] min-h-[60px] leading-[1.2] bg-[#f4f4f4] text-black font-[Helvetica]"
                style={{ gridArea: "4 / 2 / 5 / 3" }}
              >
                2nd Installment
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col gap-6">
            {/* Package A */}
            <div className="border-[3px] border-black rounded-[20px] overflow-hidden bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              <div className="bg-[#fb7da8] text-white font-[Libre_Caslon_Condensed] font-bold italic text-center py-3 text-lg">
                Package A
              </div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center pb-2 border-b-2 border-gray-200">
                  <span className="font-[Helvetica] font-semibold">Full Payment (Nov 19)</span>
                  <span className="font-[Helvetica] text-lg">P5,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b-2 border-gray-200">
                  <span className="font-[Helvetica] font-semibold">1st Installment (Nov 19)</span>
                  <span className="font-[Helvetica] text-lg">P2,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-[Helvetica] font-semibold text-[#fd464e]">2nd Installment (Jan 14)</span>
                  <span className="font-[Helvetica] text-lg">P2,500</span>
                </div>
              </div>
            </div>

            {/* Package B */}
            <div className="border-[3px] border-black rounded-[20px] overflow-hidden bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              <div className="bg-[#fb7da8] text-white font-[Libre_Caslon_Condensed] font-bold italic text-center py-3 text-lg">
                Package B
              </div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center pb-2 border-b-2 border-gray-200">
                  <span className="font-[Helvetica] font-semibold">Full Payment (Nov 19)</span>
                  <span className="font-[Helvetica] text-lg">P5,150</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b-2 border-gray-200">
                  <span className="font-[Helvetica] font-semibold">1st Installment (Nov 19)</span>
                  <span className="font-[Helvetica] text-lg">P2,575</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-[Helvetica] font-semibold text-[#fd464e]">2nd Installment (Jan 14)</span>
                  <span className="font-[Helvetica] text-lg">P2,575</span>
                </div>
              </div>
            </div>

            {/* Package C */}
            <div className="border-[3px] border-black rounded-[20px] overflow-hidden bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              <div className="bg-[#fb7da8] text-white font-[Libre_Caslon_Condensed] font-bold italic text-center py-3 text-lg">
                Package C
              </div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center pb-2 border-b-2 border-gray-200">
                  <span className="font-[Helvetica] font-semibold">Full Payment (Nov 19)</span>
                  <span className="font-[Helvetica] text-lg">P5,300</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b-2 border-gray-200">
                  <span className="font-[Helvetica] font-semibold">1st Installment (Nov 19)</span>
                  <span className="font-[Helvetica] text-lg">P2,650</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-[Helvetica] font-semibold text-[#fd464e]">2nd Installment (Jan 14)</span>
                  <span className="font-[Helvetica] text-lg">P2,650</span>
                </div>
              </div>
            </div>

            {/* Package D */}
            <div className="border-[3px] border-black rounded-[20px] overflow-hidden bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              <div className="bg-[#fb7da8] text-white font-[Libre_Caslon_Condensed] font-bold italic text-center py-3 text-lg">
                Package D
              </div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center pb-2 border-b-2 border-gray-200">
                  <span className="font-[Helvetica] font-semibold">Full Payment (Nov 19)</span>
                  <span className="font-[Helvetica] text-lg">P4,800</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b-2 border-gray-200">
                  <span className="font-[Helvetica] font-semibold">1st Installment (Nov 19)</span>
                  <span className="font-[Helvetica] text-lg">P2,400</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-[Helvetica] font-semibold text-[#fd464e]">2nd Installment (Jan 14)</span>
                  <span className="font-[Helvetica] text-lg">P2,400</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
