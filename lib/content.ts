// Presency content config
// All marketing copy, pricing, and feature flags live here.

// ── Feature flags ─────────────────────────────────────────────────────────────
export const SITE_CONFIG = {
  SHOW_PRICES: true,
  // COMPLIANCE_LIVE: flip to true once BAA + GHL HIPAA add-on are live.
  // Controls the compliance badge strip and HIPAA trust block wording.
  COMPLIANCE_LIVE: true,
  // STARTING_AT_PRICE: floor price shown in the plans section anchor.
  STARTING_AT_PRICE: 799,
} as const

// ── Contact ───────────────────────────────────────────────────────────────────
export const CONTACT = {
  email: "hello@getpresency.com",
  calendly: "https://calendly.com/397jtc/30min",
  formspree: "https://formspree.io/f/mkoeqqyn",
  // TODO: add phone number here when available
  phone: null as string | null,
} as const

// ── Pricing ───────────────────────────────────────────────────────────────────
export const PRICING = {
  patientCapture: {
    name: "Patient Capture",
    setup: 1500,
    monthly: 799,
  },
  practiceGrowth: {
    name: "Practice Growth",
    setup: 2500,
    monthly: 1799,
  },
} as const

// ── Plans (inclusions + copy) ─────────────────────────────────────────────────
export const PLANS = [
  {
    id: "patient-capture",
    name: "Patient Capture",
    badge: "Most practices start here",
    featured: true,
    description:
      "The complete system for making sure no new-patient opportunity is ever missed.",
    includes: [
      "Instant text follow-up on every missed and after-hours call",
      "Instant follow-up on web form inquiries",
      "One unified inbox for all replies",
      "Automatic review requests after visits",
      "Monthly performance report",
      "Works with your existing phone number",
      "No new equipment or software for your staff",
    ],
    note: null as string | null,
    cta: "Book a free Patient Capture Audit",
  },
  {
    id: "practice-growth",
    name: "Practice Growth",
    badge: null as string | null,
    featured: false,
    description:
      "Everything in Patient Capture, plus active campaigns that work your existing records and keep your online presence running.",
    includes: [
      "Everything in Patient Capture",
      "Recall & reactivation campaigns",
      "Done-for-you review responses, HIPAA-safe",
      "Unscheduled treatment follow-up",
      "No-show & cancellation rebooking",
    ],
    note: "Campaigns require active compliance setup and express patient consent.",
    cta: "Book a free Patient Capture Audit",
  },
] as const

// ── FAQ ───────────────────────────────────────────────────────────────────────
export const FAQS = [
  {
    q: "What exactly does Presency do?",
    a: "We are a local digital agency. We build your website, optimize and manage your Google Business Profile, run your review and reputation building, handle your social posting, and make sure your business shows up when people search, including in AI tools like ChatGPT and Gemini. You can start with one piece and add the rest over time.",
  },
  {
    q: "Do I have to buy everything at once?",
    a: "No. Most businesses start with the foundation, usually a professional website, and grow from there. We recommend the smallest first step that moves the needle, then layer on Google, reviews, and social as it makes sense for you. There is no pressure to take it all on day one.",
  },
  {
    q: "How does pricing work?",
    a: "Pricing depends on what your business actually needs, so we set it during a free conversation rather than posting fixed tiers. You will know exactly what you are getting and what it costs before anything starts. No surprises, no hard sell.",
  },
  {
    q: "Do you build the website, or just advise?",
    a: "We build it, host it, and manage it. You do not touch the technical side. You get a fast, modern, mobile-ready site, and when something needs to change, you tell us and we handle it.",
  },
  {
    q: "What if I already have a website?",
    a: "Then we either redesign and modernize it, or leave it as is and focus on what will move the needle most, often your Google Business Profile, reviews, and visibility. We start with whatever gives you the biggest return.",
  },
  {
    q: "How does Google Business Profile optimization actually help?",
    a: "Your Google Business Profile is what shows up in the map and local results when someone searches for what you do. We set the right categories, add photos, post regularly, answer questions, and build reviews, so you rank higher and look like the obvious choice. For most local businesses it is the single highest-impact place to be found.",
  },
  {
    q: "Will customers know a review request came from a system?",
    a: "The request goes out under your business name and is written to sound human and warm. Most people simply see a friendly note asking about their experience. We never write or fake reviews. We just make it easy for happy customers to leave a real one.",
  },
  {
    q: "How long until I see results?",
    a: "A new website can be live in a couple of weeks. Google and review improvements build over the following weeks and months as your profile strengthens and reviews accumulate. We focus on steady, real progress, not overnight promises.",
  },
  {
    q: "Do I own my website?",
    a: "Yes. The website is yours. We build, host, and maintain it for you, and if you ever decide to part ways, you keep your site and your content.",
  },
  {
    q: "Why should I trust a newer, smaller agency?",
    a: "Because you work directly with the founder, not an account rep or a call center. Every project is handled personally by the person who built Presency, which means faster answers, real accountability, and work that actually gets done. That direct access is something a large agency cannot give you.",
  },
] as const
