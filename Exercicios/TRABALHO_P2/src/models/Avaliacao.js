import mongoose from "mongoose";

const avaliacaoSchema = new mongoose.Schema({
  aluno_id: { type: mongoose.Schema.Types.ObjectId, ref: "Aluno", required: true },
  disciplina_id: { type: mongoose.Schema.Types.ObjectId, ref: "Disciplina", required: true },
  nota: { type: Number, required: true, min: 0, max: 10 },
  presenca: { type: Number, required: true, min: 0, max: 100 }
}, { timestamps: true });

export default mongoose.model("Avaliacao", avaliacaoSchema);