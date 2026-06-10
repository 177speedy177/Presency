// Presency content config
// All marketing copy, pricing, and feature flags live here.
// Edit this file to update text or prices without touching component code.

// ── Feature flags ─────────────────────────────────────────────────────────────
// HIPAA_ACTIVE: flip to true once the BAA + GHL HIPAA add-on are active.
// SHOW_PRICES: flip to true to display plan pricing publicly.
export const SITE_CONFIG = {
  HIPAA_ACTIVE: false,
  SHOW_PRICES: false,
} as const

// ── Contact ───────────────────────────────────────────────────────────────────
export const CONTACT = {
  email: "hello@getpresency.com",
  calendly: "https://calendly.com/397jtc/30min",
  formspree: "https://formspree.io/f/mkoeqqyn",
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
      "The complete system for making sure no new-patient opportunity is ever lost.",
    includes: [
      "Instant text follow-up on every missed and after-hours call",
      "Instant follow-up on web form inquiries",
      "One unified inbox for all replies",
      "Automatic review requests after visits",
      "Monthly performance report",
      "Works with your existing phone number",
      "No new equipment or software",
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
      "Everything in Patient Capture, plus campaigns that bring patients back.",
    includes: [
      "Everything in Patient Capture",
      "Recall and reactivation campaigns",
      "Google Business Profile optimization",
      "Priority support",
    ],
    note: "Recall and reactivation involve patient contact lists and require active compliance setup and express patient consent.",
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
    a: "Yes. You keep your current number. The system works alongside it with no forwarding, no new phones, and no new apps for your staff. It operates at the phone and web-form layer, so it works independently of your practice management software.",
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
    q: "Do we need any new equipment?",
    a: "No. No new phone, no new hardware, no app your staff needs to download. It works through your existing number and a simple web-based inbox your team accesses from any browser.",
  },
  {
    q: "Can we cancel?",
    a: "Yes, any time, with no cancellation fee. If you cancel, your service runs through the end of the current billing period.",
  },
] as const
