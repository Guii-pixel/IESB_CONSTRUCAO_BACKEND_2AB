import mongoose from "mongoose";

const matriculaSchema = new mongoose.Schema({
  aluno_id: { type: mongoose.Schema.Types.ObjectId, ref: "Aluno", required: true },
  turma_id: { type: mongoose.Schema.Types.ObjectId, ref: "Turma", required: true },
  dataMatricula: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model("Matricula", matriculaSchema);