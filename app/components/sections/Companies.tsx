"use client"

import Image from "next/image"
import type { Company } from "@/app/types"

const companies: Company[] = [
  {
    id: 1,
    name: "6 Degrees Technologies",
    description: "Technology & Smart Solutions",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-01.png",
    website: "https://6degrees.com.sa/en/",
  },
  {
    id: 2,
    name: "Burooj Air",
    description: "Aviation Services & Solutions",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-03.png",
    website: "https://buroojair.com/",
  },
  {
    id: 3,
    name: "Promotion Efficiency for Advertising",
    description: "Marketing & Creative Production",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-05.png",
    website: "https://www.promoe.com.sa/",
  },
  {
    id: 4,
    name: "Burooj",
    description: "Real Estate Development & Construction",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-04.png",
    website: "https://www.burooj.pro/",
  },
  {
    id: 5,
    name: "Efficiency Center Business Inc.",
    description: "Business Incubation & Co-working",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-02.png",
    website: "https://www.efficiencys.com.sa/",
  },
]

export default function Companies() {
  return (
    <section id="companies" className="bg-paper pb-8 md:pb-12">
      <div className="site-wrap">
        <div className="grid gap-8 border-t border-ink/15 py-16 lg:grid-cols-12 lg:py-20">
          <p className="label lg:col-span-4">Our companies</p>
          <h2 className="display text-[clamp(1.8rem,3.6vw,3.1rem)] leading-[1.05] text-ink lg:col-span-8">
            A diverse portfolio of innovative companies spanning technology, real estate, aviation, and marketing.
          </h2>
        </div>
      </div>

      <ul>
        {companies.map((company, index) => (
          <li key={company.id} className="border-t border-ink/15 last:border-b">
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="site-wrap group grid items-stretch gap-8 py-10 md:py-14 lg:grid-cols-12 lg:gap-12"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-ink/5 lg:col-span-6 lg:aspect-[16/10]">
                <Image
                  src={company.image}
                  alt={company.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                  priority={index < 2}
                />
              </div>
              <div className="flex flex-col justify-end lg:col-span-6 lg:py-4">
                <span className="label text-ink/40">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="display mt-4 text-[clamp(1.8rem,3.2vw,3rem)] text-ink">{company.name}</h3>
                <p className="mt-3 text-mute">{company.description}</p>
                <span className="arrow-link mt-8 text-ink">
                  <span className="arrow-line">Visit company</span>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
