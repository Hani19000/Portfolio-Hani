import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async (): Promise<void> => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error('❌ Erreur : MONGODB_URI n\'est pas défini dans le fichier .env');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log('✅ MongoDB Connecté');
  } catch (err) {
    console.error('❌ Erreur de connexion DB:', err instanceof Error ? err.message : err);
    process.exit(1);
  }
};