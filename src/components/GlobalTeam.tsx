import { useState } from "react";
import { offices, team } from "../data";
import Reveal from "./Reveal";

export default function GlobalTeam() {
  const [hover, setHover] = useState<string | null>("Singapore");

  return (
    <section
      id="global"
      className="relative scroll-mt-24 overflow-hidden border-b border-white/10 py-24 lg:py-32"
    >
      <div className="shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow flex items-center gap-3 text-signal-400">
            <span className="h-px w-10 bg-signal-400/70" />
            Our People
          </p>
          <h2 className="display mt-6 text-4xl text-white sm:text-5xl">
            Partners on the ground, in every timezone you ship through.
          </h2>
          <p className="mt-5 text-mist-200/75">
            Meridian is a single global partnership — not a franchise of
            affiliates. The partner you meet in the pitch is the partner standing
            on your dock at 04:00.
          </p>
        </Reveal>

        {/* Map */}
        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-sm border border-white/10 bg-ink-900/60">
            <div className="relative aspect-[2/1] w-full">
              <img
                src="/images/world-map.png"
                alt="World map showing Meridian office locations"
                className="absolute inset-0 h-full w-full object-cover opacity-45"
                loading="lazy"
              />
              <div
                aria-hidden="true"
                className="grid-bg absolute inset-0 opacity-40"
              />
              {offices.map((o) => (
                <button
                  key={o.city}
                  type="button"
                  onMouseEnter={() => setHover(o.city)}
                  onFocus={() => setHover(o.city)}
                  onMouseLeave={() => setHover(null)}
                  onBlur={() => setHover(null)}
                  style={{ top: `${o.top}%`, left: `${o.left}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  aria-label={`${o.city}, ${o.region}, ${o.people} consultants`}
                >
                  <span className="relative flex h-3 w-3 items-center justify-center">
                    <span className="ping-ring absolute h-2 w-2 rounded-full bg-signal-400" />
                    <span
                      className={`relative h-2 w-2 rounded-full transition-all ${
                        hover === o.city
                          ? "scale-150 bg-signal-300 ring-2 ring-signal-300/40"
                          : "bg-signal-400"
                      }`}
                    />
                  </span>
                  {hover === o.city && (
                    <span className="pointer-events-none absolute bottom-5 left-1/2 z-20 w-40 -translate-x-1/2 rounded-sm border border-white/15 bg-ink-950/95 px-3 py-2 text-left shadow-xl backdrop-blur">
                      <span className="block text-xs font-semibold text-white">
                        {o.city}
                      </span>
                      <span className="mt-0.5 block text-[0.62rem] tracking-[0.15em] text-signal-400 uppercase">
                        {o.region}
                      </span>
                      <span className="mt-1 block text-[0.68rem] text-mist-300/70">
                        {o.people} consultants
                      </span>
                    </span>
                  )}
                </button>
              ))}
            </div>

            <ul className="grid grid-cols-2 gap-px border-t border-white/10 bg-white/10 sm:grid-cols-4">
              {["24 offices", "63 nationalities", "31 languages", "6 continents"].map(
                (f) => (
                  <li
                    key={f}
                    className="bg-ink-950/80 px-4 py-4 text-center text-[0.72rem] tracking-[0.18em] text-mist-300/70 uppercase"
                  >
                    {f}
                  </li>
                ),
              )}
            </ul>
          </div>
        </Reveal>

        {/* Leadership */}
        <div className="mt-20">
          <div className="flex items-end justify-between gap-6">
            <h3 className="display text-2xl text-white sm:text-3xl">
              Partner leadership
            </h3>
            <a
              href="#contact"
              className="group hidden items-center gap-2 text-sm text-signal-400 sm:inline-flex"
            >
              View all 62 partners
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} as="li" delay={i * 70}>
                <article className="group relative h-full overflow-hidden rounded-sm border border-white/10 bg-ink-900/50 transition-colors hover:border-signal-400/40">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={m.image}
                      alt={`Portrait of ${m.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-transparent"
                    />
                    <span className="absolute top-4 left-4 rounded-sm bg-ink-950/80 px-2.5 py-1 text-[0.62rem] tracking-[0.2em] text-signal-300 uppercase backdrop-blur">
                      {m.city} · {m.tz}
                    </span>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-medium text-white">{m.name}</h4>
                    <p className="mt-1 text-sm text-signal-400/90">{m.role}</p>
                    <p className="mt-3 text-[0.78rem] text-mist-300/65">{m.focus}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
