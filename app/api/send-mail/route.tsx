import { ISendEmailRequestBody } from "@/app/helpers/data";
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
export async function sendEmail(body: ISendEmailRequestBody) {
  // Get the HTML content directly without extra whitespace
  const emailBody = body.emailContent.trim();

  // Validate that we have HTML content
  if (!emailBody || emailBody.length === 0) {
    console.error("Empty HTML content received");
    throw new Error("Email content is required");
  }

  // Log first 200 chars for debugging (remove in production)
  console.log("Email HTML preview:", emailBody.substring(0, 200));

  // Check if SMTP credentials are configured
  const smtpEmail = process.env.SMTP_EMAIL?.trim();
  const smtpPassword = process.env.SMTP_PASSWORD?.trim();

  // Create nodemailer transporter
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = parseInt(process.env.SMTP_PORT || "587");
  const smtpSecure = process.env.SMTP_SECURE === "true";

  console.log("SMTP Config:", {
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    user: smtpEmail,
    passwordSet: !!smtpPassword,
  });

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure, // true for 465, false for other ports
    auth: {
      user: smtpEmail,
      pass: smtpPassword,
    },
  });

  // Send email using nodemailer
  // Nodemailer automatically sets Content-Type when both text and html are provided
  const mailOptions = {
    from: smtpEmail,
    to: body.toEmail,
    subject: "Oferta - ZOOM Production",
    text: "Ju lutem shikoni email-in në format HTML për të parë ofertën tuaj.",
    html: emailBody,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return info;
  } catch (error: any) {
    console.error("Nodemailer email error:", error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
}
export async function POST(req: NextRequest) {
  const body: ISendEmailRequestBody = await req.json();

  try {
    await sendEmail(body);
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (emailError: any) {
    return new Response(JSON.stringify({ error: emailError.message }), {
      status: 500,
    });
  }
}
