import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
    title: string;
    description: string;
    githubUrl: string;
    imageUrl: string;
    tags: string[];
}

const ProjectSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        githubUrl: { type: String, required: true },
        imageUrl: { type: String, required: true },
        tags: { type: [String], required: false }
    },
    { timestamps: true }
);

export default mongoose.model<IProject>('Project', ProjectSchema);