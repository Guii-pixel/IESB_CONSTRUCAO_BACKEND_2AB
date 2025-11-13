import mongoose from "mongoose";

const enderecoSchema = new mongoose.Schema({
  rua: { type: String, required: true },
  numero: { type: String, required: true },
  complemento: { type: String },
  bairro: { type: String },
  cidade: { type: String, required: true },
  estado: { type: String, required: true },
  cep: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("Endereco", enderecoSchema);