import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service | Presency",
  description:
    "Presency's terms of service. What you can expect from us and what we ask of you when using our website design and review management services.",
  alternates: {
    canonical: "https://getpresency.com/terms",
  },
}

const sections = [
  {
    heading: "Services",
    body: "Presency provides website design and Google review management services for local businesses. The specific scope of services is outlined in your service agreement or onboarding materials. We reserve the right to modify or discontinue any service with reasonable notice.",
  },
  {
    heading: "Payment",
    body: "Website redesign services are billed as a one-time payment upon project completion. The Online Presence Plan is billed monthly. All payments are non-refundable unless otherwise stated in your service agreement.",
  },
  {
    heading: "Cancellation",
    body: "You may cancel the Online Presence Plan at any time. Cancellation takes effect at the end of your current billing period. No partial refunds are issued for unused time. To cancel, contact us at hello@getpresency.com.",
  },
  {
    heading: "Your Responsibilities",
    body: "You are responsible for providing accurate information about your business, maintaining access to your Google Business Profile, and reviewing the responses we post on your behalf. You agree not to use our services for any unlawful purpose.",
  },
  {
    heading: "Google API Use",
    body: "Our review management service operates through the official Google Business Profile API. Your use of this feature is also subject to Google's Terms of Service. We act as your authorized representative when posting responses and will do so in good faith based on the brand voice you provide.",
  },
  {
    heading: "Intellectual Property",
    body: "Websites we design for you become your property upon final payment. We retain the right to display completed work in our portfolio unless you request otherwise in writing. You retain all rights to your business name, logo, and content.",
  },
  {
    heading: "Limitation of Liability",
    body: "Presency is not liable for indirect, incidental, or consequential damages arising from your use of our services. Our total liability in any dispute is limited to the amount you paid us in the 30 days prior to the claim.",
  },
  {
    heading: "Changes to These Terms",
    body: "We may update these terms from time to time. We will notify you of material changes via email. Continued use of our services after changes constitutes your acceptance.",
  },
  {
    heading: "Contact",
    body: "Questions about these terms? Reach us at hello@getpresency.com.",
  },
]

export default function TermsPage() {
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
            Terms of Service
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
