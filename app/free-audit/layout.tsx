import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Patient Capture Audit | Presency",
  description:
    "Request a free Patient Capture Audit for your dental practice. We map missed-call exposure, after-hours gaps, web inquiry response, and review presence. Report back within 2 business days.",
  alternates: {
    canonical: "https://getpresency.com/free-audit",
  },
}

export default function FreeAuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
