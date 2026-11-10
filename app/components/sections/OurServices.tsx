"use client"

import { useState } from "react"
import { useLocale } from "../../lib/i18n/LocaleProvider"

function canHover() {
  return typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches
}

export default function OurServices() {
  const [activeId, setActiveId] = useState<number | null>(1)
  const { t } = useLocale()
  const services = t.services.items.map((item, index) => ({ id: index + 1, ...item }))

  return (
    <section id="services" className="bg-paper py-20 md:py-28 lg:py-32">
      <div className="site-wrap grid gap-16 lg:grid-cols-12">
        <div className="reveal lg:col-span-5">
          <p className="label">{t.services.label}</p>
          <h2 className="display mt-6 text-[clamp(2.2rem,4.4vw,3.8rem)] text-ink">{t.services.title}</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mute">{t.services.lede}</p>
        </div>

        <div className="reveal reveal-d2 lg:col-span-7">
          <div
            className="theme-rule divide-y border-y border-ink/15 divide-ink/15"
          >
            {services.map((service, index) => {
              const isActive = activeId === service.id
              return (
                <button
                  key={service.id}
                  type="button"
                  onMouseEnter={() => setActiveId(service.id)}
                  onFocus={() => setActiveId(service.id)}
                  onClick={() => {
                    if (canHover()) return
                    setActiveId((current) => (current === service.id ? null : service.id))
                  }}
                  className="group grid w-full grid-cols-[auto_1fr_auto] items-start gap-4 py-6 text-start transition-[padding] duration-300 md:gap-8 md:py-7"
                  aria-expanded={isActive}
                >
                  <span className="pt-1 text-xs tracking-[0.16em] text-mute">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="display block text-2xl text-ink md:text-3xl">{service.title}</span>
                    <span
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <span className="overflow-hidden">
                        <span className="mt-4 block max-w-lg pb-1 text-sm leading-relaxed text-mute md:text-base">
                          {service.description}
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className={`theme-mark relative mt-1.5 text-ink grid h-7 w-7 place-items-center rounded-full border border-ink/25 transition duration-300 group-hover:border-ink/60 ${
                      isActive ? "is-active rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <span className="absolute h-px w-3 bg-current" />
                    <span className="absolute h-3 w-px bg-current" />
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
