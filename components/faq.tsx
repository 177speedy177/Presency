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
    q: "What happens when someone calls my business and I don't answer?",
    a: "Within seconds, your caller receives a text message from your business number. It introduces your business by name and asks how you can help. From there, the conversation continues over text until the customer is scheduled, their question is answered, or they are connected to you directly. It works the same way after hours, on weekends, and during busy periods when you can't pick up.",
  },
  {
    q: "Does this work with my existing phone number?",
    a: "Yes. You keep your current number. We set up a smart layer on top of it so that when a call is missed, the follow-up text goes out from that same number. Your customers see one consistent number at all times. No new app, no second phone, no changes to how you already operate.",
  },
  {
    q: "How long does setup take?",
    a: "For most businesses, your system is live within minutes of setup. We handle the configuration on our end. You do not need to install anything or learn any new software. We walk you through a short onboarding, confirm the messaging sounds like you, and you are ready to go.",
  },
  {
    q: "Will my customers know it's not me personally sending the texts?",
    a: "Most do not notice, and many assume it is you or a member of your team. During onboarding we capture your tone and voice so the messages feel personal and natural, not scripted. For businesses that prefer full transparency, we can include a short line noting that responses are handled by your team's system. Either way, the experience feels attentive and human.",
  },
  {
    q: "What if a customer texts back? Who handles that conversation?",
    a: "The system handles the follow-up intelligently to move the conversation toward a booking or answer. If a situation requires a personal touch or a judgment call, it flags the message so you can step in directly. You stay in the loop without needing to monitor every exchange.",
  },
  {
    q: "What kinds of businesses does this work best for?",
    a: "Any local service business that relies on phone calls and appointments: barbershops, dental offices, auto shops, contractors, salons, med spas, gyms, restaurants, law offices, and more. If missed calls cost you customers, this system fixes that.",
  },
  {
    q: "What's included in the website redesign?",
    a: "A fully custom website built for your business: professional design (never a template), mobile-first development, fast load times, SEO-ready structure, clear calls-to-action, and Google Business Profile integration. Delivered in 2 weeks with 2 rounds of revisions included.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No long-term contracts, no cancellation fees. If you cancel, your service runs through the end of your current billing period. No runaround.",
  },
  {
    q: "Do I own my website after the redesign?",
    a: "Yes, completely. You own the code, the domain, and the hosting account. We hand everything over when the project is complete. There are no ongoing fees unless you choose to add the Lead Recovery plan.",
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
