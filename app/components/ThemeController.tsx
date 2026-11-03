"use client"

import { useEffect } from "react"
import { isHomePath } from "../lib/base-path"

export default function ThemeController() {
  useEffect(() => {
    if (!isHomePath(window.location.pathname)) return

    const ceo = document.getElementById("ceo-message")
    const services = document.getElementById("services")
    if (!ceo || !services) return

    const html = document.documentElement
    let dark = html.getAttribute("data-theme") === "dark"
    let frame = 0

    const apply = (next: boolean) => {
      if (next === dark) return
      dark = next
      if (next) html.setAttribute("data-theme", "dark")
      else html.removeAttribute("data-theme")
    }

    const sync = () => {
      const trigger = window.innerHeight * 0.45
      const start = ceo.getBoundingClientRect().top
      const end = services.getBoundingClientRect().bottom
      apply(start <= trigger && end > trigger * 0.5)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        sync()
      })
    }

    sync()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", sync)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", sync)
      if (frame) window.cancelAnimationFrame(frame)
      html.removeAttribute("data-theme")
    }
  }, [])

  return null
}
