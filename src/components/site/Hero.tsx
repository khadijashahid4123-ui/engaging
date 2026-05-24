import logo from "@/assets/logo-shield.png";
import { Shield, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {

  const headlines = [
    "Engaging Security",
    "Concierge Security",
    "Event Security",
    "Construction Security",
    "Concert Security",
    "Site Security",
    "Fire Watch Security",
  ];

  const [currentHeadline, setCurrentHeadline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden text-hero-foreground"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-7xl px-6 pt-22 pb-24 text-center">
        <img
          src={logo}
          alt="Engaging Security shield logo"
          width={88}
          height={88}
          className="mx-auto h-20 w-20 opacity-90"
        />
        <p className="mt-6 text-sm font-medium uppercase tracking-[0.25em] text-hero-foreground/80">
          Welcome To
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight transition-all duration-500">
  {headlines[currentHeadline]}
</h1>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href="#contact"
            className="inline-flex min-w-[260px] items-center justify-center rounded-full bg-hero-foreground px-7 py-3 text-sm font-semibold text-hero shadow-lg shadow-black/20 transition hover:scale-[1.02]"
          >
            Request Security Guard
          </a>
          <a
              href="tel:+442080871952"
              className="inline-flex items-center gap-1.5 rounded-full border border-hero-foreground/40 px-4 py-2 text-xs font-semibold text-hero-foreground hover:bg-hero-foreground/10"
            >
              <Phone className="h-3.5 w-3.5" />
              020 8087 1952
            </a>
        </div>
      </div>
    </section>
  );
}