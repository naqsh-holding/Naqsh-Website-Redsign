"use client"

import { useEffect, useRef, useState } from "react"
import { withBase } from "../../lib/base-path"
import { useLocale } from "../../lib/i18n/LocaleProvider"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useState(false)
  const [finished, setFinished] = useState(false)
  const [hasSound, setHasSound] = useState(false)
  const { t, locale } = useLocale()

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let cancelled = false
    let revealed = false
    let stopped = false
    let playbackStarted = false
    let playStarted = 0
    let clock = 0
    let settle = 0
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const SLOW_WINDOW = 1.85
    const FADE_WINDOW = 1.7
    const REVEAL_LEAD = 1.85

    document.documentElement.setAttribute("data-hero-pending", "1")
    // Always start muted; sound is opt-in via the "Enable sound" button only.
    video.defaultMuted = true
    video.muted = true
    video.volume = 1
    video.playbackRate = 1
    video.playsInline = true
    video.setAttribute("webkit-playsinline", "true")

    const easeOut = (t: number) => 1 - (1 - t) * (1 - t) * (1 - t)

    const mediaTime = () => {
      const duration = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 6.05
      const wall = playStarted ? (performance.now() - playStarted) / 1000 : 0
      const elapsed = video.currentTime > 0.04 ? video.currentTime : Math.max(video.currentTime, wall)
      return { duration, elapsed, remaining: duration - elapsed }
    }

    const reveal = () => {
      if (cancelled || revealed) return
      revealed = true
      document.documentElement.removeAttribute("data-hero-pending")
      setReady(true)
    }

    const freezeLastFrame = () => {
      if (stopped) return
      stopped = true
      video.pause()
      video.playbackRate = 1
      try {
        video.volume = 0
      } catch {
        /* volume may be immutable while muted */
      }
      setFinished(true)
      reveal()
    }

    const settleTowardEnd = () => {
      if (cancelled || stopped) return
      const { remaining } = mediaTime()

      if (!reduced && remaining <= SLOW_WINDOW && remaining > 0) {
        const t = easeOut(1 - remaining / SLOW_WINDOW)
        video.playbackRate = Math.max(0.4, 1 - t * 0.6)
      }

      if (!video.muted && remaining <= FADE_WINDOW && remaining > 0) {
        const t = easeOut(1 - remaining / FADE_WINDOW)
        video.volume = Math.max(0, 1 - t)
      }

      if (remaining <= REVEAL_LEAD) reveal()
      if (remaining <= 0.1) freezeLastFrame()
    }

    const startClock = () => {
      if (playStarted) return
      playStarted = performance.now()
      const tick = () => {
        if (cancelled || stopped) return
        settleTowardEnd()
        settle = window.requestAnimationFrame(tick)
      }
      settle = window.requestAnimationFrame(tick)
      clock = window.setInterval(settleTowardEnd, 80)
    }

    const markSound = () => {
      if (stopped) return
      setHasSound(!video.muted)
    }

    const playVideo = async () => {
      if (cancelled || stopped) return
      if (playbackStarted && !video.paused) {
        markSound()
        return
      }
      playbackStarted = true

      if (reduced) {
        if (video.readyState >= 1) freezeLastFrame()
        else video.addEventListener("loadedmetadata", freezeLastFrame, { once: true })
        return
      }

      try {
        await video.play()
        markSound()
        startClock()
      } catch {
        reveal()
      }
    }

    const unlockSound = () => {
      if (cancelled || stopped) return
      video.muted = false
      video.defaultMuted = false
      const { remaining } = mediaTime()
      if (remaining > FADE_WINDOW) video.volume = 1
      if (!video.paused) {
        markSound()
        return
      }
      video
        .play()
        .then(() => {
          playbackStarted = true
          markSound()
          startClock()
        })
        .catch(() => {
          setHasSound(false)
        })
    }

    const onTimeUpdate = () => settleTowardEnd()

    const startAfterIntro = () => {
      const introOn = document.documentElement.hasAttribute("data-intro")
      const playCue = document.documentElement.hasAttribute("data-intro-play")
      if (!introOn || playCue) {
        playVideo()
        return
      }
      window.addEventListener("naqsh-intro-play", playVideo, { once: true })
    }

    video.addEventListener("timeupdate", onTimeUpdate)
    video.addEventListener("ended", freezeLastFrame)
    video.addEventListener("error", reveal)
    video.addEventListener("playing", markSound)
    window.addEventListener("naqsh-unlock-audio", unlockSound)
    startAfterIntro()

    const failSafe = window.setTimeout(reveal, 14000)

    return () => {
      cancelled = true
      window.removeEventListener("naqsh-intro-play", playVideo)
      video.removeEventListener("timeupdate", onTimeUpdate)
      video.removeEventListener("ended", freezeLastFrame)
      video.removeEventListener("error", reveal)
      video.removeEventListener("playing", markSound)
      window.removeEventListener("naqsh-unlock-audio", unlockSound)
      window.clearInterval(clock)
      window.cancelAnimationFrame(settle)
      window.clearTimeout(failSafe)
      document.documentElement.removeAttribute("data-hero-pending")
    }
  }, [])

  const enableSound = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = false
    video.defaultMuted = false
    const duration = video.duration
    const remaining = Number.isFinite(duration) ? duration - video.currentTime : 99
    if (remaining > 1.7) video.volume = 1
    video.play().then(() => setHasSound(true)).catch(() => setHasSound(false))
  }

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden" aria-label="Hero Section">
      <div className="absolute inset-0 z-0 bg-[#0b0b0b]">
        <video
          ref={videoRef}
          className="h-full w-full object-cover object-center"
          playsInline
          muted
          preload="auto"
          aria-hidden="true"
        >
          <source src={withBase("/hero.mp4")} type="video/mp4" />
        </video>
      </div>
      <div className="hero-veil absolute inset-0 z-10" />

      {/* The film is the hero: copy sits in a slim bar along the bottom edge so
          the engraved logo at the centre of the frame stays untouched. */}
      <div
        className="hero-copy absolute inset-x-0 bottom-0 z-20 px-5 pb-[max(1.75rem,env(safe-area-inset-bottom))] sm:px-8 md:pb-10 lg:px-12 xl:px-16"
        aria-hidden={!ready}
      >
        <div className="hero-in hero-rule" />
        <div className="flex flex-col gap-4 pt-5 md:flex-row md:items-end md:justify-between md:gap-12 md:pt-6">
          <h1
            className="hero-in display whitespace-nowrap text-[clamp(1.75rem,3.2vw,2.9rem)] leading-none text-white"
            lang={locale}
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            {t.hero.titleLine1} {t.hero.titleLine2}
          </h1>
          <p
            className="hero-in hero-lede max-w-[38ch] text-[0.85rem] font-light leading-[1.65] md:text-end md:text-[0.9rem]"
            lang={locale}
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            {t.hero.lede}
          </p>
        </div>
      </div>

      {!hasSound && !finished && !ready && (
        <button type="button" className="hero-sound" onClick={enableSound}>
          {t.hero.enableSound}
        </button>
      )}
    </section>
  )
}
