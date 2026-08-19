import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/schemas/contact";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY environment variable is not set.");
  }
  return new Resend(apiKey);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, businessName, websiteUrl, improvement, budget, message } =
      parsed.data;

    const resend = getResendClient();
    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      businessName: escapeHtml(businessName),
      websiteUrl: escapeHtml(websiteUrl || "Not provided"),
      improvement: escapeHtml(improvement),
      budget: escapeHtml(budget),
      message: escapeHtml(message).replace(/\n/g, "<br />"),
    };
    await resend.emails.send({
      from: "Scriptorcode <onboarding@resend.dev>",
      to: ["hello@scriptorcode.com"],
      replyTo: email,
      subject: `New enquiry from ${name} — ${businessName}`,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Business:</strong> ${safe.businessName}</p>
        <p><strong>Website:</strong> ${safe.websiteUrl}</p>
        <p><strong>Looking to improve:</strong> ${safe.improvement}</p>
        <p><strong>Budget:</strong> ${safe.budget}</p>
        <p><strong>Message:</strong></p>
        <p>${safe.message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
