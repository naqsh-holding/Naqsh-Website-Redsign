"use client"

import { useState } from "react"

const services = [
  {
    id: 1,
    title: "Media Sector",
    description:
      "Our Media Sector delivers comprehensive marketing and creative production solutions. We specialize in advertising campaigns, brand development, digital marketing, and creative content creation. Our expertise spans outdoor advertising, event management, and production services, helping brands establish strong market presence through strategic media planning and creative storytelling.",
  },
  {
    id: 2,
    title: "Real Estate Sector",
    description:
      "Our Real Estate Sector develops value-driven, sustainable, and future-ready spaces. We specialize in commercial fit-out projects, interior design, custom furniture, and comprehensive building solutions. Our expertise includes office environments, retail spaces, and specialized facilities, delivering end-to-end solutions with advanced IT infrastructure and building automation systems.",
  },
  {
    id: 3,
    title: "Business Services Sector",
    description:
      "Our Business Services Sector enables entrepreneurship and business growth through smart services and inspiring workspaces. We provide business incubation services, co-working spaces, and entrepreneurial support programs. Our facilities offer modern work environments designed to foster collaboration, innovation, and productivity for startups and established businesses.",
  },
  {
    id: 4,
    title: "Information Technology Sector",
    description:
      "Our Information Technology Sector innovates with tech-driven solutions that enable digital transformation. We specialize in software development, UI/UX design, progressive web applications, and IoT solutions. Our expertise spans custom software development, digital platforms, and enterprise technology solutions that streamline operations and enhance user experiences.",
  },
]

export default function OurServices() {
  const [active, setActive] = useState(services[0])

  return (
    <section id="services" className="surface-ink py-24 md:py-32 lg:py-40">
      <div className="site-wrap grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="label">Investment sectors</p>
          <h2 className="display mt-6 text-[clamp(2.2rem,4.4vw,3.8rem)] text-[var(--on-ink)]">
            Naqsh Investment Sectors
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
            Naqsh Holding strategically invests in sectors that shape the future and drive long-term growth:
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="divide-y divide-white/15 border-y border-white/15">
            {services.map((service, index) => {
              const isActive = active.id === service.id
              return (
                <button
                  key={service.id}
                  onClick={() => setActive(service)}
                  className="group grid w-full grid-cols-[auto_1fr_auto] items-start gap-4 py-6 text-left md:gap-8 md:py-7"
                  aria-expanded={isActive}
                >
                  <span className="pt-1 text-xs tracking-[0.16em] text-white/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="display block text-2xl text-[var(--on-ink)] md:text-3xl">{service.title}</span>
                    <span
                      className={`grid transition-[grid-template-rows] duration-300 ${
                        isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <span className="overflow-hidden">
                        <span className="mt-4 block max-w-lg text-sm leading-relaxed text-white/60 md:text-base">
                          {service.description}
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className={`mt-2 inline-block h-3 w-3 border border-white/50 transition ${
                      isActive ? "bg-[var(--on-ink)]" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
