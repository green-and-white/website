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
                "Pre-registration is completely optional but will expedite the registration process",
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
          "Wait for the print-out of your Green & White Registration Form.",
          "Read and sign two copies of the form.",
          "Join the Telegram channel!",
        ],
        variant: "wide",
      },
    ],
  },
];
