import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

const interests = [
  "Network Design",
  "Risk & Resilience",
  "Digital Control Tower",
  "Decarbonisation",
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [interest, setInterest] = useState(interests[0]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32"
    >
      <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-50" />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-500/10 blur-[140px]"
      />
      <div className="shell relative grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-signal-400">
            <span className="h-px w-10 bg-signal-400/70" />
            Start a conversation
          </p>
          <h2 className="display mt-6 text-4xl text-white sm:text-5xl">
            Tell us where it hurts.
          </h2>
          <p className="mt-5 max-w-lg text-mist-200/75">
            Every enquiry is read by a partner within one business day. Initial
            diagnostics are delivered in four weeks, at no cost, with no
            obligation to proceed.
          </p>

          <dl className="mt-12 space-y-7">
            {[
              { t: "Global enquiries", d: "partners@meridian-scp.com" },
              { t: "London · EMEA HQ", d: "18 Leadenhall Street, EC3V 1LR · +44 20 7946 0110" },
              { t: "Singapore · APAC HQ", d: "Marina Bay Financial Centre, T2 · +65 6808 4420" },
            ].map((c) => (
              <div key={c.t} className="border-l-2 border-signal-400/40 pl-5">
                <dt className="eyebrow text-mist-300/50">{c.t}</dt>
                <dd className="mt-2 text-mist-100">{c.d}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-sm border border-white/12 bg-ink-900/70 p-7 backdrop-blur sm:p-10">
            {sent ? (
              <div
                role="status"
                className="flex min-h-[26rem] flex-col items-center justify-center text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-sea-400/50 text-sea-400">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path d="M4 12.5l5 5L20 6.5" />
                  </svg>
                </span>
                <h3 className="display mt-6 text-2xl text-white">Enquiry received</h3>
                <p className="mt-3 max-w-sm text-sm text-mist-300/70">
                  Thank you. A Meridian partner in your region will be in touch
                  within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-6" noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field id="name" label="Full name" autoComplete="name" />
                  <Field id="company" label="Organisation" autoComplete="organization" />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field id="email" label="Work email" type="email" autoComplete="email" />
                  <Field id="role" label="Role / title" autoComplete="organization-title" />
                </div>

                <fieldset>
                  <legend className="eyebrow text-mist-300/60">
                    Area of interest
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {interests.map((i) => (
                      <label
                        key={i}
                        className={`cursor-pointer rounded-sm border px-3.5 py-2 text-xs transition-colors ${
                          interest === i
                            ? "border-signal-400 bg-signal-400/10 text-signal-300"
                            : "border-white/15 text-mist-300/70 hover:border-white/40"
                        }`}
                      >
                        <input
                          type="radio"
                          name="interest"
                          value={i}
                          checked={interest === i}
                          onChange={() => setInterest(i)}
                          className="sr-only"
                        />
                        {i}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label
                    htmlFor="message"
                    className="eyebrow block text-mist-300/60"
                  >
                    Briefly, the challenge
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2.5 w-full resize-none rounded-sm border border-white/15 bg-ink-950/60 px-4 py-3 text-sm text-mist-100 placeholder-mist-300/30 transition-colors focus:border-signal-400 focus:outline-none"
                    placeholder="e.g. Our EMEA fulfilment network can no longer support a 48-hour promise…"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-sm bg-signal-400 px-6 py-4 text-sm font-semibold tracking-wide text-ink-950 transition-colors hover:bg-signal-300"
                >
                  Submit enquiry
                </button>
                <p className="text-[0.7rem] leading-relaxed text-mist-300/45">
                  By submitting you agree to Meridian's privacy notice. We never
                  share client data with third parties.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow block text-mist-300/60">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        className="mt-2.5 w-full rounded-sm border border-white/15 bg-ink-950/60 px-4 py-3 text-sm text-mist-100 transition-colors focus:border-signal-400 focus:outline-none"
      />
    </div>
  );
}
