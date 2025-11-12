import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGODB_URI;

export default async function connectDB() {
  try {
    await mongoose.connect(uri, { 
      dbName: process.env.MONGODB_DBNAME || undefined,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
}