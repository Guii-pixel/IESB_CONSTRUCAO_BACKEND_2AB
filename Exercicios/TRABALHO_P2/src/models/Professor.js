import mongoose from "mongoose";

const professorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefone: { type: String },
  endereco_id: { type: mongoose.Schema.Types.ObjectId, ref: "Endereco", required: true }
}, { timestamps: true });

export default mongoose.model("Professor", professorSchema);