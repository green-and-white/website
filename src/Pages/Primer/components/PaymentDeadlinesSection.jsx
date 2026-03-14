import styles from "../Primer.module.css";
import texture from "../../../assets/textures/texture.png";

const PACKAGES = ['A', 'B', 'C', 'D'];

const DEADLINE_ROWS = [
  {
    deadline: 'April 13',
    deadlineColorClass: 'text-black',
    deadlineRowSpan: 2,
    terms: [
      { label: 'Full Payment',    prices: ['P5,000', 'P5,150', 'P5,300', 'P4,800'], priceRowSpan: 1 },
      { label: '1st Installment', prices: ['P2,500', 'P2,575', 'P2,650', 'P2,400'], priceRowSpan: 2 },
    ],
  },
  {
    deadline: 'May 30',
    deadlineColorClass: 'text-[#fd464e]',
    deadlineRowSpan: 1,
    terms: [
      { label: '2nd Installment', prices: null, priceRowSpan: 1 },
    ],
  },
];

const MOBILE_ROWS = [
  { label: 'A', full: 'P5,000', first: 'P2,500', second: 'P2,500' },
  { label: 'B', full: 'P5,150', first: 'P2,575', second: 'P2,575' },
  { label: 'C', full: 'P5,300', first: 'P2,650', second: 'P2,650' },
  { label: 'D', full: 'P4,800', first: 'P2,400', second: 'P2,400' },
];

// Desktop shared cell classes (border-separate: right+bottom only avoids doubled borders)
const dtBase   = "border-r-[2px] border-b-[2px] border-black text-center text-[17px] min-h-[60px] leading-[1.2]";
const dtHeader = `${dtBase} border-t-[2px] py-3 px-2 text-white font-[Libre_Caslon_Condensed] font-bold italic`;
const dtDate   = `${dtBase} border-l-[2px] py-3 px-2 bg-[#f4f4f4] font-[Libre_Caslon_Condensed] italic`;
const dtTerm   = `${dtBase} py-5 px-2 bg-[#f4f4f4] text-black font-[Helvetica] `;
const dtPrice  = `${dtBase} py-3 px-2 bg-[#f4f4f4] text-black font-[Helvetica] font-bold`;

// Mobile shared cell classes
const mbHeader = "border border-black py-2 px-2 text-center font-[Libre_Caslon_Condensed] font-bold italic";
const mbLabel  = "border border-black bg-[#f4f4f4] text-black font-[Libre_Caslon_Condensed] font-bold italic py-3 px-3 text-center";
const mbPrice  = "border border-black bg-[#f4f4f4] text-black font-bold py-3 px-2 text-center";

const LAST_ROW_INDEX = MOBILE_ROWS.length - 1;

export default function PaymentDeadlinesSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-[#00653e] to-[#008d57]" />
        <img
          src={texture}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-20">
        <div className="relative mb-8 sm:mb-16">
          <h3 className={styles.h3} data-text="Payment Deadlines">
            Payment Deadlines
          </h3>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop Table */}
          <div className="hidden md:block">
            <table className="w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className={`${dtHeader} bg-[#bd1d54] border-l-[2px] rounded-tl-[20px]`}>Deadlines</th>
                  <th className={`${dtHeader} bg-[#fb7da8] whitespace-nowrap`}>Term of Payment</th>
                  {PACKAGES.map((pkg, i) => (
                    <th
                      key={pkg}
                      className={`${dtHeader} bg-[#fb7da8]${i === PACKAGES.length - 1 ? ' rounded-tr-[20px]' : ''}`}
                    >
                      {pkg}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DEADLINE_ROWS.map((deadlineRow, dIndex) =>
                  deadlineRow.terms.map((term, tIndex) => {
                    const isLastDeadline = dIndex === DEADLINE_ROWS.length - 1;
                    return (
                      <tr key={`${dIndex}-${tIndex}`}>
                        {tIndex === 0 && (
                          <td
                            rowSpan={deadlineRow.deadlineRowSpan}
                            className={`${dtDate} ${deadlineRow.deadlineColorClass}${isLastDeadline ? ' rounded-bl-[20px]' : ''}`}
                          >
                            {deadlineRow.deadline}
                          </td>
                        )}
                        <td className={dtTerm}>{term.label}</td>
                        {term.prices?.map((price, pIndex) => {
                          const isLastPkg = pIndex === PACKAGES.length - 1;
                          return (
                            <td
                              key={pIndex}
                              rowSpan={term.priceRowSpan}
                              className={`${dtPrice}${isLastPkg && term.priceRowSpan > 1 ? ' rounded-br-[20px]' : ''}`}
                            >
                              {price}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Layout — transposed table */}
          <div className="md:hidden overflow-x-auto">
            <table className="w-full border-separate border-spacing-0 text-[13px] font-[Helvetica]">
              <thead>
                <tr>
                  <th className={`${mbHeader} bg-[#bd1d54] text-white rounded-tl-[12px]`}>Package</th>
                  <th className={`${mbHeader} bg-[#fb7da8] text-white`}>
                    Full Payment<br /><span className="font-normal  not-italic text-[14px]">April 13</span>
                  </th>
                  <th className={`${mbHeader} bg-[#fb7da8] text-white`}>
                    1st Install.<br /><span className="font-normal not-italic text-[14px]">April 13</span>
                  </th>
                  <th className={`${mbHeader} bg-[#fb7da8] text-white rounded-tr-[12px]`}>
                    2nd Install.<br /><span className="font-normal not-italic text-[14px] ">May 30</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {MOBILE_ROWS.map((row, i) => (
                  <tr key={row.label}>
                    <td className={`${mbLabel}${i === LAST_ROW_INDEX ? ' rounded-bl-[12px]' : ''}`}>{row.label}</td>
                    <td className={mbPrice}>{row.full}</td>
                    <td className={mbPrice}>{row.first}</td>
                    <td className={`${mbPrice}${i === LAST_ROW_INDEX ? ' rounded-br-[12px]' : ''}`}>{row.second}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://drive.google.com/file/d/1V-f_XySz_YEAo9Ig35fdsFbGoyormsvh/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#00653e] font-[Libre_Caslon_Condensed] font-bold italic text-[18px] rounded-full border-[3px] border-white shadow-lg hover:bg-[#00653e] hover:text-white hover:border-white transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z"/>
            </svg>
            Download the full primer here
          </a>
        </div>
      </div>
    </section>
  );
}
         