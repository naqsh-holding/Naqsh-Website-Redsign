"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLink } from "../ui/ArrowLink"
import { getFeaturedNews, type NewsItem } from "../../lib/data/news"

export default function NewsSection() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    getFeaturedNews()
      .then((items) => {
        if (!cancelled) setNewsItems(items)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const [featured, ...rest] = newsItems

  return (
    <section id="news" className="bg-paper py-24 md:py-32">
      <div className="site-wrap">
        <div className="flex flex-col gap-6 border-b border-ink/15 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label">Latest news</p>
            <h2 className="display mt-4 max-w-3xl text-[clamp(1.8rem,3.4vw,3rem)] text-ink">
              Discover the latest updates, launches, and milestones from Naqsh Holding and our leading subsidiaries.
            </h2>
          </div>
          <ArrowLink href="/news">See all news</ArrowLink>
        </div>

        {loading ? (
          <p className="py-16 text-mute">Loading news…</p>
        ) : !featured ? (
          <p className="py-16 text-mute">News will appear here shortly.</p>
        ) : (
          <div className="grid gap-12 pt-12 lg:grid-cols-12 lg:gap-16">
            <article className="lg:col-span-7">
              <Link href={`/news/${featured.slug}`} className="group block" aria-label={`Read full article: ${featured.title}`}>
                <div className="relative aspect-[4/5] overflow-hidden md:aspect-[16/11]">
                  <Image
                    src={featured.image || "https://hel1.your-objectstorage.com/naqsh-pord/placeholder.svg"}
                    alt={featured.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    unoptimized
                    priority
                  />
                </div>
                <p className="label mt-6 text-ink/45">
                  {featured.day} {featured.month} {featured.year}
                </p>
                <h3 className="display mt-3 text-[clamp(1.6rem,2.6vw,2.4rem)] text-ink">{featured.title}</h3>
              </Link>
            </article>

            <div className="flex flex-col divide-y divide-ink/15 lg:col-span-5">
              {rest.map((item) => (
                <article key={item.id} className="py-6 first:pt-0">
                  <Link href={`/news/${item.slug}`} className="group grid grid-cols-[120px_1fr] gap-5 md:grid-cols-[150px_1fr]">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={item.image || "https://hel1.your-objectstorage.com/naqsh-pord/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-[1.04]"
                        sizes="150px"
                        unoptimized
                      />
                    </div>
                    <div>
                      <p className="label text-ink/45">
                        {item.day} {item.month}
                      </p>
                      <h3 className="mt-2 text-lg leading-snug text-ink group-hover:opacity-70">{item.title}</h3>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
