import { Metadata } from "next"
import { notFound } from "next/navigation"
import ProjectPageClient from "./ProjectPageClient"
import { getAllProjects, getProjectBySlug } from "../../lib/data/projects"

// Generate static params for all projects — pulled from Strapi, not hardcoded.
export async function generateStaticParams() {
  const allProjects = await getAllProjects()
  return allProjects.map((project) => ({
    slug: project.slug,
  }))
}

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Project Not Found | Naqsh Holding Company",
      description: "The requested project could not be found.",
    }
  }

  const projectUrl = `https://naqsh.com.sa/projects/${params.slug}`
  const projectImage = project.images.hero.startsWith('http')
    ? project.images.hero
    : `https://naqsh.com.sa${project.images.hero}`

  return {
    title: `${project.title} | Naqsh Holding Company`,
    description: project.description || `Explore ${project.title} - A showcase of innovative work by Naqsh Holding Company.`,
    keywords: [
      project.title,
      "Naqsh Holding projects",
      project.category.toLowerCase(),
      "Saudi Arabia business projects",
      "investment company projects",
      "corporate projects Riyadh",
      "business solutions Saudi Arabia",
      project.client,
      "Naqsh Holding Company",
      ...project.tags,
    ],
    openGraph: {
      title: project.title,
      description: project.description || `Explore ${project.title} - A showcase of innovative work by Naqsh Holding Company.`,
      url: projectUrl,
      siteName: "Naqsh Holding Company",
      images: [
        {
          url: projectImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description || `Explore ${project.title} - A showcase of innovative work by Naqsh Holding Company.`,
      images: [projectImage],
      creator: "@naqsh_holding",
      site: "@naqsh_holding",
    },
    alternates: {
      canonical: projectUrl,
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
      },
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return <ProjectPageClient project={project} />
}