"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { getAllNews, type NewsItem } from "../../lib/data/news"

const MONTHS_LONG = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

function formatNewsDate(item: NewsItem) {
  if (item.date) {
    const d = new Date(item.date)
    if (!Number.isNaN(d.getTime())) {
      return `${MONTHS_LONG[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
    }
  }
  if (item.month && item.day && item.year) {
    const idx = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"].indexOf(
      item.month.toUpperCase()
    )
    const month = idx >= 0 ? MONTHS_LONG[idx] : item.month
    return `${month} ${Number(item.day)}, ${item.year}`
  }
  return ""
}

function titleCase(value: string) {
  return value
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

function categoryLabel(item: NewsItem) {
  const raw = item.categories[0]?.name || "News"
  return titleCase(raw)
}

export default function NewsSection() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("All")

  useEffect(() => {
    let cancelled = false
    getAllNews()
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

  const filters = useMemo(() => {
    const names = new Set<string>()
    newsItems.forEach((item) => {
      item.categories.forEach((category) => {
        if (category.name) names.add(titleCase(category.name))
      })
    })
    return ["All", ...Array.from(names)]
  }, [newsItems])

  const visible = useMemo(() => {
    const filtered =
      filter === "All"
        ? newsItems
        : newsItems.filter((item) =>
            item.categories.some((category) => titleCase(category.name) === filter)
          )
    return filtered.slice(0, 3)
  }, [filter, newsItems])

  return (
    <section id="news" className="bg-paper py-24 md:py-32">
      <div className="site-wrap">
        <div className="border-b border-ink/15 pb-8 md:pb-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="display text-[clamp(2.4rem,5vw,4.2rem)] text-ink">Newsroom</h2>
            <Link href="/news" className="arrow-link text-ink">
              <span className="arrow-line">See all news</span>
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>

          {filters.length > 1 && (
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3" role="tablist" aria-label="News categories">
              {filters.map((name) => {
                const active = filter === name
                return (
                  <button
                    key={name}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(name)}
                    className={`pb-1 text-[0.82rem] tracking-[0.02em] transition ${
                      active ? "border-b border-ink text-ink" : "text-mute hover:text-ink"
                    }`}
                  >
                    {name}
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {loading ? (
          <p className="py-16 text-mute">Loading news…</p>
        ) : visible.length === 0 ? (
          <p className="py-16 text-mute">News will appear here shortly.</p>
        ) : (
          <ul className="newsroom-grid grid border-b border-ink/15 md:grid-cols-3">
            {visible.map((item) => {
              const category = categoryLabel(item)
              const dateLabel = formatNewsDate(item)
              return (
                <li key={item.id} className="newsroom-cell border-b border-ink/15 md:border-b-0 md:border-r md:last:border-r-0">
                  <Link
                    href={`/news/${item.slug}`}
                    className="group flex h-full flex-col px-0 py-8 md:px-6 md:py-10 lg:px-8"
                    aria-label={`Read full article: ${item.title}`}
                  >
                    <div className="relative aspect-[16/11] overflow-hidden bg-ink/5">
                      <Image
                        src={item.image || "https://hel1.your-objectstorage.com/naqsh-pord/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        unoptimized
                      />
                    </div>

                    <h3 className="display mt-6 text-[clamp(1.25rem,1.8vw,1.55rem)] leading-[1.2] text-ink transition group-hover:opacity-70">
                      {item.title}
                    </h3>

                    <div className="mt-auto flex items-end justify-between gap-4 pt-8">
                      <p className="text-[0.72rem] tracking-[0.04em] text-mute">
                        {category}
                        {dateLabel ? ` · ${dateLabel}` : ""}
                      </p>
                      <span
                        className="grid h-8 w-8 shrink-0 place-items-center border border-ink/25 text-sm text-ink transition group-hover:border-ink group-hover:bg-ink group-hover:text-paper"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </section>
  )
}
