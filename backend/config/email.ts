import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

interface EmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Envoie un email via SendGrid avec un template structuré
 */
export const sendEmail = async ({ name, email, subject, message }: EmailParams) => {
  const from = process.env.EMAIL_USER!;
  const to = process.env.EMAIL_TO!;

  const content = `
    <strong>Nom:</strong> ${name}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Sujet:</strong> ${subject}<br><br>
    <strong>Message:</strong><br>
    ${message.replace(/\n/g, '<br>')}
  `;

  return sgMail.send({
    to,
    from,
    subject: `[Portfolio] ${subject}`,
    text: `Nom: ${name}\nEmail: ${email}\nSujet: ${subject}\n\nMessage:\n${message}`,
    html: `<div style="font-family: sans-serif; border: 1px solid #eee; padding: 20px;">${content}</div>`,
  });
};