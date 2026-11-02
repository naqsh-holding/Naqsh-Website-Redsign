"use client"

import { useEffect, useState } from "react"
import { isHomePath, withBase } from "../../lib/base-path"

const STORAGE_KEY = "naqsh-intro-seen"

export default function LoadingScreen() {
  const [exiting, setExiting] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const onHome = isHomePath(location.pathname)
    const introLocked = document.documentElement.hasAttribute("data-intro")

    let seen = false
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1"
    } catch {
      seen = true
    }

    if (!introLocked && (!onHome || seen)) {
      document.documentElement.removeAttribute("data-intro")
      document.documentElement.setAttribute("data-intro-play", "1")
      window.dispatchEvent(new Event("naqsh-intro-play"))
      setDone(true)
      return
    }

    document.documentElement.setAttribute("data-intro", "1")
    try {
      sessionStorage.setItem(STORAGE_KEY, "1")
    } catch {
      /* private mode */
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const hold = reduced ? 900 : 2400
    const leave = reduced ? 400 : 950
    const playAt = hold + leave * 0.8

    const startExit = window.setTimeout(() => setExiting(true), hold)
    const startVideo = window.setTimeout(() => {
      document.documentElement.setAttribute("data-intro-play", "1")
      window.dispatchEvent(new Event("naqsh-intro-play"))
    }, playAt)
    const finish = window.setTimeout(() => {
      document.documentElement.removeAttribute("data-intro")
      setDone(true)
    }, hold + leave)

    return () => {
      window.clearTimeout(startExit)
      window.clearTimeout(startVideo)
      window.clearTimeout(finish)
    }
  }, [])

  if (done) return null

  return (
    <div
      className={`intro-overlay${exiting ? " is-exit" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Welcome to Naqsh Holding"
    >
      <div className="intro-logo-frame">
        <img src={withBase("/naqsh-white.png")} alt="" className="intro-logo" width={200} height={200} />
      </div>
      <button
        type="button"
        className="intro-sound"
        onClick={() => window.dispatchEvent(new Event("naqsh-unlock-audio"))}
      >
        Enable sound
      </button>
    </div>
  )
}
