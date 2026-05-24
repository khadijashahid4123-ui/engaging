import type { LucideIcon } from "lucide-react";
import {
  ConciergeBell,
  PartyPopper,
  HardHat,
  Music2,
  MapPin,
  Flame,
} from "lucide-react";

type Service = { icon: LucideIcon; title: string; body: string };

const services: Service[] = [
  {
    icon: ConciergeBell,
    title: "Concierge Security",
    body: "Welcoming front-desk presence that combines hospitality with vigilant access control, visitor screening, and proactive deterrence.",
  },
  {
    icon: PartyPopper,
    title: "Event Security",
    body: "Crowd management, VIP protection, and rapid response for private events, corporate gatherings, and large-scale public functions.",
  },
  {
    icon: HardHat,
    title: "Construction Security",
    body: "Round-the-clock site protection against theft, vandalism, and trespass — keeping equipment, materials, and crews safe.",
  },
  {
    icon: Music2,
    title: "Concert Security",
    body: "Trained teams handling stage perimeters, backstage access, audience flow, and incident response for concerts and tours.",
  },
  {
    icon: MapPin,
    title: "Site Security",
    body: "Mobile and stationary guards securing warehouses, parking lots, retail, and corporate campuses with documented patrols.",
  },
  {
    icon: Flame,
    title: "Fire Watch Security",
    body: "Certified fire-watch officers monitoring high-risk areas, hot work, and impaired sprinkler systems — keeping you code-compliant.",
  },
];

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          What You'll Get
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We Keep You Safe, So You Can Focus On What Matters.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, body }) => (
          <article
            key={title}
            className="rounded-2xl bg-primary p-7 text-primary-foreground shadow-md shadow-black/10 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="grid h-12 w-12 place-items-center rounded-full bg-primary-foreground/10">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}