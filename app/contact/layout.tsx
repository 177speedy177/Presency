import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Presency",
  description:
    "Get in touch with Presency. Tell us about your business and we'll set up a free 30-minute audit or keep it in email. No pressure, no pitch.",
  alternates: {
    canonical: "https://getpresency.com/contact",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
