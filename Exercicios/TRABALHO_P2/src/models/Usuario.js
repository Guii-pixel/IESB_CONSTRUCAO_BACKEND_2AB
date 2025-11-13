import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  role: { type: String, enum: ["admin", "professor", "aluno"], default: "aluno" },
  aluno_id: { type: mongoose.Schema.Types.ObjectId, ref: "Aluno" },
  professor_id: { type: mongoose.Schema.Types.ObjectId, ref: "Professor" }
}, { timestamps: true });

export default mongoose.model("Usuario", usuarioSchema);