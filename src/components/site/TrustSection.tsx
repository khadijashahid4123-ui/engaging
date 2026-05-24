import heroCity from "@/assets/hero-city.jpg";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export function TrustSection() {
  return (
    <section id="why" className="relative">
<div className="relative h-[420px] w-full overflow-hidden rounded-b-3xl lg:rounded-none">   
  <img
          src={heroCity}
          alt="City skyline with security presence"
          width={1280}
          height={768}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="mx-auto max-w-5xl px-4 -mt-72 relative z-10">
        <div className="rounded-2xl bg-background/95 backdrop-blur p-8 md:p-12 shadow-2xl shadow-black/15 border border-border">
          <h2 className="text-center font-display text-3xl md:text-4xl font-bold text-foreground">
            Why Clients Trust Us
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Trust is the foundation of every successful partnership. Our clients rely on us
                because we deliver consistent, professional security services with discretion,
                accountability, and a relentless focus on their safety and peace of mind.
              </p>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                Why Choose Us?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We combine seasoned, licensed personnel with proactive risk management,
                state-of-the-art communication, and 24/7 responsiveness — so you can focus on
                what matters most while we handle the rest.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:opacity-90"
              >
                Request Security Guard
              </a>
            </div>

            <div className="grid gap-6 content-center">
            <StatBadge
  value={25}
  suffix="+"
  label="Years Protecting Businesses"
/>

<StatBadge
  value={99}
  suffix="%"
  label="Client Satisfaction Rate"
  delay={0.2}
/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBadge({
  value,
  suffix,
  label,
  delay = 0,
}: {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, amount: 0.4 }}
      className="flex items-center gap-5"
    >
      <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full border-2 border-primary/30 bg-secondary shadow-lg shadow-primary/10">
        <span className="font-display text-2xl font-bold text-primary">
        <CountUp
  end={value}
  duration={2}
/>
          {suffix}
        </span>
      </div>

      <p className="text-base font-medium text-foreground">
        {label}
      </p>
    </motion.div>
  );
}