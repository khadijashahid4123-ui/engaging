import areaMap from "@/assets/area-map.jpg";
import monitor from "@/assets/security-monitor.jpg";
import guards from "@/assets/guards-three.jpg";
import walkie from "@/assets/walkie-talkie.jpg";
import { motion } from "framer-motion";

type Feature = { title: string; body: string; img: string; alt: string; reverse?: boolean };

const features: Feature[] = [
  {
    title: "Area Under Service",
    body: "From dense metropolitan corridors to suburban industrial parks, our trained officers operate across a wide service area — ready to deploy where and when you need us, with consistent standards everywhere we serve.",
    img: areaMap,
    alt: "Map showing service coverage area",
  },
  {
    title: "Short-Term Site Security Solutions",
    body: "Need protection for a temporary site, pop-up venue, or transitional project? Our short-term packages spin up quickly with fully licensed personnel, clear post orders, and the same accountability as our long-term contracts.",
    img: monitor,
    alt: "Security officer monitoring CCTV control room",
    reverse: true,
  },
  {
    title: "Uncompromising Commitment To Security",
    body: "Safety is not a checkbox — it's our culture. Every officer is trained in de-escalation, emergency response, and situational awareness, and every assignment is backed by supervisors who care about outcomes, not just hours.",
    img: guards,
    alt: "Three uniformed security guards walking on duty",
  },
  {
    title: "Uninterrupted Communication",
    body: "Real-time radio, encrypted dispatch, and direct lines to leadership mean nothing falls through the cracks. You are kept informed, and our officers are never alone on post.",
    img: walkie,
    alt: "Security officer holding a two-way radio",
  },
];

export function AlternatingFeatures() {
  return (
    <section className="bg-background pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-6">
        {features.map((f) => (
          <article
            key={f.title}
            className={`grid overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-md shadow-black/10 md:grid-cols-2 ${
              f.reverse ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <motion.div
  initial={{
    opacity: 0,
    x: f.reverse ? 60 : -60,
    scale: 0.96,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
    scale: 1,
  }}
  transition={{ duration: 0.9 }}
  viewport={{ once: true, amount: 0.3 }}
  className="aspect-[5/4] md:aspect-auto overflow-hidden"
>
  <img
    src={f.img}
    alt={f.alt}
    loading="lazy"
    width={900}
    height={700}
    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
  />
</motion.div>
<motion.div
  initial={{
    opacity: 0,
    x: f.reverse ? -60 : 60,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  transition={{ duration: 0.9, delay: 0.2 }}
  viewport={{ once: true, amount: 0.3 }}
  className="flex flex-col justify-center p-8 md:p-10"
>
              <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight">
                {f.title}
              </h3>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-primary-foreground/85">
                {f.body}
              </p>
              </motion.div>
          </article>
        ))}
      </div>
    </section>
  );
}