"use client"

import Image from "next/image"

const brands = [
  { id: 1, name: "Pepsi", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/pepsi.png", row: 1 },
  { id: 2, name: "ABIS", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/abis.png", row: 1 },
  { id: 3, name: "Accenture", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/accenture.png", row: 1 },
  { id: 4, name: "ADNOC", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/adnoc.png", row: 1 },
  { id: 5, name: "Al Asala", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/al-asala.png", row: 1 },
  { id: 6, name: "Al Fozan Holding", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/al-fozan-holding.png", row: 1 },
  { id: 7, name: "Al Khobar Municipality", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/al-khobar-municipality.png", row: 1 },
  { id: 8, name: "Carlton Al Moaibed", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/carlton-al-moaibed.png", row: 1 },
  { id: 11, name: "Culinary Arts Commission Updated", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/culinary-arts-commission-updated.png", row: 1 },
  { id: 12, name: "Eastern Province Municipality", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/eastern-province-municipality.png", row: 1 },
  { id: 13, name: "Ertiqa", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/ertiqa.png", row: 1 },
  { id: 14, name: "GDC Middle East", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/gdc-middle-east.png", row: 1 },
  { id: 15, name: "IBRAQ", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/ibraq.png", row: 2 },
  { id: 17, name: "JEC", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/jec.png", row: 2 },
  { id: 18, name: "Keeta", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/keeta.png", row: 2 },
  { id: 19, name: "King Fahd Causeway", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/king-fahd-causeway.png", row: 2 },
  { id: 20, name: "Kooheji Jewelry", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/kooheji-jewelry.png", row: 2 },
  { id: 21, name: "Ministry of Civil Defense", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/ministry-of-civil-defense.png", row: 2 },
  { id: 22, name: "Ministry of Culture", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/ministry-of-culture-new.png", row: 2 },
  { id: 23, name: "Ministry of Education", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/ministry-of-education-updated.png", row: 2 },
  { id: 24, name: "Ministry of Interior", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/ministry-of-interior.png", row: 2 },
  { id: 25, name: "Ministry of National Guard", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/ministry-of-national-guard-updated.png", row: 2 },
  { id: 26, name: "Monsha'at", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/monshaat-new.png", row: 2 },
  { id: 28, name: "Mouwasat Medical", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/mouwasat-medical.png", row: 2 },
  { id: 29, name: "NPCC", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/npcc.png", row: 3 },
  { id: 30, name: "OSN", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/osn.png", row: 3 },
  { id: 32, name: "Prisoners Care Committee", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/prisoners-care-committee.png", row: 3 },
  { id: 33, name: "Retal", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/retal.png", row: 3 },
  { id: 34, name: "Satorp", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/satorp.png", row: 3 },
  { id: 35, name: "Saudi Cement", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/saudi-cement.png", row: 3 },
  { id: 36, name: "Schneider Electric", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/schneider-electric.png", row: 3 },
  { id: 37, name: "Scitech", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/scitech.png", row: 3 },
  { id: 38, name: "Sixt", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/sixt.png", row: 3 },
  { id: 39, name: "SMT", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/smt.png", row: 3 },
  { id: 40, name: "Solutions by STC", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/solutions-by-stc.png", row: 3 },
  { id: 41, name: "SRACO HR", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/sraco-hr.png", row: 3 },
  { id: 42, name: "SRACO Updated", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/sraco-updated.png", row: 3 },
]

function Row({ row, reverse }: { row: number; reverse?: boolean }) {
  const items = brands.filter((b) => b.row === row)
  const loop = [...items, ...items]

  return (
    <div className="overflow-hidden">
      <div
        className="marquee-track flex w-max gap-20 md:gap-28 lg:gap-32"
        style={{ animationDuration: `${36 + row * 8}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {loop.map((brand, index) => (
          <div key={`${brand.id}-${index}`} className="relative h-24 w-64 flex-shrink-0 md:h-32 md:w-80 lg:h-40 lg:w-[26rem]">
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain opacity-90 grayscale contrast-125"
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 416px"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function OurBrands() {
  return (
    <section id="brands" className="bg-mist py-24 md:py-32">
      <div className="site-wrap mb-14 md:mb-20">
        <p className="label">Partnerships</p>
        <h2 className="display mt-4 text-[clamp(2rem,4vw,3.4rem)] text-ink">Trusted by industry leaders</h2>
        <p className="mt-4 max-w-xl text-mute">Partnerships built on trust, impact, and long-term success.</p>
      </div>
      <div className="space-y-16 md:space-y-20">
        <Row row={1} />
        <Row row={2} reverse />
        <Row row={3} />
      </div>
    </section>
  )
}
