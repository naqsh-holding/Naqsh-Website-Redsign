"use client"

import Link from "next/link"
import { useLocale } from "../../lib/i18n/LocaleProvider"

export default function AboutUs() {
  const { t } = useLocale()

  return (
    <section id="about" className="bg-paper py-20 md:py-28 lg:py-32">
      <div className="site-wrap">
        <div className="reveal flex items-center gap-2.5">
          <span className="about-mark h-1.5 w-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
          <p className="label !normal-case tracking-[0.04em] text-ink">{t.about.label}</p>
        </div>

        <h2 className="reveal reveal-d1 display mt-8 max-w-[18ch] text-[clamp(2.4rem,5.8vw,4.85rem)] text-ink md:mt-10">
          {t.about.title}
        </h2>

        <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-2 md:gap-12 lg:ml-auto lg:max-w-[52rem] lg:gap-16">
          <div className="reveal reveal-d2">
            <p className="text-[0.98rem] font-light leading-[1.75] text-ink/80 md:text-base">{t.about.p1}</p>
            <Link href="/contact" className="arrow-link mt-8 text-ink">
              <span className="arrow-line">{t.about.cta}</span>
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
          <p className="reveal reveal-d3 text-[0.98rem] font-light leading-[1.75] text-ink/80 md:text-base">
            {t.about.p2}
          </p>
        </div>
      </div>
    </section>
  )
}
