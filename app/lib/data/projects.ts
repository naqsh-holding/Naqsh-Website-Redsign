// lib/data/projects.ts (Strapi-backed version)
//
// The data comes from Strapi (site slug "naqsh") instead of being
// hardcoded here. Every sub_section is preserved and rendered in its
// original order — Challenge/Approach get pulled out for the top details
// grid (matching the original design), everything else (any title, any
// number of them) flows through generically below with its own
// image_position respected.

import { fetchAPI, getStrapiURL } from '../strapi'

export interface ProjectSection {
	title: string
	description: string
	images: string[]
	imagePosition: 'above' | 'below'
}

export interface Project {
	id: number
	title: string
	category: string
	image: string
	slug: string
	year: number
	client: string
	challenge: string
	approach: string
	type: string
	company: string
	tags: string[]
	images: {
		hero: string
	}
	sections: ProjectSection[]
	stats?: {
		area?: string
		duration?: string
		drones?: number
	}
}

const SITE_SLUG = 'naqsh'
const PROJECT_COMPONENT = 'naqsh.naqsh-project'

let projectsPromise: Promise<Project[]> | null = null

export async function getAllProjects(): Promise<Project[]> {
	if (!projectsPromise) {
		projectsPromise = (async () => {
			let site
			try {
				site = await fetchAPI(`/api/site-full?slug=${SITE_SLUG}`)
			} catch (err) {
				if (process.env.NODE_ENV === 'development') {
					console.error('Failed to fetch Naqsh site from Strapi:', err)
				}
				return []
			}

			if (!site || !site.pages || !site.pages.length) return []

			const rawProjects: any[] = []
			for (const page of site.pages) {
				const sections = page.sections || []
				for (const section of sections) {
					if (section.__component === PROJECT_COMPONENT) {
						rawProjects.push(section)
					}
				}
			}

			return rawProjects.map(normalizeProject)
		})()
	}
	return projectsPromise
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
	const all = await getAllProjects()
	return all.find((p) => p.slug === slug)
}

function normalizeProject(raw: any): Project {
	const subSections: any[] = raw.sub_sections || []

	const challenge = subSections.find((s) => s.title_en === 'Challenge')?.description_en || ''
	const approach = subSections.find((s) => s.title_en === 'Approach')?.description_en || ''

	// Every other sub-section (any title, or none) flows through as-is,
	// in the order it was entered in Strapi, with its own image_position.
	const sections: ProjectSection[] = subSections
		.filter((s) => s.title_en !== 'Challenge' && s.title_en !== 'Approach')
		.map((s) => ({
			title: s.title_en || '',
			description: s.description_en || '',
			images: (s.images || []).map((img: any) => resolveMediaUrl(img.url)),
			imagePosition: s.image_position === 'above' ? 'above' : 'below',
		}))
		.filter((s) => s.description || s.images.length > 0) // skip fully empty sub-sections

	const company = raw.Company || ''

	return {
		id: raw.id,
		title: raw.title_en || '',
		category: company.toUpperCase(),
		image: raw.thumbnail ? resolveMediaUrl(raw.thumbnail.url) : '',
		slug: raw.slug || '',
		year: parseInt(raw.year, 10) || 0,
		client: raw.clinet_en || '',
		challenge,
		approach,
		type: raw.Type || '',
		company,
		tags: (raw.tags || []).map((t: any) => t.label),
		images: {
			hero: raw.background ? resolveMediaUrl(raw.background.url) : '',
		},
		sections,
		stats: {
			duration: raw.Duration || undefined,
		},
	}
}

function resolveMediaUrl(url: string) {
	if (!url) return ''
	if (url.startsWith('http://') || url.startsWith('https://')) return url
	return getStrapiURL(url)
}