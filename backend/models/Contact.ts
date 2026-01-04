import mongoose, { Schema, Document, Model } from 'mongoose';

/**
 * Interface représentant la structure d'un message de contact en base de données
 */
export interface IContact extends Document {
  name: string;
  email: string;
  subject?: string; // Optionnel si tu ne l'utilises pas systématiquement
  message: string;
  date: Date;
}

const contactSchema: Schema<IContact> = new Schema({
  name: { 
    type: String, 
    required: [true, "Le nom est requis"], 
    trim: true, 
    maxlength: 100 
  },
  email: { 
    type: String, 
    required: [true, "L'email est requis"], 
    lowercase: true,
    trim: true 
  },
  subject: {
    type: String,
    trim: true,
    maxlength: 150
  },
  message: { 
    type: String, 
    required: [true, "Le message est requis"], 
    maxlength: 1000 
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
});

/**
 * Création du modèle typé
 */
const Contact: Model<IContact> = mongoose.model<IContact>('Contact', contactSchema);

export default Contact;