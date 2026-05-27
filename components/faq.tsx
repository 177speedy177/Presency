"use client"
import { RevealDiv } from "@/components/ui/reveal-div"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Will the responses sound like me or like a robot?",
    a: "Not like a robot at all. During onboarding, we capture your business's voice, tone, and personality. Every response is crafted to match how you naturally speak: warm, professional, or casual, depending on your brand. You can review and approve samples before we go live.",
  },
  {
    q: "Do I have to give you my Google password?",
    a: "Never. We connect to your Google Business Profile through the official Google API, using a secure authorization flow that you control. You authorize access with a few clicks, no password sharing required. You can revoke access at any time.",
  },
  {
    q: "How quickly does it respond after a review is posted?",
    a: "On the Online Presence Plan, responses go out within 4 minutes of a review being posted. You're far ahead of the industry average of 3+ days (or never).",
  },
  {
    q: "What if I get a very serious negative review?",
    a: "Serious or sensitive reviews are flagged for human review before a response is posted. We also use a de-escalation approach: acknowledge the concern, offer a path to resolution, and keep the tone professional. You'll be notified immediately for any review below 3 stars.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, absolutely. There are no long-term contracts. If you cancel, your service continues through the end of your billing period. No cancellation fees, no runaround.",
  },
  {
    q: "What's included in the website redesign?",
    a: "The Website Redesign includes a full custom website: professional design (not a template), mobile-first development, fast load times, clear calls-to-action, and integration with your Google Business Profile. Delivered in 2 weeks with 2 rounds of revisions included.",
  },
  {
    q: "Do you help with SEO?",
    a: "Yes. As part of the Online Presence Plan, we optimize your Google Business Profile for local search terms. It's one of the highest-impact things a local business can do for visibility. Ask us about it on a call.",
  },
  {
    q: "Do you work with businesses outside Pennsylvania?",
    a: "Yes. While we started in Pennsylvania, we work with local businesses across the US. Our services are entirely online and work regardless of where you're located.",
  },
  {
    q: "What does the website redesign process look like?",
    a: "We start with a short brief: your goals, your brand, and a few examples of sites you like. From there we design and build your site, send you a preview, take your feedback, and deliver the final version. Two rounds of revisions are included. Most sites are done in 2 weeks.",
  },
  {
    q: "Do I own my website after the redesign?",
    a: "Yes, completely. You own the code, the domain, and the hosting account. We hand everything over when the project is done. There are no ongoing fees unless you choose to add the Online Presence Plan.",
  },
]

export function FAQ() {
  return (
    <section
      id="faq"
      data-theme="light"
      className="section-pad"
      style={{ background: "var(--ink)" }}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <RevealDiv className="text-center mb-14">
          <p className="eyebrow mb-4">FAQ</p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "var(--text-primary)",
            }}
          >
            Common{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
              questions,
            </em>{" "}
            straight answers.
          </h2>
        </RevealDiv>

        <RevealDiv delay={100}>
          <Accordion className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={i}
                className="rounded-xl border transition-colors duration-200"
                style={{
                  background: "var(--surface-subtle)",
                  borderColor: "rgba(201,168,76,0.15)",
                  padding: "0 1.25rem",
                }}
              >
                <AccordionTrigger
                  className="font-body text-sm font-medium py-4 text-left cursor-pointer hover:no-underline transition-colors duration-200 w-full"
                  style={{ color: "var(--text-primary)" }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="font-body text-sm leading-relaxed pb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealDiv>

      </div>
    </section>
  )
}
