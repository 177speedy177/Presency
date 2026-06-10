// Presency content config
// All marketing copy, pricing, and feature flags live here.

// ── Feature flags ─────────────────────────────────────────────────────────────
export const SITE_CONFIG = {
  HIPAA_ACTIVE: false,
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
      "Everything in Patient Capture, plus active campaigns and a full online presence build-out.",
    includes: [
      "Everything in Patient Capture",
      "Recall campaigns",
      "Reactivation campaigns",
      "Google Business Profile optimization",
      "Competitor tracking",
      "Reputation growth program",
      "Website redesign with monthly optimization",
      "Multi-location support",
    ],
    note: "Recall and reactivation require active compliance setup and express patient consent. Website work is scoped during your audit.",
    cta: "Book a free Patient Capture Audit",
  },
] as const

// ── FAQ ───────────────────────────────────────────────────────────────────────
export const FAQS = [
  {
    q: "What happens when a patient calls and we can't answer?",
    a: "Within seconds, your practice's number sends an automatic text to the caller. The message is friendly, introduces the practice by name, and invites them to reply or book. It goes out whether the call came in during lunch, after hours, or when the front desk was on another line.",
  },
  {
    q: "Does this work with our existing phone number and practice software?",
    a: "Yes. You keep your current number. The system works alongside it with no forwarding, no new phones, and no new apps for your staff. It operates at the phone and web-form layer, so it works independently of your practice management software: Dentrix, Open Dental, Eaglesoft, or anything else.",
  },
  {
    q: "How is patient privacy handled?",
    a: "Automated messages are designed to contain no patient health information. They are appointment-invitation messages, not clinical communications. Anything involving personal health details is routed to your front desk to handle directly. The system is built around this principle from day one.",
  },
  {
    q: "How long does setup take?",
    a: "Most practices are live within about 10 business days. We handle the configuration. Your team does a brief 30-minute walkthrough to get familiar with the inbox and handoff process, and that is it.",
  },
  {
    q: "Will patients know the first message is automated?",
    a: "Most won't notice. The message goes out under your practice's name and number and is written to sound human and warm. For practices that want full transparency, we can add a short note in the message. Either approach works.",
  },
  {
    q: "Who handles replies that involve personal health details?",
    a: "Your front desk does. When a patient's reply includes anything that should be treated as protected health information, it routes to your inbox and your staff takes it from there. Automated responses never handle clinical content.",
  },
  {
    q: "How much does it cost?",
    a: "Plans start at $799 per month, plus a one-time setup fee. Exact pricing depends on your practice's situation and is set during the free 30-minute audit. No surprises, no high-pressure pitch.",
  },
  {
    q: "Why should we trust a newer company with something this important?",
    a: "Because you work directly with the founder, not an account rep, not a call center, not someone three layers removed from your practice. Every setup is handled personally, every question goes to the same person who built the system. That direct accountability is exactly what a newer company can offer that a large platform cannot. And every engagement includes a signed Business Associate Agreement, so your compliance obligations are covered.",
  },
  {
    q: "Do we need any new equipment?",
    a: "No. No new phone, no new hardware, no app your staff needs to download. It works through your existing number and a simple web-based inbox your team accesses from any browser.",
  },
  {
    q: "Can we cancel?",
    a: "Yes, any time, with no cancellation fee. If you cancel, your service runs through the end of the current billing period.",
  },
] as const
