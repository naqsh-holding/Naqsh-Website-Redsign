"use client"

import Image from "next/image"
import { withBase } from "../../lib/base-path"
import { useLocale } from "../../lib/i18n/LocaleProvider"

export default function CeoMessage() {
  const { t, locale } = useLocale()
  const [open, close] = locale === "ar" ? ["«", "»"] : ["“", "”"]

  return (
    <section id="ceo-message" className="bg-paper py-20 md:py-28 lg:py-32">
      <div className="site-wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10 xl:gap-16">
        <div className="reveal lg:col-span-5">
          {/* Engraved portrait, background cut out */}
          <div className="relative mx-auto aspect-square w-full max-w-[480px]">
            <Image
              src={withBase("/ceo.webp")}
              alt={t.ceo.name}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 90vw, 480px"
              unoptimized
            />
          </div>
        </div>

        <div className="reveal reveal-d2 lg:col-span-7">
          <p className="label">{t.ceo.label}</p>
          <blockquote className="mt-8">
            <p className="display max-w-[22ch] text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.12] text-ink">
              {open}
              {t.ceo.headline}
              {close}
            </p>
            <p className="mt-8 max-w-2xl text-[0.98rem] font-light leading-[1.8] text-ink/75 md:text-base">
              {t.ceo.quote}
            </p>
          </blockquote>
          <div className="mt-10 flex items-center gap-4 border-t border-ink/15 pt-6">
            <div>
              <p className="text-base text-ink md:text-lg">{t.ceo.name}</p>
              <p className="mt-1 text-sm text-mute">{t.ceo.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
