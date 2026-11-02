"use client"

import { useState } from "react"
import Image from "next/image"

interface HeroImageProps {
  src: string
  alt: string
  fallbackSrc?: string
}

export default function HeroImage({ src, alt, fallbackSrc }: HeroImageProps) {
  const [imageSrc, setImageSrc] = useState(src)
  const [ready, setReady] = useState(false)

  return (
    <div className="absolute inset-0 z-0 bg-[#1a1a1a]">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        priority
        quality={85}
        sizes="100vw"
        className={`object-cover object-center transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
        unoptimized
        onLoad={() => setReady(true)}
        onError={() => {
          if (fallbackSrc && imageSrc !== fallbackSrc) {
            setImageSrc(fallbackSrc)
          }
        }}
      />
    </div>
  )
}
