import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We provide a full suite of security services including concierge, event, construction, concert, site, and fire-watch security — staffed by licensed and continuously trained officers.",
  },
  {
    q: "Are your officers licensed and insured?",
    a: "Yes. Every officer holds the required state license, passes a background check, and our company maintains comprehensive general liability and workers' comp coverage.",
  },
  {
    q: "How quickly can you deploy security to my site?",
    a: "For most short-notice requests we can have an officer on-site within 24 hours. Emergency deployments are available — contact us directly to coordinate.",
  },
  {
    q: "Do you provide armed or unarmed guards?",
    a: "Both. We'll assess your risk profile, venue, and local regulations to recommend the right posture — and provide proper credentials for either option.",
  },
  {
    q: "Can I scale coverage up or down?",
    a: "Absolutely. Our service agreements are designed to flex with your needs — add officers for an event week or scale back during quieter periods.",
  },
  {
    q: "What areas do you serve?",
    a: "We operate across metropolitan and suburban regions. Get in touch with your address and we'll confirm coverage and response times.",
  },
  {
    q: "How do I request a quote?",
    a: "Fill out the contact form below with a few details about your site or event, and our team will follow up within one business day with a tailored proposal.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-center font-display text-3xl md:text-4xl font-bold text-foreground">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border">
            <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}