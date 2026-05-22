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
      'The full cinematic wedding experience with deeper storytelling, more coverage, and a polished film-focused approach.',
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
      'Full speeches/toasts film',
      'Social media teaser reel',
      'Priority editing & delivery',
      'Online delivery',
    ],
    featured: false,
  },
]

function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-neutral-500">
            Wedding Film Packages
          </p>

          <h2 className="mt-5 font-serif text-4xl tracking-[-0.04em] text-neutral-950 sm:text-5xl">
            Founding Couples Prices for 2026
          </h2>

          <p className="mt-5 text-base leading-8 text-neutral-600 sm:text-lg">
            Special founding couple pricing available for a limited number of
            weddings booked for 2026.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-neutral-200 bg-neutral-100 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-700">
            Limited Availability • Save $400
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
                <div className="flex items-center justify-between gap-4">
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
                    <span className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.24em] text-white/80">
                      Most Popular
                    </span>
                  ) : null}
                </div>

                <p
                  className={`mt-6 max-w-sm text-sm leading-7 ${
                    pkg.featured ? 'text-white/72' : 'text-neutral-600'
                  }`}
                >
                  {pkg.description}
                </p>

                <ul
                  className={`mt-8 space-y-4 text-sm leading-7 ${
                    pkg.featured ? 'text-white/86' : 'text-neutral-700'
                  }`}
                >
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={`mt-2 h-1.5 w-1.5 rounded-full ${
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