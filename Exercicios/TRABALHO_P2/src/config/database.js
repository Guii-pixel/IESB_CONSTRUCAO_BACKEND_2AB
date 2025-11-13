import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

// Verificação básica
if (!DB_USER || !DB_PASS || !DB_HOST || !DB_NAME) {
  console.error("❌ Erro: Variáveis de ambiente não definidas corretamente no .env");
  process.exit(1);
}

// Monta a URI do MongoDB Atlas
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

// Função para conectar ao MongoDB
async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("✅ Conectado ao MongoDB Atlas!");
  } catch (error) {
    console.error("❌ Erro ao conectar ao MongoDB Atlas:", error.message);
    process.exit(1);
  }
}

export default connectDB;