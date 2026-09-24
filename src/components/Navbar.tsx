import { useEffect, useState } from "react";

const links = [
  { href: "#expertise", label: "Expertise" },
  { href: "#work", label: "Case Studies" },
  { href: "#global", label: "Global Team" },
  { href: "#insights", label: "Insights" },
];

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-8 w-8 shrink-0 text-signal-400"
      >
        <path
          d="M16 2 4 8.5v15L16 30l12-6.5v-15L16 2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M16 2v28M4 8.5l24 15M28 8.5l-24 15"
          stroke="currentColor"
          strokeWidth="0.9"
          opacity="0.55"
        />
        <circle cx="16" cy="16" r="3.2" fill="currentColor" />
      </svg>
      <span className="leading-none">
        <span className="display block text-[1.05rem] tracking-[0.16em] text-white uppercase">
          Meridian
        </span>
        {!compact && (
          <span className="mt-1 block text-[0.58rem] tracking-[0.3em] text-mist-300/70 uppercase">
            Supply Chain Partners
          </span>
        )}
      </span>
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-ink-950/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="shell flex h-20 items-center justify-between gap-6"
      >
        <a href="#top" className="shrink-0" aria-label="Meridian home">
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-[0.82rem] font-medium tracking-wide text-mist-200/85 transition-colors hover:text-white"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-signal-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <span className="flex items-center gap-2 text-[0.72rem] tracking-[0.18em] text-mist-300/60 uppercase">
            <span className="relative flex h-1.5 w-1.5">
              <span className="ping-ring absolute inline-flex h-full w-full rounded-full bg-sea-400" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sea-400" />
            </span>
            24 Offices
          </span>
          <a
            href="#contact"
            className="rounded-sm bg-signal-400 px-5 py-2.5 text-[0.8rem] font-semibold tracking-wide text-ink-950 transition-colors hover:bg-signal-300"
          >
            Speak with a partner
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-white/15 lg:hidden"
        >
          <span className="sr-only">
            {open ? "Close menu" : "Open menu"}
          </span>
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 7h18M3 12h18M3 17h18" />
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-white/10 bg-ink-950/97 backdrop-blur-xl lg:hidden"
      >
        <ul className="shell flex flex-col py-4">
          {links.map((l) => (
            <li key={l.href} className="border-b border-white/5 last:border-0">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-lg text-mist-100"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-sm bg-signal-400 px-5 py-3.5 text-center font-semibold text-ink-950"
            >
              Speak with a partner
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
