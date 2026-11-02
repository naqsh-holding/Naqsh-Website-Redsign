import { Metadata } from "next"
import NewsPageClient from "./NewsPageClient"

export const metadata: Metadata = {
  title: "Latest News & Updates | Naqsh Holding Company",
  description: "Stay updated with the latest developments, announcements, and insights from Naqsh Holding and our subsidiaries.",
  alternates: {
    canonical: "https://naqsh.com.sa/news",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function NewsPage() {
  return <NewsPageClient />
}