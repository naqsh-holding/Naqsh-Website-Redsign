"use client"

import { useEffect } from "react"
import { isHomePath } from "../lib/base-path"

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1)
  return t * t * (3 - 2 * t)
}

export default function ThemeController() {
  useEffect(() => {
    if (!isHomePath(window.location.pathname)) return

    const ceo = document.getElementById("ceo-message")
    const services = document.getElementById("services")
    if (!ceo || !services) return

    const html = document.documentElement
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let current = 0
    let target = 0
    let dark = false
    let frame = 0
    let running = false

    const applyDark = (next: boolean) => {
      if (next === dark) return
      dark = next
      if (next) html.setAttribute("data-theme", "dark")
      else html.removeAttribute("data-theme")
    }

    const computeTarget = () => {
      const vh = window.innerHeight || 1
      const start = ceo.getBoundingClientRect().top
      const end = services.getBoundingClientRect().bottom

      // Blend in as CEO approaches mid-viewport
      const enter = smoothstep(vh * 0.88, vh * 0.38, start)
      // Blend out as sectors leave the top of the viewport
      const leave = smoothstep(vh * 0.06, vh * 0.52, end)

      return clamp(Math.min(enter, leave), 0, 1)
    }

    const paint = (value: number) => {
      html.style.setProperty("--theme-t", value.toFixed(4))
      applyDark(value >= 0.45)
    }

    const tick = () => {
      target = computeTarget()
      const blend = reduced ? 1 : 0.085
      current += (target - current) * blend

      if (Math.abs(target - current) < 0.001) current = target
      paint(current)

      if (Math.abs(target - current) > 0.001) {
        frame = window.requestAnimationFrame(tick)
      } else {
        running = false
        frame = 0
      }
    }

    const kick = () => {
      target = computeTarget()
      if (!running) {
        running = true
        frame = window.requestAnimationFrame(tick)
      }
    }

    paint(0)
    kick()
    window.addEventListener("scroll", kick, { passive: true })
    window.addEventListener("resize", kick)

    return () => {
      window.removeEventListener("scroll", kick)
      window.removeEventListener("resize", kick)
      if (frame) window.cancelAnimationFrame(frame)
      html.removeAttribute("data-theme")
      html.style.removeProperty("--theme-t")
    }
  }, [])

  return null
}
