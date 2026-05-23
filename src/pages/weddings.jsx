import weddingImg from '../assets/featured-wedding.jpg'
import heroImg from '../assets/wedding-photo-blur.jpeg'
import PricingSection from '../components/PricingSection.jsx'
import TMphoto from '../assets/TM.jpeg'
import weddingVideo from '../assets/weddingVideo.mp4'
import watkinsVideo from '../assets/watkinsVideo.mp4'
import BWedding from '../assets/BWedding.jpeg'
import InquirySection from '../components/InquirySection.js'

import { useState } from "react";
import { Menu, X } from "lucide-react";

function Weddings() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f7f1ea] text-neutral-950">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#f7f1ea]/80 backdrop-blur-xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
    <a
      href="/"
      className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-900"
    >
      Kairos Collective
    </a>

    {/* Desktop Navigation */}
    <nav className="hidden items-center gap-2 rounded-full border border-black/10 bg-white/50 px-3 py-2 text-sm text-neutral-700 shadow-sm md:flex">
      <a
        href="/"
        className="rounded-full px-4 py-2 transition hover:bg-neutral-950 hover:text-white"
      >
        Home Page
      </a>

      <a
        href="#inquire"
        className="rounded-full px-4 py-2 transition hover:bg-neutral-950 hover:text-white"
      >
        Inquire
      </a>
    </nav>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/50 text-neutral-900 md:hidden"
    >
      {menuOpen ? <X size={18} /> : <Menu size={18} />}
    </button>
  </div>

  {/* Mobile Navigation */}
  {menuOpen && (
    <div className="border-t border-black/5 bg-[#f7f1ea]/95 px-6 py-6 backdrop-blur-xl md:hidden">
      <nav className="flex flex-col gap-3 text-neutral-900">
        <a
          href="/"
          onClick={() => setMenuOpen(false)}
          className="rounded-full px-4 py-3 transition hover:bg-neutral-950 hover:text-white"
        >
          Home Page
        </a>
        <a
          href="#inquire"
          onClick={() => setMenuOpen(false)}
          className="rounded-full px-4 py-3 transition hover:bg-neutral-950 hover:text-white"
        >
          Inquire
        </a>
      </nav>
    </div>
  )}
</header>

      <main>
        {/* HERO */}
        <section className="relative min-h-screen pt-28">
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt="Wedding moment"
              className="h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f7f1ea] via-[#f7f1ea]/80 to-transparent" />
          </div>

          <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-6xl items-center px-6 lg:px-10">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                Weddings
              </p>

              <h1 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Wedding films that feel like memories.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700">
                Your wedding day moves quickly. The goal is to capture it in a way that brings you back to the feeling of it years later.
              </p>

              <div className="mt-10">
                <a
                  href="#inquire"
                  className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  Capture your day
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FILM SECTION */}
<section className="px-6 py-24 lg:px-10 lg:py-32">
  <div className="mx-auto max-w-6xl">
    <div className="text-center">
      <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
        Featured Films
      </p>

      <h2 className="mt-5 font-serif text-4xl tracking-[-0.05em] sm:text-5xl">
        A glimpse into wedding stories
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-neutral-600">
        Short cinematic teaser films crafted to preserve the emotion, atmosphere, and moments that make each wedding unique.
      </p>
    </div>

    <div className="mt-16 space-y-20">

      {/* FILM 1 */}
      <div>
        <div className="mb-5 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Kairos Collective Original
            </p>

            <h3 className="mt-2 font-serif text-3xl">
              Wedding Teaser Film
            </h3>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.18)]">
          <video
            className="aspect-video w-full object-cover"
            src={weddingVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
      </div>

      {/* FILM 2 */}
      <div>
        <div className="mb-5 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Collaborative Project
            </p>

            <h3 className="mt-2 font-serif text-3xl">
              Collaborative Wedding Teaser Film
            </h3>
          </div>

          <div className="rounded-full border border-neutral-200 px-4 py-2 text-xs text-neutral-600">
            Shot in collaboration with Commancheria Productions • Edited by Commancheria Productions
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.18)]">
          <video
            className="aspect-video w-full object-cover"
            src={watkinsVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
      </div>

    </div>

    <p className="mt-10 text-center text-xs text-neutral-500">
      Preview films are optimized for seamless web playback.
    </p>
  </div>
</section>

        {/* EXPERIENCE */}
        <section className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                The Experience
              </p>
              <h2 className="mt-5 font-serif text-4xl tracking-[-0.05em]">
                A calm presence throughout the day.
              </h2>
            </div>

            <div className="space-y-8 text-lg text-neutral-700">
              <p>
                Most couples are not used to being in front of a camera all day, and they should not have to be. The approach stays simple and unobtrusive so you can stay present with the people around you.
              </p>
              <p>
                Some moments need guidance. Most just need space to happen naturally.
              </p>
            </div>
          </div>
        </section>
        {/* PRICING */}
        <PricingSection />

        {/* GALLERY */}
        <section className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                Gallery
              </p>
              <h2 className="mt-5 font-serif text-4xl tracking-[-0.05em] sm:text-5xl">
                Moments from past weddings
              </h2>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[weddingImg, TMphoto, BWedding].map((img, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-[2rem]"
                >
                  <img
                    src={img}
                    alt="Wedding"
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <InquirySection />
      </main>
    </div>
  )
}

export default Weddings