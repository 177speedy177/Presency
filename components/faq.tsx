"use client"
import { RevealDiv } from "@/components/ui/reveal-div"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQS } from "@/lib/content"

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
            style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 300, color: "var(--text-primary)" }}
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
            {FAQS.map((faq, i) => (
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
