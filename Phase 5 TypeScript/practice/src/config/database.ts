import mongoose from "mongoose";
import { env } from "./env.js";


export async function connectDB(){
    try {
        const conn = await mongoose.connect(env.mongoUri);
        console.log(`Mongodb Connected ${conn.connection.host}`);
    } catch (err) {
        console.error("Database connection failed", err);
        process.exit(1);
    }
}