import { useEffect, useRef, useState } from "react";

const VIDEO_SRC =
  "https://videos.pexels.com/video-files/10452020/10452020-hd_3840_2160_30fps.mp4";
const POSTER =
  "https://images.pexels.com/videos/10391545/pexels-photo-10391545.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600";

const stats = [
  { value: "$140bn", label: "Client spend under advisement" },
  { value: "1,480", label: "Consultants worldwide" },
  { value: "24", label: "Offices across 6 continents" },
  { value: "31 yrs", label: "Advising global supply chains" },
];

function Counter({ value }: { value: string }) {
  return <span>{value}</span>;
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      videoRef.current?.pause();
      setPlaying(false);
    }
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pt-28"
    >
      {/* Video background placeholder */}
      <div className="absolute inset-0 -z-20 bg-ink-900">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={POSTER}
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/70"
      />
      <div aria-hidden="true" className="grid-bg absolute inset-0 -z-10 opacity-60" />

      <div className="shell w-full pb-10">
        <div className="max-w-4xl">
          <p className="eyebrow flex items-center gap-3 text-signal-400">
            <span className="h-px w-10 bg-signal-400/70" />
            Global Supply Chain & Logistics Advisory
          </p>

          <h1 className="display mt-7 text-[2.6rem] text-white sm:text-6xl lg:text-[4.6rem]">
            Certainty in a world
            <span className="block text-signal-300 italic">
              that keeps moving.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-mist-200/85 sm:text-lg">
            Meridian partners with the world's most demanding manufacturers,
            retailers and health systems to design supply chains that hold —
            through tariffs, typhoons, and everything the next decade will send.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-sm bg-signal-400 px-7 py-4 text-sm font-semibold tracking-wide text-ink-950 transition-colors hover:bg-signal-300"
            >
              Request a network diagnostic
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-3 rounded-sm border border-white/25 px-7 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:border-white/60 hover:bg-white/5"
            >
              Explore our results
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 backdrop-blur-md lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-950/70 px-5 py-6">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="display block text-3xl text-signal-300 sm:text-4xl">
                  <Counter value={s.value} />
                </span>
                <span className="mt-2 block text-[0.72rem] leading-snug tracking-wide text-mist-300/75 uppercase">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <button
        type="button"
        onClick={toggle}
        className="absolute right-5 bottom-6 z-10 hidden items-center gap-2 rounded-full border border-white/20 bg-ink-950/60 px-4 py-2 text-[0.7rem] tracking-[0.18em] text-mist-200 uppercase backdrop-blur transition-colors hover:bg-ink-950/90 md:inline-flex"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="currentColor"
          aria-hidden="true"
        >
          {playing ? (
            <path d="M8 5h3v14H8zM13 5h3v14h-3z" />
          ) : (
            <path d="M7 4l13 8-13 8z" />
          )}
        </svg>
        {playing ? "Pause background" : "Play background"}
      </button>
    </section>
  );
}
