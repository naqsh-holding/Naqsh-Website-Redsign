"use client"

import Image from "next/image"
import { withBase } from "@/app/lib/base-path"
import type { Company } from "@/app/types"
import { useLocale } from "@/app/lib/i18n/LocaleProvider"

const companies: (Company & { logoClass: string })[] = [
  {
    id: 1,
    name: "6 Degrees Technologies",
    description: "Technology & Smart Solutions",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-01.png",
    logo: "/companies/6-degrees.png",
    logoClass: "h-10",
    website: "https://6degrees.com.sa/en/",
  },
  {
    id: 2,
    name: "Burooj Air",
    description: "Aviation Services & Solutions",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-03.png",
    logo: "/companies/burooj-air.svg",
    logoClass: "h-7",
    website: "https://buroojair.com/",
  },
  {
    id: 3,
    name: "Promotion Efficiency",
    description: "Marketing & Creative Production",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-05.png",
    logo: "/companies/promotion-efficiency.png",
    logoClass: "h-10",
    website: "https://www.promoe.com.sa/",
  },
  {
    id: 4,
    name: "Burooj",
    description: "Real Estate Development & Construction",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-04.png",
    logo: "/companies/burooj.svg",
    logoClass: "h-8",
    website: "https://www.burooj.pro/",
  },
  {
    id: 5,
    name: "Efficiency Center",
    description: "Business Incubation & Co-working",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-02.png",
    logo: "/companies/efficiency-center.png",
    logoClass: "h-16",
    website: "https://www.efficiencys.com.sa/",
  },
]

export default function Companies() {
  const { t } = useLocale()

  return (
    <section id="companies" className="bg-paper py-20 md:py-28 lg:py-32">
      <div className="site-wrap">
        <div className="reveal grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
          <h2 className="display text-[clamp(2rem,4vw,3.4rem)] text-ink lg:col-span-6">{t.companies.title}</h2>
          <p className="max-w-md text-[0.98rem] font-light leading-[1.75] text-ink/75 lg:col-span-5 lg:col-start-8">
            {t.companies.lede}
          </p>
        </div>

        <ul className="company-grid mt-12 grid grid-cols-2 border-y border-ink/15 md:mt-16 lg:grid-cols-5">
          {companies.map((company, index) => (
            <li
              key={company.id}
              className={`reveal company-cell border-ink/15 ${index % 5 === 0 ? "" : `reveal-d${Math.min(index, 3)}`}`}
            >
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="company-tile group relative flex min-h-[200px] flex-col justify-between overflow-hidden bg-paper px-5 py-6 md:min-h-[260px] md:px-7 md:py-8"
                aria-label={`Visit ${company.name}`}
              >
                <div className="company-media pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Image
                    src={company.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-ink/45" />
                </div>

                <div className="relative z-10 flex h-20 items-center justify-center pt-4">
                  <img
                    src={withBase(company.logo)}
                    alt=""
                    className={`company-logo ${company.logoClass} w-auto max-w-[80%] object-contain`}
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
