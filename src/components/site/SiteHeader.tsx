import { Shield, Phone, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function SiteHeader() {

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-hero/40 backdrop-blur-lg shadow-2xl border-b border-white/5"
        : "bg-hero/95 shadow-none border-none"
    }`}
  >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2 text-hero-foreground">
            <Shield className="h-5 w-5" />
            <div className="leading-tight">
              <div className="font-display text-base font-bold tracking-wide">Engaging Security</div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-80">Relax. You Are Secure</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-hero-foreground/90">
            <a href="#top" className="hover:text-hero-foreground">Home</a>
            <a href="#why" className="hover:text-hero-foreground">Why Choose Us</a>
            <a href="#faq" className="hover:text-hero-foreground">FAQs</a>
            <a href="#contact" className="hover:text-hero-foreground">Contact Us</a>
          </nav>

          <button
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  className="lg:hidden text-hero-foreground"
>
  {mobileMenuOpen ? (
    <X className="h-6 w-6" />
  ) : (
    <Menu className="h-6 w-6" />
  )}
</button>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-hero-foreground/95 px-4 py-2 text-xs font-semibold text-hero hover:bg-hero-foreground"
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

        {mobileMenuOpen && (
  <div className="lg:hidden mt-4 rounded-2xl bg-hero/80 backdrop-blur-lg border border-white/10 p-5">
    <nav className="flex flex-col gap-4 text-sm font-medium text-hero-foreground">

      <a href="#top">Home</a>

      <a href="#why">Why Choose Us</a>

      <a href="#faq">FAQs</a>

      <a href="#contact">Contact Us</a>

      <a
        href="#contact"
        className="mt-3 inline-flex items-center justify-center rounded-full bg-hero-foreground px-5 py-3 text-sm font-semibold text-hero"
      >
        Request Security Guard
      </a>

      <a
        href="tel:+442080871952"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm"
      >
        <Phone className="h-4 w-4" />
        020 8087 1952
      </a>

    </nav>
  </div>
)}

      </div>
    </header>
  );
}