"use client"

import { useEffect } from "react"

export default function RevealObserver() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"))
      return
    }

    const seen = new WeakSet<Element>()

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add("is-visible")
          io.unobserve(entry.target)
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" }
    )

    const watch = (root: ParentNode = document) => {
      root.querySelectorAll(".reveal").forEach((el) => {
        if (seen.has(el)) return
        seen.add(el)
        io.observe(el)
      })
    }

    watch()

    const mo = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return
          if (node.classList.contains("reveal")) {
            if (!seen.has(node)) {
              seen.add(node)
              io.observe(node)
            }
          }
          watch(node)
        })
      }
    })

    const main = document.getElementById("main") || document.body
    mo.observe(main, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])

  return null
}
