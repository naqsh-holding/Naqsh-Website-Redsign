"use client"

import Navigation from "../layout/Navigation"
import Footer from "../sections/Footer"
import { useLocale } from "../../lib/i18n/LocaleProvider"
import type { LegalDoc } from "../../lib/i18n/legal"
import type { Locale } from "../../lib/i18n/dictionaries"

export default function LegalPage({ doc }: { doc: Record<Locale, LegalDoc> }) {
  const { t, locale } = useLocale()
  const content = doc[locale]
  const updated = new Date().toLocaleDateString(locale === "ar" ? "ar-SA" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navigation forceStyle="white" />
      <main id="main" className="site-wrap max-w-3xl pb-24 pt-32 md:pt-40">
        <p className="label">{t.pages.legal.label}</p>
        <h1 className="display mt-4 text-[clamp(2.4rem,5vw,4.2rem)]">{content.title}</h1>
        <p className="mt-4 text-mute">
          {t.pages.legal.updated} {updated}
        </p>

        <div className="legal-copy mt-16 space-y-12 text-[1.05rem] leading-relaxed text-ink/80">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="display mb-4 text-3xl text-ink">{section.title}</h2>
              {section.blocks.map((block, i) => {
                if ("h3" in block)
                  return (
                    <h3 key={i} className="mb-2 mt-8 text-xl text-ink first:mt-0">
                      {block.h3}
                    </h3>
                  )
                if ("ul" in block)
                  return (
                    <ul key={i} className="mt-4 list-disc space-y-2 ps-5">
                      {block.ul.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )
                return (
                  <p key={i} className="mt-4 whitespace-pre-line first:mt-0">
                    {block.p}
                  </p>
                )
              })}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
