"use client"

import type React from "react"
import { useState } from "react"
import { useLocale } from "../../lib/i18n/LocaleProvider"

export default function ContactUs() {
  const { t } = useLocale()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("idle")
    try {
      await new Promise((r) => setTimeout(r, 800))
      setFormData({ name: "", email: "", organization: "", phone: "", message: "" })
      setStatus("success")
    } catch {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-paper py-24 md:py-32 lg:py-40">
      <div className="site-wrap grid gap-16 lg:grid-cols-12">
        <div className="reveal lg:col-span-5">
          <p className="label">{t.contact.label}</p>
          <h2 className="display mt-5 text-[clamp(2.1rem,4vw,3.5rem)] text-ink">{t.contact.title}</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mute">{t.contact.lede}</p>

          <div className="mt-12 space-y-8">
            <div>
              <h3 className="label">{t.contact.visit}</h3>
              <a
                href="https://maps.google.com/?q=6919+Prince+Turki+Bin+Abdulaziz+Street+Alkhobar+Eastern+Province+Saudi+Arabia"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block whitespace-pre-line text-ink hover:opacity-70"
              >
                {t.contact.address}
              </a>
            </div>
            <div>
              <h3 className="label">{t.contact.call}</h3>
              <a href="tel:+966535558889" className="mt-3 block text-ink hover:opacity-70">
                <span dir="ltr">+966 53 555 8889</span>
              </a>
            </div>
            <div>
              <h3 className="label">{t.contact.email}</h3>
              <a href="mailto:contact@naqsh.com.sa" className="mt-3 block text-ink hover:opacity-70">
                contact@naqsh.com.sa
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="reveal reveal-d2 space-y-8 lg:col-span-7">
          <Field id="name" label={t.form.name} value={formData.name} onChange={handleInputChange} />
          <Field
            id="email"
            type="email"
            label={t.form.email}
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <Field
            id="organization"
            label={t.form.organization}
            value={formData.organization}
            onChange={handleInputChange}
          />
          <Field
            id="phone"
            type="tel"
            label={t.form.phone}
            value={formData.phone}
            onChange={handleInputChange}
          />
          <div>
            <label htmlFor="message" className="label">
              {t.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="field mt-2 resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="arrow-link bg-ink px-8 text-[var(--on-ink)] disabled:opacity-50"
          >
            <span className="arrow-line">{isSubmitting ? t.form.submitting : t.form.submit}</span>
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </button>
          {status === "success" && (
            <p className="text-sm text-ink" role="status">
              {t.form.success}
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-800" role="alert">
              {t.form.error}
            </p>
          )}
          <p className="text-xs text-mute">
            {t.form.warning}
          </p>
        </form>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  id: string
  label: string
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="field mt-2"
      />
    </div>
  )
}
