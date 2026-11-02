import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const navigationLinks = [
    { name: "About", href: "/#about" },
    { name: "Companies", href: "/#companies" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/projects" },
    { name: "News", href: "/news" },
    { name: "Brands", href: "/#brands" },
    { name: "Contact", href: "/contact" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ]

  return (
    <footer className="surface-ink py-16 md:py-20 lg:py-24">
      <div className="site-wrap">
        <div className="grid gap-12 border-t border-white/15 pt-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:pt-16">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block" aria-label="Naqsh Home">
              <Image src="/naqsh-white.png" alt="Naqsh Logo" width={135} height={45} className="h-9 w-auto" unoptimized />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              To Leave a Trace — Naqsh Holding Company is an investment leader with diverse subsidiaries across
              technology, business incubation, marketing, real estate, and aviation sectors.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="label">Explore</h3>
            <ul className="mt-5 space-y-2.5">
              {navigationLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/70 transition hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="label">Legal</h3>
            <ul className="mt-5 space-y-2.5">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/70 transition hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="label">Connect</h3>
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
          <p>© {new Date().getFullYear()} Naqsh Holding Company. All rights reserved.</p>
          <p>Khobar, Eastern Province, Saudi Arabia</p>
        </div>
      </div>
    </footer>
  )
}
