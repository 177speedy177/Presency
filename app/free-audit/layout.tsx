import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Presence Audit | Presency",
  description:
    "Get a free audit of your Google Business Profile, review response rate, and website. We'll tell you exactly what's costing you customers online.",
  alternates: {
    canonical: "https://getpresency.com/free-audit",
  },
}

export default function FreeAuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
