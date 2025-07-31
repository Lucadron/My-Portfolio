import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
    title: string;
    description: string;
    githubUrl: string;
    liveUrl: string;
    imageUrl: string;
    tags: string[];
    technologies: string[];
    category: "Backend" | "Frontend" | "FullStack" | "ML" | "UI/UX" | "Other";
    highlighted?: boolean;

}

const ProjectSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        githubUrl: { type: String, required: true },
        liveUrl: { type: String, required: true },
        imageUrl: { type: String, required: true },
        tags: { type: [String], required: false },
        technologies: { type: [String], required: true },
        category: {
            type: String,
            enum: ["Backend", "Frontend", "FullStack", "ML", "UI/UX", "Other"],
            required: true,
        },
        highlighted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default mongoose.model<IProject>('Project', ProjectSchema);