import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Presency",
  description:
    "Get in touch with Presency for websites, Google, and reputation for local businesses. Tell us about your business and we'll set up a free, no-pressure conversation or keep it in email.",
  alternates: {
    canonical: "https://getpresency.com/contact",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
