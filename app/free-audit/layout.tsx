import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Local Presence Audit | Presency",
  description:
    "Request a free Local Presence Audit for your business. We review your website, Google Business Profile, reviews, and AI search visibility, then send an honest breakdown of what is costing you customers. Report back within 2 business days.",
  alternates: {
    canonical: "https://getpresency.com/free-audit",
  },
}

export default function FreeAuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
