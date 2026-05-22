// src/components/InquirySection.tsx

import { useForm, ValidationError } from "@formspree/react";

export default function InquirySection() {
  const [state, handleSubmit] = useForm("xojbdzzd");

  if (state.succeeded) {
    return (
      <section
        id="inquire"
        className="bg-[#f3efe9] px-6 py-24 text-black lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-white px-8 py-20 text-center shadow-[0_25px_80px_rgba(0,0,0,0.06)]">
          <p className="text-xs uppercase tracking-[0.35em] text-black/45">
            Inquiry Sent
          </p>

          <h2 className="mt-6 font-serif text-4xl tracking-[-0.05em] sm:text-5xl">
            Thank you for reaching out.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-black/65 sm:text-lg">
            Your message has been received and I will get back to you as soon
            as possible.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="inquire"
      className="bg-[#f3efe9] px-6 py-24 text-black lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-black/45">
            Inquire
          </p>

          <h2 className="mt-6 max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-6xl">
            Let’s talk about your story.
          </h2>

          <p className="mt-8 max-w-lg text-base leading-8 text-black/65 sm:text-lg">
            Whether you are planning a wedding, booking portraits, or creating
            something entirely your own, I would love to hear what you have in
            mind.
          </p>

          <div className="mt-10 space-y-5 text-sm text-black/55">
            <p>Most inquiries receive a response within 24–48 hours.</p>

            <p>
              Based in Texas and available for travel when the project feels
              like the right fit.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_25px_80px_rgba(0,0,0,0.06)] sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-3 block text-xs uppercase tracking-[0.25em] text-black/45">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-full border border-black/10 bg-[#f7f4ef] px-5 py-4 text-sm outline-none transition placeholder:text-black/30 focus:border-black/30"
                />
              </div>

              <div>
                <label className="mb-3 block text-xs uppercase tracking-[0.25em] text-black/45">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full rounded-full border border-black/10 bg-[#f7f4ef] px-5 py-4 text-sm outline-none transition placeholder:text-black/30 focus:border-black/30"
                />

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-3 block text-xs uppercase tracking-[0.25em] text-black/45">
                  Project Type
                </label>

                <select
                  name="projectType"
                  className="w-full rounded-full border border-black/10 bg-[#f7f4ef] px-5 py-4 text-sm outline-none transition focus:border-black/30"
                >
                  <option>Wedding</option>
                  <option>Portraits</option>
                  <option>Concert / Event</option>
                  <option>Brand / Commercial</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-3 block text-xs uppercase tracking-[0.25em] text-black/45">
                  Date
                </label>

                <input
                  type="text"
                  name="date"
                  placeholder="Event or session date"
                  className="w-full rounded-full border border-black/10 bg-[#f7f4ef] px-5 py-4 text-sm outline-none transition placeholder:text-black/30 focus:border-black/30"
                />
              </div>
            </div>

            <div>
              <label className="mb-3 block text-xs uppercase tracking-[0.25em] text-black/45">
                Tell us about it
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Share a little about your vision, your story, or what matters most to you."
                className="w-full rounded-[1.5rem] border border-black/10 bg-[#f7f4ef] px-5 py-5 text-sm leading-7 outline-none transition placeholder:text-black/30 focus:border-black/30"
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state.submitting ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}