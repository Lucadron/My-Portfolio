import mongoose from "mongoose";
import { MONGODB_URI } from "./env";
import { Console } from "console";

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("MongoDB bağlantısı başarılı.");
    } catch (error) {
        console.error("MongoDB bağlantı hatası: ", error);
        process.exit(1);
    }
} 