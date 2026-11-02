"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { getAllNews, type NewsItem } from "../lib/data/news"
import Navigation from "../components/layout/Navigation"
import Footer from "../components/sections/Footer"

export default function NewsPageClient() {
  const [allNews, setAllNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    getAllNews()
      .then((data) => {
        if (!cancelled) setAllNews(data)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <main id="main" className="min-h-screen bg-paper text-ink">
      <Navigation forceStyle="white" />

      <section className="pt-32 pb-24 md:pt-40">
        <div className="site-wrap">
          <p className="label">All news</p>
          <h1 className="display mt-5 max-w-4xl text-[clamp(2.2rem,4.6vw,4.2rem)] text-ink">
            Stay updated with the latest developments, announcements, and insights from Naqsh Holding and our
            subsidiaries.
          </h1>

          {loading ? (
            <p className="mt-16 text-mute">Loading news…</p>
          ) : allNews.length === 0 ? (
            <p className="mt-16 text-mute">News will appear here shortly.</p>
          ) : (
            <ul className="mt-16 divide-y divide-ink/15 border-y border-ink/15">
              {allNews.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/news/${item.slug}`}
                    className="group grid items-center gap-6 py-8 md:grid-cols-12 md:gap-10 md:py-10"
                    aria-label={`Read full article: ${item.title}`}
                  >
                    <div className="relative aspect-[16/11] overflow-hidden md:col-span-4">
                      <Image
                        src={item.image || "https://hel1.your-objectstorage.com/naqsh-pord/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        unoptimized
                      />
                    </div>
                    <div className="md:col-span-8">
                      <p className="label">
                        {item.day} {item.month} {item.year}
                        {item.categories[0] ? ` · ${item.categories[0].name}` : ""}
                      </p>
                      <h2 className="display mt-3 text-[clamp(1.4rem,2.4vw,2.2rem)] text-ink">{item.title}</h2>
                      {item.excerpt && <p className="mt-3 max-w-2xl text-mute">{item.excerpt}</p>}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
