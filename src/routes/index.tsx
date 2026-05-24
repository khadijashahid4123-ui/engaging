import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { TrustSection } from "@/components/site/TrustSection";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { AlternatingFeatures } from "@/components/site/AlternatingFeatures";
import { FAQSection } from "@/components/site/FAQSection";
import { ContactSection } from "@/components/site/ContactSection";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Engaging Security — Reliable Security Services for Businesses & Events" },
      {
        name: "description",
        content:
          "Licensed concierge, event, construction, concert, site, and fire-watch security. 25+ years protecting businesses. Request a guard today.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <TrustSection />
      <ServicesGrid />
      <AlternatingFeatures />
      <FAQSection />
      <ContactSection />
      <SiteFooter />
      <Toaster richColors position="top-center" />
    </main>
  );
}
