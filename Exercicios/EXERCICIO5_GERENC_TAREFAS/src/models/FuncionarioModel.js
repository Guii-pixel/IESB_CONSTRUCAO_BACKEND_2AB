import mongoose from "mongoose";

const FuncionarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cpf: { type: String, required: true },
  email: { type: String, required: true },
  telefone: { type: String, required: true },
  dataContratacao: { type: Date, required: true },
  dataNascimento: { type: Date, required: true },
  genero: { type: String, required: true },
  endereco: {
    cep: String,
    logradouro: String,
    numero: String,
    complemento: String,
    bairro: String,
    cidade: String,
    uf: String
  },
  cargo: { type: mongoose.Schema.Types.ObjectId, ref: "Cargo", required: true },
  departamento: { type: mongoose.Schema.Types.ObjectId, ref: "Departamento", required: true }
}, { timestamps: true });

export default mongoose.model("Funcionario", FuncionarioSchema);
