import Link from "next/link"

export default function AboutUs() {
  return (
    <section id="about" className="bg-paper py-24 md:py-32 lg:py-40">
      <div className="site-wrap">
        <div className="flex items-center gap-2.5">
          <span className="about-mark h-1.5 w-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
          <p className="label !normal-case tracking-[0.04em] text-ink">About us</p>
        </div>

        <h2 className="display mt-10 max-w-[18ch] text-[clamp(2.4rem,5.8vw,4.85rem)] text-ink md:mt-12">
          The essence of Naqsh
        </h2>

        <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-12 lg:ml-auto lg:max-w-[52rem] lg:gap-16">
          <div>
            <p className="text-[0.98rem] font-light leading-[1.75] text-ink/80 md:text-base">
              At Naqsh Holding, we don&apos;t just aim to succeed — we aim to leave a trace. We believe that every
              project is an opportunity to etch a lasting impact, and every investment is a signature on the future of
              the industries we serve.
            </p>
            <Link href="/contact" className="arrow-link mt-8 text-ink">
              <span className="arrow-line">Start a conversation</span>
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
          <p className="text-[0.98rem] font-light leading-[1.75] text-ink/80 md:text-base">
            As a diversified holding group, we create meaningful value across technology, media, real estate, and
            aviation. We don&apos;t merely participate — we shape, establish, and influence. Our motto, “To Leave a
            Trace,” is a promise we bring to life through innovation, sustainability, and long-term impact.
          </p>
        </div>
      </div>
    </section>
  )
}
