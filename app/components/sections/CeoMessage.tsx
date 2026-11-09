"use client"

import Image from "next/image"
import { withBase } from "../../lib/base-path"
import { useLocale } from "../../lib/i18n/LocaleProvider"

export default function CeoMessage() {
  const { t } = useLocale()

  return (
    <section id="ceo-message" className="bg-paper">
      <div className="grid lg:grid-cols-12 lg:items-start">
        <div className="reveal flex justify-end px-6 pt-10 sm:px-8 lg:col-span-5 lg:px-10 lg:pt-16 xl:pl-16 xl:pr-6">
          <div className="relative aspect-square w-full max-w-[480px] lg:max-w-none lg:w-[min(100%,520px)] lg:min-h-[520px] xl:min-h-[580px] xl:w-[min(100%,560px)]">
            <Image
              src={withBase("/ceo.png")}
              alt={t.ceo.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 90vw, 420px"
              unoptimized
              priority
            />
          </div>
        </div>
        <div className="reveal reveal-d2 flex flex-col justify-start px-6 py-12 md:px-12 lg:col-span-7 lg:px-16 lg:py-16 xl:px-20 xl:py-20">
          <blockquote className="max-w-2xl text-[clamp(1.05rem,1.55vw,1.35rem)] font-normal leading-[1.7] text-ink">
            {t.ceo.quote}
          </blockquote>
          <div className="mt-10">
            <p className="text-base text-ink md:text-lg">{t.ceo.name}</p>
            <p className="mt-1 text-sm text-mute">{t.ceo.role}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
