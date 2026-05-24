import { Facebook, Twitter, Instagram, Linkedin, Shield } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="border-b border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center">
          <div className="flex items-center gap-2 text-base font-semibold">
            <Shield className="h-5 w-5" />
            Engaging Security
          </div>
          <p className="text-xs uppercase tracking-[0.25em] opacity-80">
            Relax. You Are Secure
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <h4 className="font-display text-base font-semibold">About</h4>
          <p className="mt-3 text-sm leading-relaxed opacity-80">
            Engaging Security delivers professional protection for businesses and events with
            licensed officers, modern dispatch, and a relentless focus on safety.
          </p>
        </div>
        <div>
          <h4 className="font-display text-base font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm opacity-80">
            <li><a href="#top" className="hover:opacity-100">Home</a></li>
            <li><a href="#why" className="hover:opacity-100">Why Us</a></li>
            <li><a href="#faq" className="hover:opacity-100">FAQs</a></li>
            <li><a href="tel:020 8087 1952" className="hover:opacity-100">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-base font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm opacity-80">
            <li>Email:{" "}
      <a
        href="mailto:info@engagingsecurity.com"
        className="hover:text-white transition-colors"
      >
        info@engagingsecurity.com
      </a>
    </li>
    <li>
      Phone:{" "}
      <a
        href="tel:+442080871952"
        className="hover:text-white transition-colors"
      >
        020 8087 1952
      </a>
    </li>
            <li>Hours: 24 / 7 Dispatch</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs opacity-70 md:flex-row">
          <p>© {new Date().getFullYear()} Engaging Security. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}