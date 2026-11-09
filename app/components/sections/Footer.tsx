"use client"

import Link from "next/link"
import { withBase } from "../../lib/base-path"
import { useLocale } from "../../lib/i18n/LocaleProvider"

export default function Footer() {
  const { t } = useLocale()

  const navigationLinks = [
    { name: t.nav.about, href: "/#about" },
    { name: t.nav.companies, href: "/#companies" },
    { name: t.nav.sectors, href: "/#services" },
    { name: t.nav.projects, href: "/projects" },
    { name: t.nav.news, href: "/news" },
    { name: t.brands.label, href: "/#brands" },
    { name: t.nav.contactShort, href: "/contact" },
  ]

  const legalLinks = [
    { name: t.footer.privacy, href: "/privacy-policy" },
    { name: t.footer.terms, href: "/terms-of-service" },
  ]

  return (
    <footer className="surface-ink py-16 md:py-20 lg:py-24">
      <div className="site-wrap">
        <div className="grid gap-12 border-t border-white/15 pt-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:pt-16">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block" aria-label="Naqsh Home">
              <img src={withBase("/naqsh-white.png")} alt="Naqsh Logo" width={135} height={45} className="h-9 w-auto" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">{t.footer.blurb}</p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="label">{t.footer.explore}</h3>
            <ul className="mt-5 space-y-2.5">
              {navigationLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 transition hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="label">{t.footer.legal}</h3>
            <ul className="mt-5 space-y-2.5">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 transition hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="label">{t.footer.connect}</h3>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a
                  href="https://www.linkedin.com/company/naqshco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:contact@naqsh.com.sa" className="text-sm text-white/70 transition hover:text-white">
                  contact@naqsh.com.sa
                </a>
              </li>
              <li>
                <a href="tel:0535558889" className="text-sm text-white/70 transition hover:text-white">
                  0535558889
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Naqsh Holding Company. {t.footer.rights}
          </p>
          <p>Khobar, Eastern Province, Saudi Arabia</p>
        </div>
      </div>
    </footer>
  )
}
