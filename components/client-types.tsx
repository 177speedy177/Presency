"use client"
import Image from "next/image"
import { PEXELS_IMAGES } from "@/lib/pexels"
import { RevealDiv } from "@/components/ui/reveal-div"

const clientTypes = [
  {
    src: PEXELS_IMAGES.dentalOffice,
    alt: "Doctor with young patient during a health checkup",
    label: "Dental & Medical",
    stat: "New patients start with reviews. Make every one count.",
  },
  {
    src: PEXELS_IMAGES.hairSalon,
    alt: "Barber styling a client's hair in a dim-lit barbershop",
    label: "Salon & Barbershop",
    stat: "Instagram drives them in. Responses keep them coming back.",
  },
  {
    src: PEXELS_IMAGES.restaurant,
    alt: "Elegant restaurant interior with candlelit tables",
    label: "Restaurant & Café",
    stat: "87% check Google reviews before choosing where to eat.",
  },
]

const StarRow = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="12" height="12" viewBox="0 0 14 14" fill="#c9a84c" aria-hidden="true">
        <path d="M7 1l1.5 4.5H14l-4 2.8 1.5 4.7L7 10l-4.5 3 1.5-4.7-4-2.8h5.5z" />
      </svg>
    ))}
  </div>
)

export function ClientTypes() {
  return (
    <section
      data-theme="light"
      className="section-pad"
      style={{ background: "var(--ink)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealDiv className="text-center mb-14">
          <p className="eyebrow mb-4">WHO WE SERVE</p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "var(--text-primary)",
            }}
          >
            Built for local businesses like{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--gold-light)" }}>yours.</em>
          </h2>
        </RevealDiv>

        <div className="grid sm:grid-cols-3 gap-6">
          {clientTypes.map((ct, i) => (
            <RevealDiv
              key={ct.label}
              delay={i * 120}
              dataTheme="dark"
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
              style={{
                aspectRatio: "3/4",
                border: "1px solid transparent",
                transition:
                  "opacity 0.7s ease, transform 0.7s ease, border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.5)"
                ;(e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 0 30px rgba(201,168,76,0.2), 0 8px 32px rgba(0,0,0,0.3)"
                ;(e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.borderColor = "transparent"
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = "none"
                ;(e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"
              }}
            >
              <Image
                src={ct.src}
                alt={ct.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              {/* Dark gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,12,10,0.92) 0%, rgba(13,12,10,0.35) 55%, rgba(13,12,10,0.1) 100%)",
                }}
              />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="eyebrow mb-2" style={{ color: "var(--gold-light)" }}>
                  {ct.label}
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <StarRow />
                </div>
                <p
                  className="font-body text-xs leading-snug"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {ct.stat}
                </p>
              </div>
            </RevealDiv>
          ))}
        </div>

        {/* Other business types */}
        <RevealDiv delay={400} className="mt-10 text-center">
          <p className="font-body text-sm" style={{ color: "var(--text-muted)" }}>
            Also great for: gyms, auto shops, spas, law offices, contractors, retail stores
          </p>
        </RevealDiv>
      </div>
    </section>
  )
}
