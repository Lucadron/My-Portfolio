import mongoose, { Schema, Document } from 'mongoose';

export interface IHobby extends Document {
    title: string;
    description: string;
    icon: string;
    order?: number;
}

const HobbySchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        icon: { type: String, required: true },
        order: { type: Number, default: 0 }
    },
    { timestamps: true }
);

export default mongoose.model<IHobby>('Hobby', HobbySchema);
