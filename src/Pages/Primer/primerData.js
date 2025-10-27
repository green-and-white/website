export const STAR_STICKER =
  "http://localhost:3845/assets/66cc56276eb2ccb3d89f386dd2a1dab80ab855ba.svg";

export const BASIC_INCLUSIONS = [
  "1 Physical yearbook",
  "1 Framed print toga (8 x 10 in)",
  "4 Wallet-size Toga black & white",
  "4 Wallet-size Toga colored",
  "1 Digital copy of the edited graduate portrait only",
  "Hair & Make-up services",
  "Yearbook delivery",
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
    title: "Onsite via Cash or Card",
    description: null,
  },
  {
    title: "Online-banking via official bank partners",
    description: "BPI, BDO, Union Bank, and RCBC. Those who choose to do Online-banking must pay in Full.",
  },
  {
    title: "GCash",
    description: "GCash is not an available option.",
  },
  {
    title: "Late payments",
    description: "Late payments will incur a fee of ₱400.",
  },
];

export const PAYMENT_SCHEMES = {
  intro: "You may opt to pay in Full or Partial",
  partial: {
    title: "Partial (Two Installments)",
    details: "50% by November 19 and 50% by January 14",
    instructions: "Drop off your second installments at the dropbox in Rm. 503, 5/F Br. Connon Hall and fill up the QR Code to confirm your submission. If registration is ongoing, you may drop off your Official Receipt at the booth.",
  },
  note: "Those who choose to do Online-banking must pay in Full.",
};

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
                "Pre-registration is completely optional but will expedite the registration process",
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
        heading: "ON-SITE",
        body: [
          [
            {
              type: "text",
              content: "Pay via Cash or Card at the Accounting Cashier—please get a Referral Slip from the ",
            },
            {
              type: "emphasis",
              content: "Green & White",
            },
            {
              type: "text",
              content: " booth",
            },
          ],
        ],
      },
      {
        heading: "ONLINE BANKING",
        body: [
          [
            {
              type: "text",
              content: "BPI, BDO, RCBC, and Union Bank",
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
        heading: "ON-SITE",
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
      {
        heading: "ONLINE BANKING",
        body: [
          [
            {
              type: "text",
              content: "Fill up confirmation form for the Accounting Office",
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
          "Accomplish registration form.",
          "Wait for the staff to print out a physical copy of your Registration Form, which will act as your receipt, Contract of Agreement, and Data Privacy Agreement.",
          "Read and sign two copies of the Registration Form to confirm that you agree to the terms and conditions of the contract.",
          "Join the Telegram channel!",
        ],
        variant: "wide",
      },
    ],
  },
];
