import * as sgMail from '@sendgrid/mail'; // Utilisez l'import étoile
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.SENDGRID_API_KEY;
if (apiKey) {
  sgMail.setApiKey(apiKey);
}

interface EmailParams {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async ({ name, email, message }: EmailParams): Promise<void> => {
  const msg = {
    to: process.env.EMAIL_TO as string,
    from: process.env.EMAIL_USER as string, 
    replyTo: email,
    subject: `Portfolio - Nouveau message de ${name}`,
    html: `<h3>Message de ${name}</h3><p>${message}</p>`,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    throw error;
  }
};