import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { z } from "zod";

const RECIPIENT = "khadijashahid4123@gmail.com";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1).max(2000),
});

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return new Response(JSON.stringify({ error: "Invalid JSON" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const parsed = ContactSchema.safeParse(body);
        if (!parsed.success) {
          return new Response(
            JSON.stringify({ error: "Validation failed", details: parsed.error.flatten() }),
            { status: 400, headers: { "Content-Type": "application/json" } },
          );
        }

        const { name, email, subject, message } = parsed.data;

        // Persist submission
        const { data: insertedRow, error: dbError } = await supabaseAdmin
          .from("contact_submissions")
          .insert({ name, email, subject, message })
          .select("id")
          .single();

        if (dbError) {
          console.error("contact insert error", dbError);
          return new Response(JSON.stringify({ error: "Failed to save message" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }

        // NOTE: Email delivery to ${RECIPIENT} is wired up after the email sender
        // domain is configured. Until then, submissions are safely stored in the
        // database and accessible from the Backend dashboard.
        void RECIPIENT;
        void escapeHtml;

        return new Response(JSON.stringify({ ok: true, id: insertedRow?.id }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}