"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { dictionaries, type Dictionary, type Locale } from "./dictionaries"

const STORAGE_KEY = "naqsh-lang"

type LocaleContextValue = {
  locale: Locale
  dir: "ltr" | "rtl"
  t: Dictionary
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function applyDocumentLocale(locale: Locale) {
  const root = document.documentElement
  root.lang = locale
  root.dir = locale === "ar" ? "rtl" : "ltr"
  root.setAttribute("data-locale", locale)
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  useEffect(() => {
    let initial: Locale = "en"
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === "ar" || saved === "en") initial = saved
    } catch {
      /* private mode */
    }
    setLocaleState(initial)
    applyDocumentLocale(initial)
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    applyDocumentLocale(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* private mode */
    }
  }, [])

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "ar" : "en")
  }, [locale, setLocale])

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      dir: locale === "ar" ? "rtl" : "ltr",
      t: dictionaries[locale] as Dictionary,
      setLocale,
      toggleLocale,
    }),
    [locale, setLocale, toggleLocale]
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider")
  return ctx
}
