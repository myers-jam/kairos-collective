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

const specialFeatures = [
  '1 Videographer',
  'Up to 8 hours of wedding day coverage',
  'Professional audio recording for vows and speeches',
  'Cinematic highlight film (4–6 minutes)',
  'Licensed music',
  'Professional color grading',
  'Online film delivery',
  'Social media ready teaser',
  'Digital download',
]

function PricingSection() {
  return (
    <section
      id="pricing"
      className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* End of Year Special */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-neutral-950 px-7 py-10 text-white shadow-[0_35px_100px_rgba(15,15,15,0.2)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">

          <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-white/[0.04] blur-3xl" />

          <div className="relative">
            <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">

              <div>
                <div className="inline-flex rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-white/75">
                  End of Year Special
                </div>

                <h2 className="mt-7 max-w-xl font-serif text-4xl tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                  Your wedding day.
                  <br />
                  Beautifully preserved.
                </h2>

                <p className="mt-6 max-w-lg text-base leading-8 text-white/65 sm:text-lg">
                  A limited offer for couples who want their wedding day
                  professionally captured and transformed into a cinematic
                  wedding film.
                </p>

                <div className="mt-9 flex flex-wrap items-end gap-x-5 gap-y-2">
                  <span className="font-serif text-6xl tracking-[-0.06em] text-white sm:text-7xl">
                    $1,000
                  </span>

                  <span className="pb-2 text-xs font-medium uppercase tracking-[0.24em] text-[#d4af67]">
  Limited Offer
</span>
                </div>

                <p className="mt-4 text-sm leading-6 text-white/50">
                  Limited dates available for this special pricing.
                </p>

                <a
                  href="#inquire"
                  className="mt-9 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-neutral-950 transition duration-300 hover:bg-neutral-200"
                >
                  Inquire Now
                </a>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 sm:p-8">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-white/45">
                  What's Included
                </p>

                <ul className="mt-7 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {specialFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-white/80"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm leading-7 text-white/50">
  A streamlined cinematic experience designed to preserve the
  moments, voices, and emotion that make your wedding day yours.
</p>
                </div>
              </div>
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
                  href="#contact"
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