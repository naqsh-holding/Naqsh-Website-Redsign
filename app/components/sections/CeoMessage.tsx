import Image from "next/image"
import { withBase } from "../../lib/base-path"

export default function CeoMessage() {
  return (
    <section id="ceo-message" className="bg-paper">
      <div className="grid items-center lg:grid-cols-12 lg:min-h-[860px]">
        <div className="relative flex items-center justify-center overflow-visible px-2 py-10 sm:px-4 lg:col-span-6 lg:px-0 lg:py-16">
          <div className="relative aspect-square w-[min(100%,760px)] max-w-none scale-[1.12] origin-center lg:w-[min(100%,880px)] lg:scale-[1.16]">
            <Image
              src={withBase("/ceo.png")}
              alt="CEO Portrait - Mohammed Bin Faihan"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 55vw"
              unoptimized
              priority
            />
          </div>
        </div>
        <div className="flex flex-col justify-center px-6 py-10 md:px-12 lg:col-span-6 lg:px-14 lg:py-16 xl:px-20">
          <p className="label">From the CEO</p>
          <blockquote className="display mt-8 max-w-2xl text-[clamp(1.35rem,2.4vw,2.05rem)] font-medium leading-snug text-ink">
            “At Naqsh, we don&apos;t just invest, we aim to leave a lasting and meaningful impact. Our vision is rooted
            in a strong belief that innovation drives progress, and that the private sector plays a vital role in
            shaping the future of our Kingdom. We are committed to smart, value-driven investments that align with Saudi
            Arabia&apos;s Vision 2030, supporting projects that combine creativity, efficiency, and real societal
            impact. Naqsh, Investing with Purpose.”
          </blockquote>
          <div className="mt-12">
            <p className="text-lg text-ink">Mohammed Bin Faihan</p>
            <p className="mt-1 text-sm text-mute">Chief Executive Officer</p>
          </div>
        </div>
      </div>
    </section>
  )
}
