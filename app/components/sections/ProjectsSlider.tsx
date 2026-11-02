"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLink } from "../ui/ArrowLink"
import { getAllProjects, type Project } from "../../lib/data/projects"

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
          <ArrowLink href="/projects">See all projects</ArrowLink>
        </div>

        {loading ? (
          <p className="py-16 text-mute">Loading projects…</p>
        ) : featuredProjects.length === 0 ? (
          <p className="py-16 text-mute">Projects will appear here shortly.</p>
        ) : (
          <ul className="divide-y divide-ink/15 border-b border-ink/15">
            {featuredProjects.map((project, index) => (
              <li key={project.id}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group grid items-center gap-6 py-8 md:grid-cols-12 md:gap-10 md:py-10"
                  aria-label={`View project: ${project.title}`}
                >
                  <span className="label md:col-span-1">{String(index + 1).padStart(2, "0")}</span>
                  <div className="relative aspect-[16/10] overflow-hidden md:col-span-4 md:aspect-[16/11]">
                    <Image
                      src={project.image || "https://hel1.your-objectstorage.com/naqsh-pord/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                    />
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="display text-2xl text-ink md:text-3xl">{project.title}</h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.14em] text-mute">
                      {project.category}
                      {project.tags[0] ? ` · ${project.tags[0]}` : ""}
                    </p>
                  </div>
                  <span className="arrow-link md:col-span-2 md:justify-self-end">
                    <span className="arrow-line">View</span>
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
