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
    q: "What exactly is the Online Presence Plan?",
    a: "The Online Presence Plan is a fully managed monthly service that covers everything your Google presence needs: Business Profile optimization, review responses posted on your behalf, local search visibility improvements, and a monthly performance report. We handle it all so you can focus on running your business.",
  },
  {
    q: "Do I have to give you my Google password?",
    a: "Never. We connect to your Google Business Profile through Google's official API using a secure authorization flow you control. You grant access with a few clicks. No password sharing, ever. You can revoke access at any time.",
  },
  {
    q: "Will the review responses sound like me or like a robot?",
    a: "They will sound like you. During onboarding we capture your voice, tone, and brand personality. Every response is crafted to match how you naturally communicate. Warm, professional, or direct. You can review samples before we go live.",
  },
  {
    q: "What if I get a serious negative review?",
    a: "Any review below 3 stars is flagged for human review before a response goes out. We take a measured approach: acknowledge the concern, offer a path to resolution, and keep the tone professional. You are notified immediately so you are never caught off guard.",
  },
  {
    q: "What's included in the website redesign?",
    a: "A fully custom website built for your business: professional design (never a template), mobile-first development, fast load times, SEO-ready structure, clear calls-to-action, and Google Business Profile integration. Delivered in 2 weeks with 2 rounds of revisions included.",
  },
  {
    q: "Do you help with local SEO?",
    a: "Yes. Google Business Profile optimization is a core part of the Online Presence Plan. We keep your profile complete, accurate, and actively managed, which is one of the highest-impact things a local business can do for search visibility.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No long-term contracts, no cancellation fees. If you cancel, your service runs through the end of your current billing period. No runaround.",
  },
  {
    q: "Do I own my website after the redesign?",
    a: "Yes, completely. You own the code, the domain, and the hosting account. We hand everything over when the project is complete. There are no ongoing fees unless you choose to add the Online Presence Plan.",
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
