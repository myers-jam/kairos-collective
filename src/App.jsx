import canyonImg from './assets/portfolio-canyon.jpg'
import coupleImg from './assets/portfolio-couple-close.jpg'
import bandImg from './assets/portfolio-band.jpg'
import deanne from './assets/DM4.JPEG'
import DM from './assets/DM2.JPEG'
import NMP from './assets/NMP.JPG'
import bandPort from './assets/BandPort.jpeg'
import bridalPort from './assets/bridalPort.jpeg'
import Alice from './assets/Alice.jpeg'
import watkins from './assets/watkins.jpeg'
import heroVideo from './assets/websiteVideo.mp4'
import InquirySection from './components/InquirySection.tsx'

import { useState } from "react";
import { Menu, X } from "lucide-react";

const services = [
  {
    title: 'Photo',
    image: coupleImg,
    text: 'Portraits, couples sessions, creative shoots, and intentional images with a cinematic feel.',
  },
  {
    title: 'Video',
    image: deanne,
    text: 'Story driven films for brands, events, creative projects, and meaningful moments.',
  },
  {
    title: 'Creative Content',
    image: bandImg,
    text: 'Short form visuals, social content, and polished media for people and brands with something to say.',
  },
]

const workItems = [
  {
    title: 'Creative Portraits',
    image: bandPort,
  },
  {
    title: 'Social Content',
    image: DM,
  },
  {
    title: 'Interviews',
    image: Alice,
  },
  {
    title: 'Couples Shoots',
    image: NMP,
  },
  {
    title: 'Weddings',
    image: watkins,
  },
  {
    title: 'Travel and Atmosphere',
    image: canyonImg,
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
    <a
      href="#home"
      className="text-xs font-semibold uppercase tracking-[0.4em] text-white"
    >
      Kairos Collective
    </a>

    {/* Desktop Navigation */}
    <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 md:flex">
      <a
        href="#services"
        className="rounded-full px-4 py-2 transition hover:bg-white hover:text-neutral-950"
      >
        Services
      </a>

      <a
        href="/weddings"
        className="rounded-full px-4 py-2 transition hover:bg-white hover:text-neutral-950"
      >
        Weddings
      </a>

      <a
        href="#inquire"
        className="rounded-full px-4 py-2 transition hover:bg-white hover:text-neutral-950"
      >
        Inquire
      </a>
    </nav>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
    >
      {menuOpen ? <X size={18} /> : <Menu size={18} />}
    </button>
  </div>

  {/* Mobile Navigation */}
  {menuOpen && (
    <div className="border-t border-white/10 bg-neutral-950/95 px-6 py-6 backdrop-blur-xl md:hidden">
      <nav className="flex flex-col gap-3 text-white">
        <a
          href="#services"
          onClick={() => setMenuOpen(false)}
          className="rounded-full px-4 py-3 transition hover:bg-white hover:text-neutral-950"
        >
          Services
        </a>

        <a
          href="/weddings"
          onClick={() => setMenuOpen(false)}
          className="rounded-full px-4 py-3 transition hover:bg-white hover:text-neutral-950"
        >
          Weddings
        </a>

        <a
          href="#inquire"
          onClick={() => setMenuOpen(false)}
          className="rounded-full px-4 py-3 transition hover:bg-white hover:text-neutral-950"
        >
          Inquire
        </a>
      </nav>
    </div>
  )}
</header>

      <main>
        <section id="home" className="relative min-h-screen overflow-hidden">
  <div className="absolute inset-0">
    <video
      className="h-full w-full object-cover"
      src={heroVideo}
      autoPlay
      loop
      muted
      playsInline
    />

    <div className="absolute inset-0 bg-black/40" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
  </div>

  <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 lg:px-10 lg:pb-28">
    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.35em] text-white/60">
        Kairos Collective
      </p>

      <h1 className="mt-4 font-serif text-4xl leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
        Films that feel alive, stories worth remembering.
      </h1>

      <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
        Created for people who want to feel the moment again.
      </p>

      <div className="mt-8">
        <a
          href="#work"
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
        >
          Tell your story
        </a>
      </div>
    </div>
  </div>
</section>

        <section id="services" className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/40">
                Services
              </p>
              <h2 className="mt-5 font-serif text-4xl tracking-[-0.05em] text-white sm:text-5xl">
                A creative studio for photo, video, and story driven work.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
                From portraits and creative sessions to brand films and event coverage, the focus is always the same: make the work feel personal, thoughtful, and visually strong.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
  {services.map((service) => (
    <article
      key={service.title}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_25px_80px_rgba(0,0,0,0.28)] transition duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.07]"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-110 group-hover:opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
      </div>

      <div className="p-8">
        <div className="mb-8 flex items-center justify-between">
          <span className="h-px flex-1 bg-white/15" />
          <span className="ml-4 h-3 w-3 rounded-full bg-white/70 transition duration-500 group-hover:scale-125 group-hover:bg-white" />
        </div>

        <h3 className="font-serif text-3xl tracking-[-0.04em] text-white">
          {service.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/60">
          {service.text}
        </p>
      </div>
    </article>
  ))}
</div>
          </div>
        </section>

        <section id="work" className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/40">
                Selected Work
              </p>
              <h2 className="mt-5 font-serif text-4xl tracking-[-0.05em] text-white sm:text-5xl">
                Visual stories with atmosphere, movement, and intention.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
                Whether it’s music, weddings, portraits, interviews, or travel, the goal is always the same: create something that feels honest and lasting.
              </p>
            </div>

            <div className="mt-14 grid auto-rows-[260px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {workItems.map((item, index) => (
                <article
                  key={item.title}
                  className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 ${
                    index === 0 || index === 3 ? 'lg:row-span-2' : ''
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/60">
                      {item.title}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 lg:grid-cols-2 lg:p-10">
            <div className="flex flex-col justify-between p-4 lg:p-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/40">
                  Weddings
                </p>
                <h2 className="mt-5 font-serif text-4xl tracking-[-0.05em] text-white sm:text-5xl">
                  Wedding stories have their own place here.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
                  Weddings are full of moments you cannot recreate. The nerves before the ceremony. The people gathered in one place. The feeling of the day moving faster than you expected. This space is dedicated to capturing those moments in a way that still feels real years later.
                </p>
              </div>

              <div className="mt-10">
                <a
                  href="/weddings"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-neutral-950 transition hover:bg-white/85"
                >
                  Explore Weddings
                </a>
              </div>
            </div>

            <div className="min-h-[28rem] overflow-hidden rounded-[2rem]">
              <img
                src={bridalPort}
                alt="Wedding photo and video work by Kairos Collective"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="about" className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/40">
                About
              </p>
              <h2 className="mt-6 font-serif text-4xl tracking-[-0.05em] text-white">
                The work begins with attention. The camera simply follows.
              </h2>
            </div>

            <div className="flex items-center">
              <div className="space-y-6 text-base leading-8 text-white/60 sm:text-lg">
                <p>
                  Kairos Collective is built around the belief that meaningful imagery comes from trust, attention, and the ability to notice what others might miss.
                </p>
                <p>
                  Whether creating portraits, filming an event, building a brand story, or documenting a wedding day, the process stays simple, collaborative, and deeply intentional.
                </p>
              </div>
            </div>
          </div>
        </section>

       <InquirySection />
      </main>
    </div>
  )
}

export default App