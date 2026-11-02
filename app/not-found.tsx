import Link from "next/link"
import { withBase } from "./lib/base-path"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center">
      <Link href="/" aria-label="Naqsh Home">
        <img src={withBase("/naqsh-black.png")} alt="Naqsh Logo" width={135} height={45} className="mx-auto h-9 w-auto" />
      </Link>
      <p className="label mt-16">404</p>
      <h1 className="display mt-4 text-[clamp(2.4rem,6vw,4.5rem)] text-ink">Page not found</h1>
      <p className="mt-4 max-w-md text-mute">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/" className="arrow-link mt-10 text-ink">
        <span className="arrow-line">Return home</span>
        <span className="arrow" aria-hidden="true">
          →
        </span>
      </Link>
    </div>
  )
}
