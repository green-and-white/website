export const STAR_STICKER =
  "http://localhost:3845/assets/66cc56276eb2ccb3d89f386dd2a1dab80ab855ba.svg";

export const BASIC_INCLUSIONS = [
  "1 Physical Yearbook",
  "1 Framed Print Toga (8 x 10 in)",
  "Hair & Make-up Services for Pictorials",
  "Live-editing of image after picture-taking",
  "1 Soft-copy of the Edited Graduate Photo only",
  "4 Wallet-size Toga (Black & White)",
  "4 Wallet-size Toga (Colored)",
  "Yearbook Delivery",
];

export const PACKAGE_CARDS = [
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

export const PAYMENT_DETAILS = [
  {
    title: "On-site (Cash Only)",
    description: "Please get a referral slip from the ",
    emphasis:"Green & White",
    descriptoin2:" booth first before proceeding to Accounting.",
  },
  {
    title: "Late payments",
    description: "Late payments will incur a fee of ₱400.",
  },
];

export const PAYMENT_SCHEMES = {
  intro: "You may opt to pay in Full or Partial",
  full:{
    title: "Full Payment",
    details: "100% by April 13",
  },
  partial: {
    title: "Partial (Two Installments)",
    details: "50% by April 13 and 50% by May 30",
    instructions: "Drop off your second installments at the dropbox in Rm. 503, 5/F Br. Connon Hall and fill up the QR Code to confirm your submission. If registration is ongoing, you may drop off your Official Receipt at the booth.",
  },
  advisory: "Please be advised that DLSU has updated its payment channels. As of January 31, the Accounting Cashier only accepts Cash payments on-site and has migrated its Card payments to Archers Hub. As a result,",
  emphasis:" Card and Online Banking are no longer accepted",
  advisory2: "  as a mode of payment for the yearbook."
}

export const REGISTRATION_STEPS = [
  {
    step: "01",
    title: "DECIDE ON PRE-REGISTRATION",
    cards: [
      {
        body: [
          [
            {
              type: "text",
              content:
                "Pre-registration is completely optional but will expedite the registration process.",
              linkText:"Access the pre-registration link here",
              link: "https://forms.gle/xNBJWFrup67DRsjP8"
            },
          ],
        ],
      },
    ],
  },
  {
    step: "02",
    title: "CHOOSE YOUR PAYMENT METHOD",
    cards: [
      {
        body: [
          [
            {
              type: "text",
              content: "Pay On-site at the Accounting Cashier––please get a Referral Slip from the "
            },
            {
              type: "emphasis",
              content: "Green & White",
            },
            {
              type: "text",
              content: " booth first. You may pay at your most convenient time.",
            },
          ],
        ],
      },
    ],
  },
  {
    step: "03",
    title: "RETURN TO G&W BOOTH AND PROVIDE YOUR PROOF OF PAYMENT",
    cards: [
      {
        body: [
          [
            {
              type: "text",
              content:
                "Submit Official Receipt (OR) and ensure that you get a copy of the OR",
            },
          ],
        ],
      },
    ],
  },
  {
    step: "04",
    title: "FINISH REGISTRATION",
    columnVariant: "wide",
    cards: [
      {
        list: [
          "Accomplish the registration form.",
          [
            { type: "text", content: "Wait for the print-out of your " },
            { type: "emphasis", content: "Green & White" },
            { type: "text", content: " Registration Form." }
          ],
          "Read and sign two copies of the form.",
          "Join the Telegram channel!",
        ],
        variant: "wide",
      },
    ],
  },
];

export const FAQs = [
  {
    question: "Can I avail of a yearbook even if I already graduated?",
    answer: "Yes, you may! However, please note that you will be part of the 2026 Yearbook, which may not align with the year you graduated."
  },
  {
    question: "I still have 3 terms left, do I need to register now?",
    answer: "We highly recommend registering within one year from your anticipated graduation date so that you can have your pictures before your ceremony, as our pictorial timeline does not align with the termly calendar of the school."
  },
  {
    question: "Can I register for the 2026 Yearbook even if I haven’t done my Application to Graduate yet?",
    answer: "Yes! So long as you have 4 terms or less left, you can already subscribe. Subscribing to the yearbook is a separate process and payment from the Application to Graduate (ATG). The ATG is handled by the Office of the University Registrar (OUR). Meanwhile, Green & White is a Student Media Group under the Student Media Office."
  },
  {
    question: "Are the pictorials here the same as the ones offered by OUR? Would you accept the images from OUR?",
    answer: "Our pictorial services are not the same, as ours is catered toward publishing the yearbook. With that, no, we do not accept photos from OUR or any other photo supplier for editorial consistency."
  },
  {
    question: "Can I change my chosen package once I’ve paid?",
    answer: "Once you have paid for your package, you may no longer change it. However, you can get the most basic package and avail additional services on the day of your pictorial."
  },
  {
    question: "Can we submit our own graduation photos?",
    answer: "Unfortunately, we do not accept photo submissions for editorial consistency."
  },
  {
    question: "Can I avail of the yearbook and graduation photos separately?",
    answer: "Green & White Yearbooks and Graduation Photos are a package deal and cannot be availed of separately."
  },
  {
    question: "Can we opt out of the hair and make-up services?",
    answer: "Yes, you may. However, there will be no change in price. The make-up artist will also continue to accommodate you for touch-ups and dress-changes."
  },
  {
    question: "What’s next after registering?",
    answer: "Please be sure to join our Telegram Subscriber-only announcement channel—if not, we will release a mailing list as well, but our announcements here may be easy to miss. Once subscribed, expect to receive updates and the full guidelines regarding all the 2026 Yearbook activities: write-ups, pictorials, online verification, and releasing."
  },
  {
    question: "Will there be a third batch of registration?",
    answer: "No, this will be the last ever batch of registration for Yearbook 2026. And yes, no more extensions beyond the announced dates. So if you want to be a part of this yearbook, register by April 13."
  },
  {
    question: "Why isn’t the release of the graduation photos on the day itself or sooner?",
    answer: "As a yearbook publication, our operations and production is founded on the consolidation of information. The data and schedule of activities is organized in batches to ensure that no data is lost in the process, as we do our best to accommodate the scale of students subscribing."
  }
];
