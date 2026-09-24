import { Wordmark } from "./Navbar";

const columns = [
  {
    title: "Expertise",
    links: [
      "Network Design",
      "Risk & Resilience",
      "Digital Control Towers",
      "Decarbonisation",
      "Procurement Strategy",
    ],
  },
  {
    title: "Industries",
    links: [
      "Industrial Manufacturing",
      "Life Sciences",
      "Consumer & Retail",
      "Energy & Utilities",
      "Public Sector",
    ],
  },
  {
    title: "Firm",
    links: ["About Meridian", "Leadership", "Careers", "Newsroom", "Alumni"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Wordmark />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-mist-300/60">
              An independent global partnership advising on the design,
              resilience and decarbonisation of supply chains since 1995.
            </p>
            <div className="mt-7 flex gap-3">
              {["in", "X", "YT"].map((s) => (
                <a
                  key={s}
                  href="#top"
                  aria-label={`Meridian on ${s}`}
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/15 text-[0.7rem] text-mist-300/70 transition-colors hover:border-signal-400 hover:text-signal-400"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {columns.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h2 className="eyebrow text-signal-400">{c.title}</h2>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#top"
                      className="text-sm text-mist-300/65 transition-colors hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="hairline my-12" />

        <div className="flex flex-col gap-5 text-xs text-mist-300/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Meridian Supply Chain Partners LLP. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {["Privacy Notice", "Cookie Settings", "Modern Slavery Statement", "Accessibility"].map(
              (l) => (
                <li key={l}>
                  <a href="#top" className="transition-colors hover:text-white">
                    {l}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}
