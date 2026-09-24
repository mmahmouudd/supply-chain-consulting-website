import { useState } from "react";
import { caseStudies } from "../data";
import Reveal from "./Reveal";

export default function CaseStudies() {
  const [open, setOpen] = useState<string | null>(caseStudies[0].id);

  return (
    <section
      id="work"
      className="relative scroll-mt-24 border-b border-white/10 bg-ink-900/40 py-24 lg:py-32"
    >
      <div className="shell">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow flex items-center gap-3 text-signal-400">
              <span className="h-px w-10 bg-signal-400/70" />
              Selected Engagements
            </p>
            <h2 className="display mt-6 text-4xl text-white sm:text-5xl">
              Proof, measured in quarters — not slideware.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-mist-300/70">
            Client names withheld under NDA. Figures are audited post-implementation
            results verified 12 months after go-live.
          </p>
        </Reveal>

        <div className="mt-14 space-y-5">
          {caseStudies.map((cs, i) => {
            const isOpen = open === cs.id;
            return (
              <Reveal key={cs.id} as="article" delay={i * 90}>
                <div
                  className={`overflow-hidden rounded-sm border transition-colors duration-300 ${
                    isOpen
                      ? "border-signal-400/40 bg-ink-800/70"
                      : "border-white/10 bg-ink-900/50 hover:border-white/25"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`cs-panel-${cs.id}`}
                      onClick={() => setOpen(isOpen ? null : cs.id)}
                      className="flex w-full items-start gap-6 px-6 py-7 text-left sm:px-9"
                    >
                      <span className="hidden shrink-0 pt-1 text-[0.7rem] tracking-[0.25em] text-mist-300/40 sm:block">
                        0{i + 1}
                      </span>
                      <span className="flex-1">
                        <span className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.68rem] tracking-[0.2em] uppercase">
                          <span className="text-signal-400">{cs.sector}</span>
                          <span className="text-mist-300/45">{cs.region}</span>
                          <span className="text-mist-300/45">{cs.duration}</span>
                        </span>
                        <span className="display mt-3 block text-xl text-white sm:text-2xl">
                          {cs.title}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 border-signal-400 text-signal-400"
                            : "border-white/25 text-mist-200"
                        }`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`cs-panel-${cs.id}`}
                    hidden={!isOpen}
                    className="border-t border-white/10"
                  >
                    <div className="grid gap-0 lg:grid-cols-2">
                      <img
                        src={cs.image}
                        alt={`${cs.sector} engagement in ${cs.region}`}
                        loading="lazy"
                        className="h-56 w-full object-cover lg:h-full lg:min-h-[22rem]"
                      />
                      <div className="p-6 sm:p-9">
                        <h4 className="eyebrow text-mist-300/55">The Challenge</h4>
                        <p className="mt-3 text-sm leading-relaxed text-mist-200/85">
                          {cs.challenge}
                        </p>
                        <h4 className="eyebrow mt-7 text-mist-300/55">Our Approach</h4>
                        <p className="mt-3 text-sm leading-relaxed text-mist-200/85">
                          {cs.approach}
                        </p>

                        <div className="hairline my-8" />

                        <dl className="grid grid-cols-3 gap-4">
                          {cs.results.map((r) => (
                            <div key={r.label}>
                              <dt className="sr-only">{r.label}</dt>
                              <dd>
                                <span className="display block text-2xl text-sea-400 sm:text-3xl">
                                  {r.value}
                                </span>
                                <span className="mt-1.5 block text-[0.66rem] leading-snug tracking-wide text-mist-300/65 uppercase">
                                  {r.label}
                                </span>
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
