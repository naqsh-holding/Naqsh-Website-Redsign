import Image from "next/image"

export default function CeoMessage() {
  return (
    <section id="ceo-message" className="surface-ink">
      <div className="grid lg:grid-cols-12">
        <div className="relative min-h-[520px] lg:col-span-5 lg:min-h-[760px]">
          <Image
            src="https://hel1.your-objectstorage.com/naqsh-pord/images/ceo.png"
            alt="CEO Portrait - Mohammed Bin Faihan"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 42vw"
            unoptimized
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:col-span-7 lg:px-16 lg:py-24 xl:px-24">
          <p className="label">From the CEO</p>
          <blockquote className="display mt-8 max-w-2xl text-[clamp(1.35rem,2.4vw,2.05rem)] font-medium leading-snug text-[var(--on-ink)]">
            “At Naqsh, we don&apos;t just invest, we aim to leave a lasting and meaningful impact. Our vision is rooted
            in a strong belief that innovation drives progress, and that the private sector plays a vital role in
            shaping the future of our Kingdom. We are committed to smart, value-driven investments that align with Saudi
            Arabia&apos;s Vision 2030, supporting projects that combine creativity, efficiency, and real societal
            impact. Naqsh, Investing with Purpose.”
          </blockquote>
          <div className="mt-12">
            <p className="text-lg text-[var(--on-ink)]">Mohammed Bin Faihan</p>
            <p className="mt-1 text-sm text-white/50">Chief Executive Officer</p>
          </div>
        </div>
      </div>
    </section>
  )
}
