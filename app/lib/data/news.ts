// lib/data/news.ts (Strapi-backed version)
//
// The data comes from Strapi (site slug "naqsh", component naqsh.naqsh-news)
// instead of being hardcoded here.

import { fetchAPI, getStrapiURL } from '../strapi'

export interface NewsCategory {
	name: string
}

export interface NewsContentBlock {
	type: 'paragraph'
	text: string
}

export interface NewsItem {
	id: number
	title: string
	slug: string
	excerpt: string
	image: string
	day: string
	month: string
	year: string
	categories: NewsCategory[]
	author: string
	date: string
	readTime: string
	content: NewsContentBlock[]
}

const SITE_SLUG = 'naqsh'
const NEWS_COMPONENT = 'naqsh.naqsh-news'
const DEFAULT_AUTHOR = 'Naqsh Communications'

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

let newsPromise: Promise<NewsItem[]> | null = null

export async function getAllNews(): Promise<NewsItem[]> {
	if (!newsPromise) {
		newsPromise = (async () => {
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

			const rawItems: any[] = []
			for (const page of site.pages) {
				const sections = page.sections || []
				for (const section of sections) {
					if (section.__component === NEWS_COMPONENT) {
						rawItems.push(section)
					}
				}
			}

			return rawItems.map(normalizeNews)
		})()
	}
	return newsPromise
}

export async function getNewsBySlug(slug: string): Promise<NewsItem | undefined> {
	const all = await getAllNews()
	return all.find((n) => n.slug === slug)
}

function normalizeNews(raw: any): NewsItem {
	const dateObj = raw.date ? new Date(raw.date) : null

	// Split the long-form content into paragraph blocks. Any number of
	// paragraphs, separated by a blank line — no fixed content1/2/3 limit.
	const content: NewsContentBlock[] = (raw.content_en || '')
		.split(/\n\s*\n/)
		.map((text: string) => text.trim())
		.filter(Boolean)
		.map((text: string) => ({ type: 'paragraph' as const, text }))

	return {
		id: raw.id,
		title: raw.title_en || '',
		slug: raw.slug || '',
		excerpt: raw.excerpt_en || '',
		image: raw.cover_image ? resolveMediaUrl(raw.cover_image.url) : '',
		day: dateObj ? String(dateObj.getDate()).padStart(2, '0') : '',
		month: dateObj ? MONTHS[dateObj.getMonth()] : '',
		year: dateObj ? String(dateObj.getFullYear()) : '',
		categories: (raw.tags || []).map((t: any) => ({ name: t.label })),
		author: DEFAULT_AUTHOR,
		date: raw.date || '',
		readTime: estimateReadTime(raw.content_en || ''),
		content,
	}
}

function estimateReadTime(text: string): string {
	const words = text.trim().split(/\s+/).filter(Boolean).length
	const minutes = Math.max(1, Math.round(words / 200))
	return `${minutes} min read`
}

function resolveMediaUrl(url: string) {
	if (!url) return ''
	if (url.startsWith('http://') || url.startsWith('https://')) return url
	return getStrapiURL(url)
}

export async function getFeaturedNews(limit = 3): Promise<NewsItem[]> {
	const all = await getAllNews()
	return all.slice(0, limit)
}