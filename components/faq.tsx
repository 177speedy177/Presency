"use client"
import { RevealDiv } from "@/components/ui/reveal-div"
import { ToothPattern } from "@/components/ui/tooth-pattern"
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
      className="section-pad relative overflow-hidden"
      style={{ background: "#f7f4ef" }}
    >
      <ToothPattern variant={3} />
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        <RevealDiv className="text-center mb-14">
          <p className="font-mono-label mb-4" style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#7a5c10" }}>
            FAQ
          </p>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 300, color: "#1c1810" }}
          >
            Common questions, straight answers.
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
                  background: "#ffffff",
                  borderColor: "rgba(201,168,76,0.18)",
                  padding: "0 1.25rem",
                  boxShadow: "0 1px 6px rgba(28,24,16,0.04)",
                }}
              >
                <AccordionTrigger
                  className="font-body text-sm font-medium py-4 text-left cursor-pointer hover:no-underline transition-colors duration-200 w-full"
                  style={{ color: "#1c1810" }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="font-body text-sm leading-relaxed pb-4"
                  style={{ color: "rgba(28,24,16,0.65)" }}
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
