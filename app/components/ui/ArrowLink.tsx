import Link from "next/link"
import type { ReactNode } from "react"

interface ArrowLinkProps {
  href: string
  children: ReactNode
  className?: string
  external?: boolean
  onClick?: () => void
  ariaLabel?: string
}

export function ArrowLink({ href, children, className = "", external, onClick, ariaLabel }: ArrowLinkProps) {
  const classes = `arrow-link ${className}`
  const content = (
    <>
      <span className="arrow-line">{children}</span>
      <span className="arrow" aria-hidden="true">
        →
      </span>
    </>
  )

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
      {content}
    </Link>
  )
}
