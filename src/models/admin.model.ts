import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

// 1. Tip tanımı (TypeScript için)
export interface IAdmin extends Document {
  email: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// 2. Mongoose şeması
const AdminSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// 3. Şifreyi kaydetmeden önce hash’le
AdminSchema.pre<IAdmin>('save', async function (next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// 4. Şifre karşılaştırma metodu
AdminSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return await bcrypt.compare(candidatePassword, this.password);
};

// 5. Model export
export default mongoose.model<IAdmin>('Admin', AdminSchema);
