import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Business Audit | Presency",
  description:
    "Get a free audit of your website, missed call exposure, and local competition. We'll tell you exactly what's costing you customers online.",
  alternates: {
    canonical: "https://getpresency.com/free-audit",
  },
}

export default function FreeAuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
