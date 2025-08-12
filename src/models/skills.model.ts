import mongoose, { Schema, Document } from 'mongoose';

export interface ISkill extends Document {
  name: string;
  level: 'Başlangıç' | 'Orta' | 'İleri';
  order?: number; // sıralama için opsiyonel
}

const SkillSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    level: {
      type: String,
      enum: ['Başlangıç', 'Orta', 'İleri'],
      required: true
    },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model<ISkill>('Skill', SkillSchema);
