import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGODB_URI;

export default async function connectDB() {
  try {
    await mongoose.connect(uri, { 
      dbName: process.env.MONGODB_DBNAME || undefined,
    });
    console.log("Conectado ao MongoDB Atlas com sucesso!");
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB Atlas:", err.message);
    process.exit(1);
  }
}