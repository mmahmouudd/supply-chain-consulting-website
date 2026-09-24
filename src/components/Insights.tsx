import { insights } from "../data";
import Reveal from "./Reveal";

export default function Insights() {
  return (
    <section
      id="insights"
      className="relative scroll-mt-24 border-b border-white/10 bg-ink-900/40 py-24 lg:py-32"
    >
      <div className="shell">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-signal-400">
            <span className="h-px w-10 bg-signal-400/70" />
            Meridian Research
          </p>
          <h2 className="display mt-6 max-w-2xl text-4xl text-white sm:text-5xl">
            What our analysts are watching.
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 lg:grid-cols-3">
          {insights.map((a, i) => (
            <Reveal key={a.title} as="li" delay={i * 80} className="bg-ink-950/80">
              <a
                href="#insights"
                className="group flex h-full flex-col justify-between p-8 transition-colors hover:bg-white/[0.04]"
              >
                <div>
                  <div className="flex items-center gap-3 text-[0.66rem] tracking-[0.2em] uppercase">
                    <span className="text-signal-400">{a.tag}</span>
                    <span className="text-mist-300/40">{a.date}</span>
                  </div>
                  <h3 className="display mt-5 text-xl leading-snug text-white group-hover:text-signal-300">
                    {a.title}
                  </h3>
                </div>
                <div className="mt-10 flex items-center justify-between text-xs text-mist-300/55">
                  {a.read}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-signal-400 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-16">
          <figure className="relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-ink-800/80 to-ink-900/50 p-9 sm:p-14">
            <span
              aria-hidden="true"
              className="display absolute top-2 left-6 text-[9rem] leading-none text-signal-400/10"
            >
              &ldquo;
            </span>
            <blockquote className="relative">
              <p className="display max-w-4xl text-xl leading-relaxed text-mist-100 sm:text-2xl">
                Meridian did not hand us a deck. They sat in our control room for
                five months and left behind a network that absorbed the worst
                freight market in twenty years without a single missed customer
                commitment.
              </p>
            </blockquote>
            <figcaption className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="font-medium text-white">Group COO</span>
              <span className="h-1 w-1 rotate-45 bg-signal-500" aria-hidden="true" />
              <span className="text-mist-300/65">
                Fortune 200 industrial manufacturer
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
