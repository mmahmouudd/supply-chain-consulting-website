const clients = [
  "NORDHAVN GROUP",
  "AXIOM MOTORS",
  "KIRIN & ROWE",
  "HELIOS PHARMA",
  "TERRAMAR FOODS",
  "VOLTA INDUSTRIE",
  "PACIFIC LINEN CO.",
  "STRATOS AEROSPACE",
];

export default function Ticker() {
  const row = [...clients, ...clients];
  return (
    <section
      aria-label="Selected clients"
      className="relative border-y border-white/10 bg-ink-900/60 py-7"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
      <div className="ticker-track">
        {row.map((c, i) => (
          <span
            key={`${c}-${i}`}
            className="flex shrink-0 items-center gap-10 px-10 text-[0.78rem] tracking-[0.28em] text-mist-300/50 uppercase"
          >
            {c}
            <span aria-hidden="true" className="h-1 w-1 rotate-45 bg-signal-500/60" />
          </span>
        ))}
      </div>
    </section>
  );
}
