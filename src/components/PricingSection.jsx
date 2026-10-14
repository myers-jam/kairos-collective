const packages = [
  {
    name: 'Essential Collection',
    originalPrice: '$2,800',
    foundingPrice: '$2,200',
    description:
      'A refined experience for couples who want the most meaningful moments of their day captured beautifully and intentionally.',
    features: [
      '2 Videographers',
      'Professional audio coverage',
      'Coverage of key moments throughout the wedding day',
      'Cinematic highlight film (3–5 minutes)',
      'Online delivery',
    ],
    featured: false,
  },
  {
    name: 'Signature Collection',
    originalPrice: '$3,800',
    foundingPrice: '$3,200',
    description:
      'The full cinematic wedding experience with deeper storytelling, more coverage, and a polished film focused approach.',
    features: [
      '2 Videographers',
      'Professional audio coverage',
      'Drone footage (weather & location permitting)',
      'Full wedding day coverage',
      'Cinematic highlight film (5–8 minutes)',
      'Social media teaser reel',
      'Multiple camera angles for ceremony & reception events',
      'Online delivery',
    ],
    featured: true,
  },
  {
    name: 'Legacy Collection',
    originalPrice: '$5,200',
    foundingPrice: '$4,600',
    description:
      'A luxury experience designed to preserve the wedding day in the most complete and timeless way possible.',
    features: [
      '2 Videographers',
      'Professional audio coverage',
      'Drone footage (weather & location permitting)',
      'Full wedding day coverage',
      'Cinematic wedding film (8–12 minutes)',
      'Full ceremony film',
      'Full speeches and toasts film',
      'Social media teaser reel',
      'Priority editing and delivery',
      'Online delivery',
    ],
    featured: false,
  },
]

const endOfYearSpecials = [
  {
    name: "Essential Special",
    price: "$1,000",
    description:
      "A beautiful cinematic wedding film experience focused on preserving the moments that matter most.",
    features: [
      "1 Videographer",
      "Up to 8 hours of wedding day coverage",
      "Professional audio for vows and speeches",
      "4–6 minute cinematic highlight film",
      "Licensed music",
      "Professional color grading",
      "Social media teaser",
      "Online delivery",
    ],
    featured: false,
  },
  {
    name: "Signature Special",
    price: "$2,000",
    description:
      "A more complete wedding film experience with two videographers, expanded coverage, and more ways to capture your story.",
    features: [
      "2 Videographers",
      "Full wedding day coverage",
      "Professional audio coverage",
      "Drone footage, weather and location permitting",
      "Multiple camera angles for ceremony and reception",
      "4–6 minute cinematic highlight film",
      "Social media teaser",
      "Online delivery",
    ],
    featured: true,
  },
];

function PricingSection() {
  return (
    <section
      id="pricing"
      className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* End of Year Special */}
        
{/* END OF YEAR SPECIALS */}
<div className="relative overflow-hidden rounded-[2.5rem] bg-neutral-950 px-6 py-12 text-white shadow-[0_35px_100px_rgba(15,15,15,0.2)] sm:px-10 sm:py-16 lg:px-14 lg:py-20">

  <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-white/[0.04] blur-3xl" />

  <div className="relative">

    {/* Section Heading */}
    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-flex rounded-full border border-[#d4af67]/30 bg-[#d4af67]/10 px-5 py-2 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-[#d4af67]">
        Limited Time Offer
      </span>

      <h2 className="mt-7 font-serif text-4xl tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
        End of Year Specials
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
        Your wedding deserves to be remembered beautifully.
        For a limited time, we're offering two special wedding
        film collections at exclusive pricing.
      </p>

      <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-[#d4af67]">
        Limited bookings available
      </p>

    </div>

    {/* Special Packages */}
    <div className="mt-14 grid gap-6 lg:grid-cols-2">

      {endOfYearSpecials.map((special) => (
        <article
          key={special.name}
          className={`relative flex h-full flex-col rounded-[2rem] border p-7 sm:p-9 lg:p-10 ${
            special.featured
              ? "border-[#d4af67]/50 bg-white/[0.09]"
              : "border-white/10 bg-white/[0.04]"
          }`}
        >

          {/* Featured Label */}
          {special.featured && (
            <span className="absolute right-6 top-6 rounded-full border border-[#d4af67]/30 bg-[#d4af67]/10 px-3 py-1.5 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-[#d4af67] sm:right-9 sm:top-9">
              Enhanced Coverage
            </span>
          )}

          <div className="flex flex-1 flex-col">

            {/* Package Name */}
            <p className="pr-32 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-white/50">
              End of Year Collection
            </p>

            <h3 className="mt-4 font-serif text-3xl tracking-[-0.04em] text-white sm:text-4xl">
              {special.name}
            </h3>

            {/* Price */}
            <div className="mt-7 flex flex-wrap items-end gap-x-5 gap-y-2">

              <span className="font-serif text-5xl tracking-[-0.06em] text-white sm:text-6xl">
                {special.price}
              </span>

              <span className="pb-2 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[#d4af67]">
                Limited Offer
              </span>

            </div>

            {/* Description */}
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/60">
              {special.description}
            </p>

            {/* Divider */}
            <div className="my-8 h-px bg-white/10" />

            {/* Features */}
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-white/45">
              What's Included
            </p>

            <ul className="mt-6 space-y-4">
              {special.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-7 text-white/80"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4af67]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Spacer */}
            <div className="flex-1" />

            {/* CTA */}
            <a
              href="#inquire"
              className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-7 py-4 text-sm font-medium transition duration-300 ${
                special.featured
                  ? "bg-[#d4af67] text-neutral-950 hover:bg-[#e5c58a]"
                  : "bg-white text-neutral-950 hover:bg-neutral-200"
              }`}
            >
              Inquire Now
            </a>

          </div>

        </article>
      ))}

    </div>

    {/* Promotion Footer */}
    <div className="mt-10 text-center">
      <p className="text-sm leading-7 text-white/45">
        Special pricing available for a limited number of bookings.
        Wedding date availability varies.
      </p>
    </div>

  </div>
</div>


        {/* Standard Collections */}
        <div className="mx-auto mt-28 max-w-3xl text-center">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-neutral-500">
            Wedding Film Packages
          </p>

          <h2 className="mt-5 font-serif text-4xl tracking-[-0.04em] text-neutral-950 sm:text-5xl">
            Founding Couples Prices for 2026
          </h2>

          <p className="mt-5 text-base leading-8 text-neutral-600 sm:text-lg">
            More coverage, more storytelling, and a complete cinematic
            experience for couples who want every part of their wedding day
            preserved.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-neutral-200 bg-neutral-100 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-700">
            Limited Availability • Save $600
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`group flex h-full flex-col justify-between rounded-[2rem] p-8 transition duration-500 ${
                pkg.featured
                  ? 'bg-neutral-950 text-white shadow-[0_30px_90px_rgba(15,15,15,0.18)] ring-1 ring-white/10 lg:-translate-y-3'
                  : 'bg-white text-neutral-900 shadow-[0_25px_70px_rgba(15,15,15,0.06)] hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(15,15,15,0.1)]'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className={`font-serif text-3xl tracking-[-0.04em] ${
                        pkg.featured ? 'text-white' : 'text-neutral-950'
                      }`}
                    >
                      {pkg.name}
                    </h3>

                    <div className="mt-5">
                      <p
                        className={`text-base line-through ${
                          pkg.featured
                            ? 'text-white/40'
                            : 'text-neutral-400'
                        }`}
                      >
                        {pkg.originalPrice}
                      </p>

                      <p
                        className={`mt-1 font-serif text-5xl tracking-[-0.05em] ${
                          pkg.featured ? 'text-white' : 'text-neutral-950'
                        }`}
                      >
                        {pkg.foundingPrice}
                      </p>

                      <p
                        className={`mt-2 text-[0.68rem] font-medium uppercase tracking-[0.28em] ${
                          pkg.featured
                            ? 'text-white/60'
                            : 'text-neutral-500'
                        }`}
                      >
                        Founding Price
                      </p>
                    </div>
                  </div>

                  {pkg.featured ? (
                    <span className="shrink-0 rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.24em] text-white/80">
                      Most Popular
                    </span>
                  ) : null}
                </div>

                <p
                  className={`mt-6 max-w-sm text-sm leading-7 ${
                    pkg.featured ? 'text-white/70' : 'text-neutral-600'
                  }`}
                >
                  {pkg.description}
                </p>

                <ul
                  className={`mt-8 space-y-4 text-sm leading-7 ${
                    pkg.featured ? 'text-white/85' : 'text-neutral-700'
                  }`}
                >
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                          pkg.featured ? 'bg-white/75' : 'bg-neutral-400'
                        }`}
                      />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 pt-2">
                <a
                  href="#inquire"
                  className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition duration-300 ${
                    pkg.featured
                      ? 'bg-white text-neutral-950 hover:bg-neutral-200'
                      : 'border border-neutral-300 bg-transparent text-neutral-900 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white'
                  }`}
                >
                  Check Availability
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection