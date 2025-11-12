import Aluno from "../models/Aluno.js";
import { alunoSchemaYup } from "../validations/alunoValidation.js";

class AlunoController {
  async index(req, res) {
    const itens = await Aluno.find().populate('curso_id turma_id endereco_id');
    res.status(200).json(itens);
  }
  async show(req, res) {
    const item = await Aluno.findById(req.params.id).populate('curso_id turma_id endereco_id');
    if (!item) return res.status(404).json({ erro: "Aluno não encontrado" });
    res.status(200).json(item);
  }
  async store(req, res) {
    try {
      await alunoSchemaYup.validate(req.body);
      const item = await Aluno.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
  async update(req, res) {
    try {
      await alunoSchemaYup.validate(req.body);
      const item = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!item) return res.status(404).json({ erro: "Aluno não encontrado" });
      res.status(200).json(item);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
  async delete(req, res) {
    const item = await Aluno.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ erro: "Aluno não encontrado" });
    res.status(200).json({ mensagem: "Aluno removido" });
  }
}

export default new AlunoController();