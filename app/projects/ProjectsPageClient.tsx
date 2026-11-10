"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "../components/layout/Navigation"
import Footer from "../components/sections/Footer"
import { getAllProjects, type Project } from "../lib/data/projects"
import { useLocale } from "../lib/i18n/LocaleProvider"

export default function ProjectsPageClient() {
  const [allProjects, setAllProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const { t } = useLocale()

  useEffect(() => {
    let cancelled = false
    getAllProjects()
      .then((data) => {
        if (!cancelled) setAllProjects(data)
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
          <p className="label">{t.pages.projects.label}</p>
          <h1 className="display mt-5 max-w-4xl text-[clamp(2.2rem,4.6vw,4.2rem)] text-ink">
            {t.pages.projects.title}
          </h1>

          {loading ? (
            <p className="mt-16 text-mute">{t.projects.loading}</p>
          ) : allProjects.length === 0 ? (
            <p className="mt-16 text-mute">{t.projects.empty}</p>
          ) : (
            <ul className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2">
              {allProjects.map((project) => (
                <li key={project.id}>
                  <Link href={`/projects/${project.slug}`} className="group block">
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <Image
                        src={project.image || "https://hel1.your-objectstorage.com/naqsh-pord/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, 50vw"
                        unoptimized
                      />
                    </div>
                    <p className="label mt-5" dir="auto">{project.category}</p>
                    <h2 className="display mt-2 text-2xl text-ink md:text-3xl" dir="auto">{project.title}</h2>
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
