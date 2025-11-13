import mongoose from "mongoose";

const boletimSchema = new mongoose.Schema({
  aluno_id: { type: mongoose.Schema.Types.ObjectId, ref: "Aluno", required: true },
  curso_id: { type: mongoose.Schema.Types.ObjectId, ref: "Curso", required: true },
  mediaFinal: { type: Number, required: true, min: 0, max: 10 }
}, { timestamps: true });

export default mongoose.model("Boletim", boletimSchema);