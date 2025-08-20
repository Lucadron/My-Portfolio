import mongoose, { Schema, Document } from 'mongoose';

export interface ICv extends Document {
  cvUrl: string;
  downloadCount: number;
}

const CvSchema: Schema = new Schema(
  {
    cvUrl: { type: String, required: true }, // PDF dosyasının linki
    downloadCount: { type: Number, default: 0 } // kaç kez indirildi
  },
  { timestamps: true }
);

export default mongoose.model<ICv>('Cv', CvSchema);
