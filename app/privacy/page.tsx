import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | Presency",
}

const sections = [
  {
    heading: "Information We Collect",
    body: "We collect information you provide directly — such as your name, business name, email address, and phone number when you fill out a contact form or sign up for our services. We also collect basic usage data (pages visited, browser type) through standard web analytics.",
  },
  {
    heading: "How We Use Your Information",
    body: "We use your information to respond to inquiries, deliver and improve our services, send service-related updates, and communicate with you about your account. We do not sell your personal information to third parties.",
  },
  {
    heading: "Google Business Profile Access",
    body: "Our review management service connects to your Google Business Profile via the official Google API. We request only the permissions necessary to read reviews and post responses on your behalf. You can revoke this access at any time through your Google account settings.",
  },
  {
    heading: "Data Storage and Security",
    body: "Your data is stored securely and we take reasonable precautions to protect it against unauthorized access. We use industry-standard encryption for data transmission.",
  },
  {
    heading: "Third-Party Services",
    body: "We use trusted third-party services including Formspree (form submissions) and Calendly (scheduling). These services have their own privacy policies and we encourage you to review them.",
  },
  {
    heading: "Your Rights",
    body: "You may request access to, correction of, or deletion of your personal data at any time by contacting us at hello@getpresency.com. We will respond within 30 days.",
  },
  {
    heading: "Changes to This Policy",
    body: "We may update this policy from time to time. We will notify you of material changes by email or by posting a notice on our website. Continued use of our services after changes constitutes acceptance of the updated policy.",
  },
  {
    heading: "Contact",
    body: "Questions about this privacy policy? Reach us at hello@getpresency.com.",
  },
]

export default function PrivacyPage() {
  return (
    <main data-theme="light" style={{ background: "var(--ink)" }}>
      <Nav />
      <div className="min-h-screen pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <p
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "11px",
              color: "var(--gold)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "1.25rem",
            }}
          >
            Legal
          </p>
          <h1
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 300,
              color: "var(--text-primary)",
              lineHeight: 1.1,
              marginBottom: "0.75rem",
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              marginBottom: "3rem",
            }}
          >
            Last updated: May 2026
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {sections.map((s) => (
              <div key={s.heading}>
                <h2
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontSize: "1.15rem",
                    fontWeight: 400,
                    color: "var(--text-primary)",
                    marginBottom: "0.6rem",
                  }}
                >
                  {s.heading}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: "var(--text-secondary)",
                  }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                fontSize: "0.875rem",
                color: "var(--gold)",
                textDecoration: "none",
              }}
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
