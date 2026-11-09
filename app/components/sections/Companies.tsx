"use client"

import Image from "next/image"
import { withBase } from "@/app/lib/base-path"
import type { Company } from "@/app/types"
import { useLocale } from "@/app/lib/i18n/LocaleProvider"

const companies: Company[] = [
  {
    id: 1,
    name: "6 Degrees Technologies",
    description: "Technology & Smart Solutions",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-01.png",
    logo: "/companies/6-degrees.png",
    website: "https://6degrees.com.sa/en/",
  },
  {
    id: 2,
    name: "Burooj Air",
    description: "Aviation Services & Solutions",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-03.png",
    logo: "/companies/burooj-air.svg",
    website: "https://buroojair.com/",
  },
  {
    id: 3,
    name: "Promotion Efficiency",
    description: "Marketing & Creative Production",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-05.png",
    logo: "/companies/promotion-efficiency.png",
    website: "https://www.promoe.com.sa/",
  },
  {
    id: 4,
    name: "Burooj",
    description: "Real Estate Development & Construction",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-04.png",
    logo: "/companies/burooj.svg",
    website: "https://www.burooj.pro/",
  },
  {
    id: 5,
    name: "Efficiency Center",
    description: "Business Incubation & Co-working",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-02.png",
    logo: "/companies/efficiency-center.png",
    website: "https://www.efficiencys.com.sa/",
  },
]

export default function Companies() {
  const { t } = useLocale()

  return (
    <section id="companies" className="bg-paper py-20 md:py-28 lg:py-32">
      <div className="site-wrap grid gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">
        <div className="reveal lg:col-span-4">
          <h2 className="display text-[clamp(2rem,4vw,3.4rem)] text-ink">{t.companies.title}</h2>
          <p className="mt-6 max-w-sm text-[0.98rem] font-light leading-[1.75] text-ink/75">{t.companies.lede}</p>
        </div>

        <ul className="company-grid border-t border-ink/15 lg:col-span-8 sm:grid sm:grid-cols-2 xl:grid-cols-3">
          {companies.map((company, index) => (
            <li
              key={company.id}
              className={`reveal company-cell border-b border-ink/15 ${
                index % 3 === 1 ? "reveal-d1" : index % 3 === 2 ? "reveal-d2" : ""
              }`}
            >
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="company-tile group relative flex min-h-[240px] flex-col justify-between overflow-hidden bg-paper px-6 py-7 md:min-h-[280px] md:px-7 md:py-8"
                aria-label={`Visit ${company.name}`}
              >
                <div className="company-media pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Image
                    src={company.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 40vw, 28vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-ink/45" />
                </div>

                <div className="relative z-10 flex h-14 items-center justify-center pt-4">
                  <img
                    src={withBase(company.logo)}
                    alt=""
                    className="company-logo max-h-11 w-auto max-w-[72%] object-contain"
                  />
                </div>

                <div className="relative z-10 mt-auto">
                  <p className="company-name text-[0.82rem] font-medium tracking-[0.02em] text-ink transition-colors duration-500 group-hover:text-white group-focus-visible:text-white">
                    {company.name}
                  </p>
                  <p className="company-desc mt-1 text-[0.72rem] text-mute transition-colors duration-500 group-hover:text-white/70 group-focus-visible:text-white/70">
                    {company.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
