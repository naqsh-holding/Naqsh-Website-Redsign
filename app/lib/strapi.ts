// lib/strapi.ts
//
// The base URL comes from the STRAPI_URL environment variable.
// Set it in a `.env.local` file at the project root, e.g.:
//
//   NEXT_PUBLIC_STRAPI_URL=https://strapi.6d.com.sa
//
// If it's not set, it falls back to the production backend.

export function getStrapiURL(path = '') {
	const base = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://strapi.6d.com.sa'
	return `${base}${path}`
}

export async function fetchAPI(path: string) {
	const requestUrl = getStrapiURL(path)

	const response = await fetch(requestUrl, { cache: 'no-store' })

	if (!response.ok) {
		throw new Error(`Strapi request failed (${response.status}): ${requestUrl}`)
	}

	return response.json()
}