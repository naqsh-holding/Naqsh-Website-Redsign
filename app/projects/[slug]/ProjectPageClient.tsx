"use client"

import { useEffect } from "react"
import Link from "next/link"
import Navigation from "@/app/components/layout/Navigation"
import Footer from "@/app/components/sections/Footer"
import type { Project } from "../../lib/data/projects"
import { useLocale } from "../../lib/i18n/LocaleProvider"

interface ProjectPageClientProps {
  project: Project
}

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov", ".m4v"]

function isVideoUrl(url: string) {
  return VIDEO_EXTENSIONS.some((ext) => url.toLowerCase().endsWith(ext))
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  const { t } = useLocale()
  const p = t.pages.project

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [project.slug])

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navigation forceStyle="white" />

      <main id="main" className="pt-28 md:pt-32">
        <div className="site-wrap">
          <nav className="label">
            <Link href="/projects" className="hover:text-ink">
              {project.category || p.projects}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink" dir="auto">{project.title}</span>
          </nav>

          <h1 className="display mt-8 max-w-4xl text-[clamp(2.2rem,5vw,4.6rem)] text-ink" dir="auto">{project.title}</h1>
        </div>

        <div className="mt-12 w-full">
          <div className="relative aspect-[16/9] overflow-hidden bg-ink/5">
            {isVideoUrl(project.images.hero) ? (
              <video
                src={project.images.hero}
                controls
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <img
                src={project.images.hero || "https://hel1.your-objectstorage.com/naqsh-pord/placeholder.svg"}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </div>

        <div className="site-wrap grid gap-16 py-16 md:py-24 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-7">
            {project.challenge && (
              <div>
                <h2 className="label">{p.challenge}</h2>
                <p dir="auto" className="mt-4 text-xl font-light leading-relaxed">{project.challenge}</p>
              </div>
            )}
            {project.approach && (
              <div>
                <h2 className="label">{p.approach}</h2>
                <p dir="auto" className="mt-4 text-xl font-light leading-relaxed">{project.approach}</p>
              </div>
            )}
          </div>

          <aside className="grid gap-8 self-start border-t border-ink/15 pt-8 lg:col-span-4 lg:col-start-9 lg:border-t-0 lg:pt-0">
            <Meta label={p.client} value={project.client} />
            <div className="grid grid-cols-2 gap-8">
              <Meta label={p.year} value={String(project.year || "")} />
              <Meta label={p.duration} value={project.stats?.duration} />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <Meta label={p.type} value={project.type} />
              <Meta label={p.company} value={project.company} />
            </div>
            {project.tags.length > 0 && (
              <div>
                <h3 className="label">{p.tags}</h3>
                <p dir="auto" className="mt-3 text-sm leading-relaxed text-mute">{project.tags.join(" · ")}</p>
              </div>
            )}
          </aside>
        </div>

        <div className="site-wrap space-y-20 pb-24">
          {project.sections.map((section, index) => {
            const [firstImage, ...restImages] = section.images
            const description = section.description && (
              <p dir="auto" className="max-w-3xl text-xl font-light leading-relaxed">{section.description}</p>
            )
            const images = firstImage && (
              <div className="space-y-6">
                <img src={firstImage} alt={project.title} className="w-full object-cover" />
                {restImages.length > 0 && (
                  <div className="grid gap-6 md:grid-cols-2">
                    {restImages.map((image, i) => (
                      <img key={i} src={image} alt={project.title} className="w-full object-cover" />
                    ))}
                  </div>
                )}
              </div>
            )

            return (
              <section key={index}>
                {section.title && <h2 dir="auto" className="label mb-6">{section.title}</h2>}
                {section.imagePosition === "above" ? (
                  <div className="space-y-8">
                    {description}
                    {images}
                  </div>
                ) : (
                  <div className="space-y-8">
                    {images}
                    {description}
                  </div>
                )}
              </section>
            )
          })}
        </div>
      </main>

      <Footer />
    </div>
  )
}

function Meta({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <div>
      <h3 className="label">{label}</h3>
      <p className="mt-2 text-lg" dir="auto">{value}</p>
    </div>
  )
}
