import Reveal from "./Reveal";

const steps = [
  {
    k: "Diagnose",
    w: "Weeks 1–4",
    d: "Data room, flow mapping and a cost-to-serve baseline your CFO will sign off on.",
  },
  {
    k: "Design",
    w: "Weeks 5–12",
    d: "Optimisation modelling against service, cost, carbon and risk constraints simultaneously.",
  },
  {
    k: "Deploy",
    w: "Weeks 13–30",
    d: "Joint PMO, embedded consultants, and transition run in parallel with live operations.",
  },
  {
    k: "Defend",
    w: "Months 8–24",
    d: "Benefit tracking, capability transfer and annual stress testing of the new network.",
  },
];

export default function Approach() {
  return (
    <section className="border-b border-white/10 py-20 lg:py-28">
      <div className="shell">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="display max-w-xl text-3xl text-white sm:text-4xl">
            The Meridian method — four phases, one accountable team.
          </h2>
          <p className="max-w-sm text-sm text-mist-300/65">
            We staff senior-heavy and stay through implementation. 78% of our
            revenue comes from clients we have served for more than five years.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.k} as="li" delay={i * 80} className="bg-ink-950/85">
              <div className="group h-full p-8 transition-colors hover:bg-white/[0.04]">
                <div className="flex items-baseline justify-between">
                  <span className="display text-4xl text-white/15 transition-colors group-hover:text-signal-400/50">
                    0{i + 1}
                  </span>
                  <span className="text-[0.64rem] tracking-[0.2em] text-signal-400 uppercase">
                    {s.w}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-medium text-white">{s.k}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist-300/70">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
