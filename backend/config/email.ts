import { Resend } from "resend";
import * as Sentry from "@sentry/node";

interface EmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async ({
  name,
  email,
  subject,
  message,
}: EmailParams) => {
  // 1. Initialisation de Resend
  const resend = new Resend(process.env.RESEND_API_KEY);

  const content = `
    <div style="font-family: sans-serif; border: 1px solid #eee; padding: 20px;">
      <strong>Nom:</strong> ${name}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Sujet:</strong> ${subject}<br><br>
      <strong>Message:</strong><br>
      ${message.replace(/\n/g, "<br>")}
    </div>
  `;

  try {
    // 2. Envoi via Resend
    const { data, error } = await resend.emails.send({
      from: "hanider27@gmail.com",
      to: "hanider27@gmail.com",
      subject: `Nouveau message Portfolio — ${name}`,
      html: content,
    });

    if (error) {
      throw error;
    }

    return data;
  } catch (error: any) {
    console.error("Erreur lors de l'envoi via Resend:", error);
    Sentry.captureException(error);
    throw error;
  }
};

export default EmailParams;
