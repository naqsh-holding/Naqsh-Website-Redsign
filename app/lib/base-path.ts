export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ""

export function withBase(path: string) {
  if (!path.startsWith("/")) return path
  return `${BASE_PATH}${path}`
}

export function isHomePath(pathname: string) {
  const current = pathname.replace(/\/+$/, "") || "/"
  const home = BASE_PATH.replace(/\/+$/, "") || "/"
  return current === home
}
