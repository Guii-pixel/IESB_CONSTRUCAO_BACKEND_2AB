import mongoose from "mongoose";

const disciplinaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cargaHoraria: { type: Number, required: true },
  curso_id: { type: mongoose.Schema.Types.ObjectId, ref: "Curso", required: true },
  professor_id: { type: mongoose.Schema.Types.ObjectId, ref: "Professor", required: true }
}, { timestamps: true });

export default mongoose.model("Disciplina", disciplinaSchema);