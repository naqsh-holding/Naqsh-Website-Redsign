"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { getAllProjects, type Project } from "../../lib/data/projects"

const PLACEHOLDER = "https://hel1.your-objectstorage.com/naqsh-pord/placeholder.svg"

function projectImages(project: Project) {
  const gallery: string[] = []
  if (project.image) gallery.push(project.image)
  if (project.images.hero && project.images.hero !== project.image) {
    gallery.push(project.images.hero)
  }
  for (const section of project.sections) {
    for (const src of section.images) {
      if (src && !gallery.includes(src)) gallery.push(src)
      if (gallery.length >= 2) break
    }
    if (gallery.length >= 2) break
  }
  if (gallery.length === 0) return [PLACEHOLDER, PLACEHOLDER]
  if (gallery.length === 1) return [gallery[0], gallery[0]]
  return gallery.slice(0, 2)
}

function projectLocation(project: Project) {
  return project.client || project.company || project.category || "Saudi Arabia"
}

export default function ProjectsSlider() {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    getAllProjects()
      .then((all) => {
        if (!cancelled) setFeaturedProjects(all.slice(0, 4))
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="projects" className="bg-paper pb-24 md:pb-32">
      <div className="site-wrap">
        <div className="flex flex-col gap-6 border-b border-ink/15 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label">Featured projects</p>
            <h2 className="display mt-4 max-w-3xl text-[clamp(1.8rem,3.4vw,3rem)] text-ink">
              Discover impactful projects and innovative solutions across all our business sectors.
            </h2>
          </div>
          <Link href="/projects" className="arrow-link text-ink">
            <span className="arrow-line">See all projects</span>
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        {loading ? (
          <p className="py-16 text-mute">Loading projects…</p>
        ) : featuredProjects.length === 0 ? (
          <p className="py-16 text-mute">Projects will appear here shortly.</p>
        ) : (
          <ul className="border-b border-ink/15">
            {featuredProjects.map((project) => {
              const [primary, secondary] = projectImages(project)
              const location = projectLocation(project)

              return (
                <li key={project.id} className="border-t border-ink/15">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="project-row group grid gap-8 px-0 py-10 transition-colors duration-300 hover:bg-ink/[0.04] focus-visible:bg-ink/[0.04] md:grid-cols-12 md:gap-10 md:px-4 md:py-12 lg:gap-14 lg:px-6"
                    aria-label={`View project: ${project.title}`}
                  >
                    <div className="flex flex-col md:col-span-5 lg:col-span-4">
                      <h3 className="display text-[clamp(1.6rem,2.6vw,2.35rem)] leading-[1.05] text-ink">
                        {project.title}
                      </h3>

                      <div className="mt-8 grid gap-5 sm:grid-cols-2">
                        <div>
                          <p className="text-[0.62rem] font-medium tracking-[0.18em] text-mute">Location</p>
                          <p className="mt-2 text-[0.78rem] uppercase tracking-[0.08em] text-ink/80">{location}</p>
                        </div>
                        <div>
                          <p className="text-[0.62rem] font-medium tracking-[0.18em] text-mute">Year finish</p>
                          <p className="mt-2 text-[0.78rem] uppercase tracking-[0.08em] text-ink/80">
                            {project.year || "—"}
                          </p>
                        </div>
                      </div>

                      <span className="mt-auto inline-flex items-center gap-2 pt-10 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink">
                        <span className="border-b border-ink/40 pb-0.5 transition group-hover:border-ink">
                          Learn more
                        </span>
                        <span aria-hidden="true">↗</span>
                      </span>
                    </div>

                    <div className="md:col-span-7 lg:col-span-8">
                      <div className="grid grid-cols-2 gap-3 md:gap-4">
                        <div className="relative aspect-[4/3] overflow-hidden bg-ink/5">
                          <Image
                            src={primary}
                            alt=""
                            fill
                            className="object-cover transition duration-700 group-hover:scale-[1.03]"
                            sizes="(max-width: 768px) 50vw, 30vw"
                            unoptimized
                          />
                        </div>
                        <div className="relative aspect-[4/3] overflow-hidden bg-ink/5">
                          <Image
                            src={secondary}
                            alt=""
                            fill
                            className="object-cover transition duration-700 group-hover:scale-[1.03]"
                            sizes="(max-width: 768px) 50vw, 30vw"
                            unoptimized
                          />
                        </div>
                      </div>
                      <div className="mt-3 h-px w-full bg-ink/10" aria-hidden="true">
                        <div className="h-px w-1/3 bg-ink/35 transition-all duration-500 group-hover:w-2/3" />
                      </div>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </section>
  )
}
