import React from "react";
import "./Primer.css";
import texture from "../../assets/textures/texture.png";

const STAR_STICKER =
  "http://localhost:3845/assets/66cc56276eb2ccb3d89f386dd2a1dab80ab855ba.svg";

const BASIC_INCLUSIONS = [
  "1 Physical yearbook",
  "1 Framed print toga (8 x 10 in)",
  "4 Wallet-size Toga black & white",
  "4 Wallet-size Toga colored",
  "1 Digital copy of the edited graduate portrait only",
  "Hair & Make-up services",
  "Yearbook delivery",
];

const PACKAGE_CARDS = [
  {
    tier: "A",
    title: "Business",
    price: "₱5,000",
    accent: "#00995e",
    perks: ["(4) 2 x 2 ID Resume Pics", "(4) 1 x 1 ID Resume Pics"],
  },
  {
    tier: "B",
    title: "Creatives",
    price: "₱5,150",
    accent: "#552cb7",
    perks: ["(6) Wallet-size creative pics"],
  },
  {
    tier: "C",
    title: "Business & Creatives",
    price: "₱5,300",
    accent: "#fd5a46",
    perks: [
      "(4) 2 x 2 ID Resume Pics",
      "(4) 1 x 1 ID Resume Pics",
      "(6) Wallet-size creative pics",
    ],
  },
  {
    tier: "D",
    title: "Scholars",
    price: "₱4,800",
    accent: "#fb7da8",
    perks: ["(4) 2 x 2 ID Resume Pics", "(4) 1 x 1 ID Resume Pics"],
  },
];

export default function Primer() {
  return (
    <main>
      {/* Registration */}
      <section className="primer-hero flex flex-col pt-8 pb-0">
        <div className="hero-inner flex justify-between h-[90vh]">
          <h2 data-text="Registration">Registration</h2>
          <h3 data-text="Guidelines">Guidelines</h3>
        </div>

        <img
          src={texture}
          alt=""
          aria-hidden="true"
          className="primer-texture"
        />
      </section>

      {/* Packages and Payments */}
      <section className="primer-packages pt-20">
        <img
          src={texture}
          alt=""
          aria-hidden="true"
          className="primer-texture"
        />

        <div className="primer-packages__content">
          <div className="packages-header">
            <h2 data-text="Yearbook">Yearbook</h2>
            <h3 data-text="Packages & Payment">Packages & Payment</h3>
          </div>

          <div className="primer-packages__layout">
            <aside className="primer-packages__aside">
              <div className="basic-inclusions-card">
                <div className="basic-inclusions-card__title">
                  <span className="basic-inclusions-card__highlight">
                    + Basic Inclusions
                  </span>
                  <span className="basic-inclusions-card__subtitle">
                    (All packages come with these services)
                  </span>
                </div>

                <ul className="basic-inclusions-card__list">
                  {BASIC_INCLUSIONS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <button type="button" className="packages-toggle">
                <span>Payment Details</span>
                <span aria-hidden="true">+</span>
              </button>

              <button type="button" className="packages-toggle">
                <span>Payment Schemes</span>
                <span aria-hidden="true">+</span>
              </button>
            </aside>

            <div className="primer-packages__cards">
              {PACKAGE_CARDS.map((pkg) => (
                <article
                  key={pkg.tier}
                  className="package-card"
                  style={{ "--package-accent": pkg.accent }}
                >
                  <div className="package-card__surface">
                    <div className="package-card__price">{pkg.price}</div>
                    <div className="package-card__heading">
                      <div className="package-card__tier">{pkg.tier}</div>
                      <div className="package-card__title">{pkg.title}</div>
                    </div>
                    <ul className="package-card__list">
                      {pkg.perks.map((perk) => (
                        <li key={perk}>{perk}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <figure className="late-fee-sticker">
              <img src={STAR_STICKER} alt="" aria-hidden="true" />
              <figcaption>
                <span>P400</span>
                <small>late fee!</small>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00995e] via-[#00995e] to-[#00653e]" />
          <img
            src={texture}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-20">
          <div className="flex items-end">
            <h3 className="borde ml-auto" data-text="Timeline">
              Timeline
            </h3>
          </div>

          <div className="relative w-full max-w-[1075px] h-[490px] mx-auto">
            {/* Timeline line with dots */}
            <div className="absolute left-0 right-0 top-[50%] h-[1px]">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
              {/* Dots */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full border-[3px] border-white" />
              <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full border-[3px] border-white" />
              <div className="absolute left-[40%] top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full border-[3px] border-white" />
              <div className="absolute left-[60%] top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full border-[3px] border-white" />
              <div className="absolute left-[80%] top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full border-[3px] border-white" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full border-[3px] border-white" />

              {/* Vertical connectors */}
              <svg className="absolute left-[20%] top-1/2 w-[2px] h-[180px] -translate-x-1/2">
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="100%"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
              <svg className="absolute left-[40%] bottom-1/2 w-[2px] h-[180px] -translate-x-1/2">
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="100%"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
              <svg className="absolute left-[60%] top-1/2 w-[2px] h-[200px] -translate-x-1/2">
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="100%"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
              <svg className="absolute left-[80%] bottom-1/2 w-[2px] h-[200px] -translate-x-1/2">
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="100%"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
            </div>

            {/* Timeline items */}
            <div className="absolute left-[21.5%] top-0 w-[195px] text-white text-[17px]">
              <p className="font-bold mb-2">DURING PICTORIALS</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Hair & Make-Up</li>
                <li>Live-editing</li>
                <li>
                  Additional P500 for the raw and edited files of all your
                  portraits (graduate, business, and creative)
                </li>
              </ul>
            </div>

            <div className="absolute left-[40%] bottom-[13.5%] w-[200px] text-white text-[17px] -translate-x-1/2">
              <p className="font-bold mb-2 whitespace-nowrap">
                2-3 MONTHS AFTER PICTORIALS
              </p>
              <p className="font-bold mb-2">ONLINE VERIFICATION</p>
              <ul className="list-disc pl-5">
                <li>Digital copy of the Graduate portrait</li>
              </ul>
            </div>

            <div className="absolute left-[62%] top-0 w-[230px] text-white text-[17px]">
              <p className="font-bold mb-2 whitespace-nowrap">
                3-4 MONTHS AFTER PICTORIALS
              </p>
              <p className="font-bold mb-2">RELEASING</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>The framed image together with all the printouts</li>
                <li>Subscribers must pick up their frames on campus</li>
              </ul>
            </div>

            <div className="absolute left-[82%] bottom-[13.5%] w-[180px] text-white text-[17px]">
              <p className="font-bold mb-2 whitespace-nowrap">
                END OF '26 TO START OF '27
              </p>
              <ul className="list-disc pl-5">
                <li>Physical Yearbook delivered to your home</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Deadlines */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00653e] to-[#008d57]" />
          <img
            src={texture}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-20">
          <div className="relative mb-16">
            <p className="font-[Libre_Caslon_Condensed] font-bold italic text-[64px] leading-normal text-white">
              Payment Deadlines
            </p>
            <p className="absolute top-[6px] left-[7px] font-[Libre_Caslon_Condensed] font-bold italic text-[64px] leading-normal text-black pointer-events-none">
              Payment Deadlines
            </p>
          </div>

          <div className="max-w-[896px] mx-auto">
            <div className="relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              {/* Table Grid */}
              <div className="grid grid-cols-6 grid-rows-3">
                {/* Header Row */}
                <div className="bg-[#bd1d54] border-[3px] border-black rounded-tl-[20px] p-2 flex items-center justify-end">
                  <p className="font-[Libre_Caslon_Condensed] font-bold italic text-[17px] text-white text-right">
                    Deadlines
                  </p>
                </div>
                <div className="bg-[#fb7da8] border-[3px] border-black p-2 flex items-center justify-center">
                  <p className="font-[Libre_Caslon_Condensed] font-bold italic text-[17px] text-white text-center">
                    Term of Payment
                  </p>
                </div>
                <div className="bg-[#fb7da8] border-[3px] border-black p-2 flex items-center justify-center">
                  <p className="font-[Libre_Caslon_Condensed] font-bold italic text-[17px] text-white text-center">
                    A
                  </p>
                </div>
                <div className="bg-[#fb7da8] border-[3px] border-black p-2 flex items-center justify-center">
                  <p className="font-[Libre_Caslon_Condensed] font-bold italic text-[17px] text-white text-center">
                    B
                  </p>
                </div>
                <div className="bg-[#fb7da8] border-[3px] border-black p-2 flex items-center justify-center">
                  <p className="font-[Libre_Caslon_Condensed] font-bold italic text-[17px] text-white text-center">
                    C
                  </p>
                </div>
                <div className="bg-[#fb7da8] border-[3px] border-black rounded-tr-[20px] p-2 flex items-center justify-center">
                  <p className="font-[Libre_Caslon_Condensed] font-bold italic text-[17px] text-white text-center">
                    D
                  </p>
                </div>

                {/* Second Row */}
                <div className="bg-[#f4f4f4] border-[3px] border-black p-2 flex items-center justify-end">
                  <p className="font-[Libre_Caslon_Condensed] font-bold italic text-[17px] text-black text-right">
                    November 16
                  </p>
                </div>
                <div className="bg-[#f4f4f4] border-[3px] border-black p-2 flex items-center justify-center">
                  <p className="font-[Helvetica] text-[17px] text-black text-center">
                    Full Payment
                  </p>
                </div>
                <div className="bg-[#f4f4f4] border-[3px] border-black p-2 flex items-center justify-center">
                  <p className="font-[Helvetica] text-[17px] text-black text-center">
                    P5000
                  </p>
                </div>
                <div className="bg-[#f4f4f4] border-[3px] border-black p-2 flex items-center justify-center">
                  <p className="font-[Helvetica] text-[17px] text-black text-center">
                    P5150
                  </p>
                </div>
                <div className="bg-[#f4f4f4] border-[3px] border-black p-2 flex items-center justify-center">
                  <p className="font-[Helvetica] text-[17px] text-black text-center">
                    P5300
                  </p>
                </div>
                <div className="bg-[#f4f4f4] border-[3px] border-black p-2 flex items-center justify-center">
                  <p className="font-[Helvetica] text-[17px] text-black text-center">
                    P4800
                  </p>
                </div>

                {/* Third Row */}
                <div className="bg-[#f4f4f4] border-[3px] border-black rounded-bl-[20px] p-2 flex items-center justify-end">
                  <p className="font-[Libre_Caslon_Condensed] font-bold italic text-[17px] text-[#fd464e] text-right">
                    January 14
                  </p>
                </div>
                <div className="bg-[#f4f4f4] border-[3px] border-black p-2 flex items-center justify-center">
                  <p className="font-[Helvetica] text-[17px] text-black text-center">
                    1st Installment
                    <br />
                    2nd Installment
                  </p>
                </div>
                <div className="bg-[#f4f4f4] border-[3px] border-black p-2 flex items-center justify-center">
                  <p className="font-[Helvetica] text-[17px] text-black text-center">
                    P2500
                  </p>
                </div>
                <div className="bg-[#f4f4f4] border-[3px] border-black p-2 flex items-center justify-center">
                  <p className="font-[Helvetica] text-[17px] text-black text-center">
                    P2575
                  </p>
                </div>
                <div className="bg-[#f4f4f4] border-[3px] border-black p-2 flex items-center justify-center">
                  <p className="font-[Helvetica] text-[17px] text-black text-center">
                    P2650
                  </p>
                </div>
                <div className="bg-[#f4f4f4] border-[3px] border-black rounded-br-[20px] p-2 flex items-center justify-center">
                  <p className="font-[Helvetica] text-[17px] text-black text-center">
                    P2400
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#5332a3] to-[#261351]" />
          <img
            src={texture}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-20">
          <div className="flex justify-between items-start mb-20">
            <h2 data-text="Registration">Registration</h2>
            <h3 data-text="Steps">Steps</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 01 */}
            <div className="text-center text-white">
              <div className="relative inline-block mb-6">
                <h3 data-text="01">01</h3>
              </div>
              <p className="font-bold text-[17px] mb-4">
                DECIDE ON PRE-REGISTRATION
              </p>
              <p className="text-[17px]">
                Pre-registration is completely optional but will expedite the
                registration process
              </p>
            </div>

            {/* Step 02 */}
            <div className="text-center text-white">
              <div className="relative inline-block mb-6">
                <h3 data-text="02">02</h3>
              </div>
              <p className="font-bold text-[17px] mb-4">
                CHOOSE YOUR PAYMENT METHOD
              </p>
              <div className="text-left text-[17px] max-w-[194px] mx-auto">
                <p className="font-bold mb-1">ONSITE</p>
                <p className="mb-4">
                  Pay via Cash or Card at the Accounting Cashier
                </p>
                <p className="font-bold mb-1">ONLINE BANKING</p>
                <p>BPI, BDO, RCBC, and Union Bank</p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="text-center text-white">
              <div className="relative inline-block mb-6">
                <h3 data-text="03">03</h3>
              </div>
              <p className="font-bold text-[17px] mb-4 max-w-[317px] mx-auto">
                RETURN TO G&W BOOTH AND PROVIDE YOUR PROOF OF PAYMENT
              </p>
              <div className="text-left text-[17px] max-w-[317px] mx-auto">
                <p className="font-bold mb-1">ONSITE</p>
                <p className="mb-4">
                  Submit Official Receipt (OR) and ensure that you get a copy of
                  the OR
                </p>
                <p className="font-bold mb-1">ONLINE BANKING</p>
                <p>Fill up confirmation for the Accounting Office</p>
              </div>
            </div>

            {/* Step 04 */}
            <div className="text-center text-white">
              <div className="relative inline-block mb-6">
                <h3 data-text="04">04</h3>
              </div>
              <p className="font-bold text-[17px] mb-4">FINISH REGISTRATION</p>
              <ol className="text-left text-[17px] list-decimal pl-5 space-y-1">
                <li>Accomplish registration form.</li>
                <li>
                  Wait for the staff to print out a physical copy of your
                  Registration Form, which will act as your receipt, Contract of
                  Agreement, and Data Privacy Agreement.
                </li>
                <li>
                  Read and sign two copies of the Registration Form to confirm
                  that you agree to the terms and conditions of the contract.
                </li>
                <li>Join the Telegram channel!</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
