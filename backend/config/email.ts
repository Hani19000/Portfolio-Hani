import sgMail from '@sendgrid/mail';

const apiKey = process.env.SENDGRID_API_KEY;
apiKey && sgMail.setApiKey(apiKey);

interface EmailParams { name: string; email: string; message: string; subject: string; }

/**
 * Envoi d'email via SendGrid API
 */
export const sendEmail = async ({ name, email, message }: EmailParams) => {
  const { EMAIL_TO: to, EMAIL_USER: from } = process.env;
  
  return sgMail.send({
    to: to!,
    from: from!,
    replyTo: email,
    subject: `Portfolio - Nouveau message de ${name}`,
    html: `<p><strong>De:</strong> ${name}</p><p>${message.replace(/\n/g, '<br>')}</p>`
  });
};