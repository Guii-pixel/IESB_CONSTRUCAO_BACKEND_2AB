import mongoose from "mongoose";

const cursoSchema = new mongoose.Schema({
  nome: { type: String, required: true, unique: true },
  descricao: { type: String },
  duracaoSemestres: { type: Number, default: 4 }
}, { timestamps: true });

export default mongoose.model("Curso", cursoSchema);