import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { syne, outfit } from "./lib/fonts"
import { criticalCSS } from "./lib/critical-css"
import { BASE_PATH, withBase } from "./lib/base-path"
import BFCacheReload from "./components/ui/BFCacheReload"
import LoadingScreen from "./components/sections/LoadingScreen"

export const metadata: Metadata = {
  title: "Naqsh Holding Company | Investment Leader | To Leave a Trace",
  description:
    "Naqsh Holding Company is a leading investment firm in Saudi Arabia with 5 diverse subsidiaries: 6 Degrees Technologies, Efficiency Center Business Inc., Promotion Efficiency for Advertising, Burooj, and Burooj Air. Discover our innovative projects and strategic investments across technology, business incubation, marketing, real estate, and aviation sectors.",
  generator: "Next.js",
  applicationName: "Naqsh Holding Company",
  keywords: [
    "Naqsh Holding Company",
    "investment company Saudi Arabia",
    "Saudi investment firm",
    "technology investment",
    "business incubation Saudi Arabia",
    "marketing services Riyadh",
    "real estate development Saudi Arabia",
    "aviation services Saudi Arabia",
    "6 Degrees Technologies",
    "Efficiency Center Business Inc",
    "Promotion Efficiency for Advertising",
    "Burooj real estate",
    "Burooj Air aviation",
    "investment opportunities Saudi Arabia",
    "business services Riyadh",
    "corporate investment",
    "portfolio companies",
    "strategic investments",
  ],
  authors: [{ name: "Naqsh Holding Company" }],
  creator: "Naqsh Holding Company",
  publisher: "Naqsh Holding Company",
  metadataBase: new URL("https://naqsh.com.sa"),
  openGraph: {
    title: "Naqsh Holding Company | Investment Leader | To Leave a Trace",
    description:
      "Naqsh Holding Company is a leading investment firm in Saudi Arabia with 5 diverse subsidiaries across technology, business incubation, marketing, real estate, and aviation sectors. Discover our innovative projects and strategic investments.",
    url: "https://naqsh.com.sa",
    siteName: "Naqsh Holding Company",
    images: [
      {
        url: "/naqsh-og.png",
        width: 1200,
        height: 630,
        alt: "Naqsh Holding Company - Leading Investment Firm in Saudi Arabia with Diverse Portfolio of Technology, Business Incubation, Marketing, Real Estate, and Aviation Companies",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Saudi Arabia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naqsh Holding Company | Investment Leader | To Leave a Trace",
    description:
      "Naqsh Holding Company is a leading investment firm in Saudi Arabia with 5 diverse subsidiaries across technology, business incubation, marketing, real estate, and aviation sectors.",
    images: ["/naqsh-og.png"],
    creator: "@naqsh_holding",
    site: "@naqsh_holding",
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
      noimageindex: false,
      notranslate: false,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://naqsh.com.sa",
    languages: {
      "en-US": "/en-US",
      "ar-SA": "/ar-SA",
    },
  },
  category: "Business",
  classification: "Investment Company",
  other: {
    "geo.region": "SA",
    "geo.placename": "Khobar",
    "geo.position": "26.2791;50.2080",
    ICBM: "26.2791, 50.2080",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var p=location.pathname.replace(/\\/+$/,'')||'/';var b=${JSON.stringify(
              (BASE_PATH || "").replace(/\/+$/, "") || "/"
            )};if(p===b){document.documentElement.setAttribute('data-hero-pending','1');if(sessionStorage.getItem('naqsh-intro-seen')!=='1'){document.documentElement.setAttribute('data-intro','1');}}}catch(e){}})();`,
          }}
        />
        <link rel="icon" href={withBase("/favicon.ico")} sizes="any" />
        <link rel="icon" href={withBase("/favicon.svg")} type="image/svg+xml" />
        <link rel="icon" href={withBase("/favicon-96x96.png")} type="image/png" sizes="96x96" />
        <link rel="apple-touch-icon" href={withBase("/apple-touch-icon.png")} />
        <link rel="manifest" href={withBase("/site.webmanifest")} />
        <link rel="preload" as="image" href={withBase("/naqsh-white.png")} fetchPriority="high" />
        <link rel="preload" as="video" href={withBase("/hero.mp4")} type="video/mp4" />
        <link rel="dns-prefetch" href="//hel1.your-objectstorage.com" />
        <link rel="preconnect" href="https://hel1.your-objectstorage.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          ${BASE_PATH ? "" : "navigator.serviceWorker.register('/sw.js').catch(function() {});"}
        });
      }
    `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Naqsh Holding Company",
              url: "https://naqsh.com.sa",
              logo: "https://naqsh.com.sa/naqsh-white.png",
              description:
                "Naqsh Holding Company is an investment leader with 5 diverse subsidiaries across technology, business incubation, marketing, real estate, and aviation sectors.",
              foundingDate: "2020",
              slogan: "To Leave a Trace",
              numberOfEmployees: "500+",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Khobar",
                addressCountry: "SA",
                addressRegion: "Eastern Province",
                addressLocality: "Khobar",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "contact@naqsh.com.sa",
                telephone: "0535558889",
                availableLanguage: ["English", "Arabic"],
              },
              sameAs: ["https://linkedin.com/company/naqsh-holding-company", "https://instagram.com/naqsh_holding"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Investment Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Technology Investment",
                      description: "Investment in technology and smart solutions through 6 Degrees Technologies",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Business Incubation",
                      description: "Business incubation and co-working services through Efficiency Center Business Inc.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Marketing Services",
                      description: "Marketing and creative production services through Promotion Efficiency for Advertising",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Real Estate Development",
                      description: "Real estate development and construction through Burooj",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Aviation Services",
                      description: "Aviation services and solutions through Burooj Air",
                    },
                  },
                ],
              },
              subOrganization: [
                {
                  "@type": "Organization",
                  name: "6 Degrees Technologies",
                  description: "Technology & Smart Solutions",
                  url: "https://naqsh.com.sa/#companies",
                },
                {
                  "@type": "Organization",
                  name: "Efficiency Center Business Inc.",
                  description: "Business Incubation & Co-working",
                  url: "https://naqsh.com.sa/#companies",
                },
                {
                  "@type": "Organization",
                  name: "Promotion Efficiency for Advertising",
                  description: "Marketing & Creative Production",
                  url: "https://naqsh.com.sa/#companies",
                },
                {
                  "@type": "Organization",
                  name: "Burooj",
                  description: "Real Estate Development & Construction",
                  url: "https://naqsh.com.sa/#companies",
                },
                {
                  "@type": "Organization",
                  name: "Burooj Air",
                  description: "Aviation Services & Solutions",
                  url: "https://naqsh.com.sa/#companies",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <LoadingScreen />
        {children}
        <BFCacheReload />
      </body>
    </html>
  )
}
