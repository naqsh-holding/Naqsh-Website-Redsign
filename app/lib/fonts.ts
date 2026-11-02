import { Syne, Outfit } from "next/font/google"

export const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600"],
})
