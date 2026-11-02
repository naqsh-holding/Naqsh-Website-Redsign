"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import Navigation from "@/app/components/layout/Navigation"
import Footer from "@/app/components/sections/Footer"

interface NewsArticleClientProps {
  article: {
    id: number
    title: string
    subtitle: string
    category: string
    author: string
    date: string
    readTime: string
    heroImage: string
    imageUrl?: string
    content: Array<{
      type: string
      text?: string
      items?: string[]
    }>
  }
  slug: string
}

export default function NewsArticleClient({ article, slug }: NewsArticleClientProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const shareUrl = `https://naqsh.com.sa/news/${slug}`

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navigation forceStyle="white" />

      <article className="pt-28 md:pt-32">
        <div className="site-wrap max-w-3xl pb-10">
          <p className="label">
            {article.category} · {article.readTime}
          </p>
          <h1 className="display mt-5 text-[clamp(2.1rem,4.4vw,4rem)] text-ink">{article.title}</h1>
          {article.subtitle && <p className="mt-6 text-lg leading-relaxed text-mute">{article.subtitle}</p>}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-mute">
            <span>{article.date}</span>
            <span>{article.author}</span>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(article.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              Share on LinkedIn
            </a>
          </div>
        </div>

        <div className="relative h-[50vh] min-h-[360px] w-full md:h-[70vh]">
          <Image src={article.heroImage || "/placeholder.svg"} alt={article.title} fill className="object-cover" priority unoptimized />
        </div>

        <div className="site-wrap max-w-3xl py-16 md:py-24">
          {article.content.map((block, index) => (
            <div key={index} className="mb-10">
              {block.type === "heading" && <h2 className="display mb-4 text-3xl text-ink">{block.text}</h2>}
              {block.type === "paragraph" && (
                <p className="text-lg leading-relaxed text-ink/80">{block.text}</p>
              )}
              {block.type === "list" && (
                <ol className="space-y-4">
                  {block.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-4 text-lg leading-relaxed text-ink/80">
                      <span className="label mt-1">{String(itemIndex + 1).padStart(2, "0")}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          ))}

          <Link href="/news" className="arrow-link mt-8 text-ink">
            <span className="arrow-line">Back to news</span>
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  )
}
