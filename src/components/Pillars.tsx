import { useState } from "react";
import { pillars } from "../data";
import Reveal from "./Reveal";

export default function Pillars() {
  const [active, setActive] = useState(0);
  const current = pillars[active];

  return (
    <section
      id="expertise"
      className="relative scroll-mt-24 border-b border-white/10 py-24 lg:py-32"
    >
      <div className="shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow flex items-center gap-3 text-signal-400">
            <span className="h-px w-10 bg-signal-400/70" />
            Service Pillars
          </p>
          <h2 className="display mt-6 text-4xl text-white sm:text-5xl">
            Four disciplines. One operating spine.
          </h2>
          <p className="mt-5 text-mist-200/75">
            Every Meridian engagement draws on the same integrated toolkit —
            deployed in whatever combination your board, your margin and your
            calendar require.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
          {/* Tab list */}
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label="Service pillars"
            className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {pillars.map((p, i) => {
              const isActive = i === active;
              return (
                <button
                  key={p.id}
                  id={`tab-${p.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`panel-${p.id}`}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                      e.preventDefault();
                      setActive((active + 1) % pillars.length);
                    }
                    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                      e.preventDefault();
                      setActive((active - 1 + pillars.length) % pillars.length);
                    }
                  }}
                  className={`group relative min-w-[260px] shrink-0 border-l-2 px-5 py-5 text-left transition-all duration-300 lg:min-w-0 ${
                    isActive
                      ? "border-signal-400 bg-white/[0.06]"
                      : "border-white/10 hover:border-white/35 hover:bg-white/[0.03]"
                  }`}
                >
                  <span
                    className={`block text-[0.7rem] tracking-[0.25em] ${
                      isActive ? "text-signal-400" : "text-mist-300/45"
                    }`}
                  >
                    {p.number}
                  </span>
                  <span
                    className={`mt-2 block text-lg font-medium ${
                      isActive ? "text-white" : "text-mist-200/80"
                    }`}
                  >
                    {p.title}
                  </span>
                  <span className="mt-1 block text-sm text-mist-300/55">
                    {p.tagline}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div
            key={current.id}
            id={`panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${current.id}`}
            tabIndex={0}
            className="reveal is-visible relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-ink-800/80 to-ink-900/60 p-8 sm:p-11"
          >
            <span
              aria-hidden="true"
              className="display pointer-events-none absolute -top-6 right-4 text-[8rem] leading-none text-white/[0.04] sm:text-[11rem]"
            >
              {current.number}
            </span>

            <h3 className="display relative text-3xl text-white sm:text-4xl">
              {current.title}
            </h3>
            <p className="relative mt-5 max-w-2xl leading-relaxed text-mist-200/80">
              {current.description}
            </p>

            <div className="hairline my-9" />

            <div className="grid gap-9 sm:grid-cols-[1fr_auto] sm:items-end">
              <ul className="space-y-3.5">
                {current.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-mist-200/85">
                    <svg
                      viewBox="0 0 20 20"
                      className="mt-0.5 h-4 w-4 shrink-0 text-sea-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path d="M4 10.5l4 4 8-9" />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>

              <div className="rounded-sm border border-signal-400/30 bg-signal-400/[0.07] px-6 py-5 text-center">
                <span className="display block text-4xl text-signal-300">
                  {current.metric.value}
                </span>
                <span className="mt-2 block max-w-[10rem] text-[0.7rem] leading-snug tracking-wide text-mist-300/70 uppercase">
                  {current.metric.label}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
