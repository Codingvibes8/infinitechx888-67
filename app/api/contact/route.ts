import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/schemas/contact";

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
    await resend.emails.send({
      from: "Infinitechx <onboarding@resend.dev>",
      to: ["hello@infinitechx.com"],
      replyTo: email,
      subject: `New enquiry from ${name} — ${businessName}`,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business:</strong> ${businessName}</p>
        <p><strong>Website:</strong> ${websiteUrl || "Not provided"}</p>
        <p><strong>Looking to improve:</strong> ${improvement}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
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
