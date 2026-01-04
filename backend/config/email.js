import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async ({ name, email, message }) => {
  await sgMail.send({
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_USER,
    replyTo: email,
    subject: `Portfolio - ${name}`,
    html: `
      <h2>Message de ${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <div style="padding:15px;background:#f4f4f4;margin:20px 0">
        ${message}
      </div>
    `
  });
};