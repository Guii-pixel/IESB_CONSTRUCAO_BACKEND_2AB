import mongoose from "mongoose";

const ProjetoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  dataInicio: { type: Date, required: true },
  dataFim: { type: Date, required: true }
}, { timestamps: true });

export default mongoose.model("Projeto", ProjetoSchema);
