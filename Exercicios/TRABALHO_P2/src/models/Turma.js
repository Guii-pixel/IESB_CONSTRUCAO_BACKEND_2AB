import mongoose from "mongoose";

const turmaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  ano: { type: Number, required: true },
  curso_id: { type: mongoose.Schema.Types.ObjectId, ref: "Curso", required: true },
  professor_id: { type: mongoose.Schema.Types.ObjectId, ref: "Professor", required: true }
}, { timestamps: true });

export default mongoose.model("Turma", turmaSchema);