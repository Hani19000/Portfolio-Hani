import { Schema, model, Document } from 'mongoose';

/**
 * Structure de données pour les messages de contact
 */
export interface IContact extends Document {
  name: string;
  email: string;
  subject?: string;
  message: string;
  createdAt: Date;
}

const contactSchema = new Schema<IContact>({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  subject: { type: String, trim: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}, { 
  versionKey: false // Gain de performance : supprime le champ __v inutile
});

/**
 * Modèle compilé pour l'accès aux données
 */
export default model<IContact>('Contact', contactSchema);