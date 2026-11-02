"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { withBase } from "../../lib/base-path"

const links = [
  { label: "About", href: "/#about" },
  { label: "Companies", href: "/#companies" },
  { label: "Sectors", href: "/#services" },
  { label: "News", href: "/news" },
  { label: "Projects", href: "/projects" },
]

interface NavigationProps {
  forceTheme?: "light" | "dark"
  forceStyle?: "black" | "white" | "transparent" | "dark-transparent"
  isFixed?: boolean
  overlay?: boolean
}

export default function Navigation({ overlay = false }: NavigationProps = {}) {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(!overlay)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    if (!overlay) {
      setSolid(true)
      return
    }
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.65)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [overlay])

  const pill = `nav-pill pointer-events-auto${solid ? " is-solid" : ""}`

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <nav
        className="pointer-events-none flex items-start justify-between px-4 pt-4 sm:px-6 md:px-8 md:pt-5 lg:px-10"
        role="banner"
        aria-label="Main navigation"
      >
        <div className={pill}>
          <Link href="/" className="nav-logo" aria-label="Naqsh Holding Company Home">
            <img
              src={withBase("/naqsh-white.png")}
              alt="Naqsh Holding Company Logo"
              width={40}
              height={40}
              className="h-[26px] w-[26px] object-contain"
            />
          </Link>
          <div className="hidden items-center pr-2 md:flex" role="navigation">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="pointer-events-auto flex items-center gap-2">
          <Link href="/contact" className={`${pill} nav-contact hidden sm:inline-flex`} aria-label="Contact us">
            Contact us
          </Link>
          <button
            className={`${pill} nav-menu md:hidden`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle mobile navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span className={`block h-px w-full bg-white transition ${open ? "translate-y-[4px] rotate-45" : ""}`} />
              <span className={`block h-px w-full bg-white transition ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`pointer-events-none fixed inset-0 z-40 bg-paper pt-24 transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="site-wrap flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="display py-3 text-4xl text-ink"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="display py-3 text-4xl text-ink" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}
