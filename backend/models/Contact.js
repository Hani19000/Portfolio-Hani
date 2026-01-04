import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  email: { type: String, required: true, lowercase: true },
  message: { type: String, required: true, maxlength: 1000 },
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Contact', schema);