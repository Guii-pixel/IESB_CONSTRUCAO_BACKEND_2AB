import mongoose from "mongoose";

const alunoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  cpf: { type: String, required: true, unique: true },
  dataNascimento: { type: Date, required: true },
  curso_id: { type: mongoose.Schema.Types.ObjectId, ref: "Curso", required: true },
  turma_id: { type: mongoose.Schema.Types.ObjectId, ref: "Turma", required: true },
  endereco_id: { type: mongoose.Schema.Types.ObjectId, ref: "Endereco", required: true }
}, { timestamps: true });

export default mongoose.model("Aluno", alunoSchema);