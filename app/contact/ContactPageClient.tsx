"use client"

import Navigation from "../components/layout/Navigation"
import Footer from "../components/sections/Footer"
import { useLocale } from "../lib/i18n/LocaleProvider"

export default function ContactPageClient() {
  const { t } = useLocale()
  const c = t.pages.contact

  return (
    <main id="main" className="min-h-screen bg-paper text-ink">
      <Navigation forceStyle="white" />
      <section className="pt-32 pb-16 md:pt-40">
        <div className="site-wrap">
          <p className="label">{c.label}</p>
          <h1 className="display mt-5 max-w-4xl text-[clamp(2.2rem,4.6vw,4.2rem)] text-ink">{c.title}</h1>
        </div>
      </section>

      <iframe
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=26.307625,50.2217074&zoom=17"
        title={c.mapTitle}
        className="h-[420px] w-full border-0 md:h-[560px] grayscale"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <section className="py-16 md:py-24">
        <div className="site-wrap grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="label">{c.phone}</h2>
            <a href="tel:+966535558889" className="mt-3 block text-ink hover:opacity-70" dir="ltr">
              +966 53 555 8889
            </a>
          </div>
          <div>
            <h2 className="label">{c.email}</h2>
            <a href="mailto:contact@naqsh.com.sa" className="mt-3 block text-ink hover:opacity-70">
              contact@naqsh.com.sa
            </a>
          </div>
          <div>
            <h2 className="label">{c.hours}</h2>
            <p className="mt-3 whitespace-pre-line text-mute">{c.hoursValue}</p>
          </div>
          <div>
            <h2 className="label">{c.office}</h2>
            <p className="mt-3 whitespace-pre-line text-mute">{c.officeValue}</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
