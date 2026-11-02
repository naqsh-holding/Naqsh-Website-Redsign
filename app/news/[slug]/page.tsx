import { Metadata } from "next"
import { notFound } from "next/navigation"
import NewsArticleClient from "./NewsArticleClient"
import { getAllNews, getNewsBySlug } from "../../lib/data/news"

// Generate static params for all news articles — pulled from Strapi, not hardcoded.
export async function generateStaticParams() {
  const allNewsItems = await getAllNews()
  return allNewsItems.map((item) => ({
    slug: item.slug,
  }))
}

interface NewsArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: NewsArticlePageProps): Promise<Metadata> {
  const item = await getNewsBySlug(params.slug)

  if (!item) {
    return {
      title: "Article Not Found | Naqsh Holding Company",
      description: "The requested news article could not be found.",
    }
  }

  const articleUrl = `https://naqsh.com.sa/news/${params.slug}`
  const articleImage = item.image.startsWith('http') ? item.image : `https://naqsh.com.sa${item.image}`

  return {
    title: `${item.title} | Naqsh Holding Company`,
    description: item.excerpt || `Read about ${item.title} - Latest news and updates from Naqsh Holding Company.`,
    keywords: [
      item.title,
      "Naqsh Holding news",
      ...item.categories.map((c) => c.name.toLowerCase()),
      "Saudi Arabia business news",
      "investment company updates",
      "corporate news Riyadh",
      "business announcements Saudi Arabia",
      item.author,
      "Naqsh Holding Company"
    ],
    authors: [{ name: item.author }],
    openGraph: {
      title: item.title,
      description: item.excerpt || `Read about ${item.title} - Latest news and updates from Naqsh Holding Company.`,
      url: articleUrl,
      siteName: "Naqsh Holding Company",
      images: [
        {
          url: articleImage,
          width: 1200,
          height: 630,
          alt: item.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: item.date,
      authors: [item.author],
      section: item.categories[0]?.name || "GENERAL",
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.excerpt || `Read about ${item.title} - Latest news and updates from Naqsh Holding Company.`,
      images: [articleImage],
      creator: "@naqsh_holding",
      site: "@naqsh_holding",
    },
    alternates: {
      canonical: articleUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const item = await getNewsBySlug(params.slug)

  if (!item) {
    notFound()
  }

  const article = {
    id: item.id,
    title: item.title,
    subtitle: item.excerpt,
    category: item.categories[0]?.name || "GENERAL",
    author: item.author,
    date: item.date ? `${item.month} ${item.day}, ${item.year}` : "",
    readTime: item.readTime,
    heroImage: item.image,
    content: item.content,
  }

  return <NewsArticleClient article={article} slug={params.slug} />
}