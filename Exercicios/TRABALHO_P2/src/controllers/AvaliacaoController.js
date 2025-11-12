import Avaliacao from "../models/Avaliacao.js";
import { avaliacaoSchemaYup } from "../validations/avaliacaoValidation.js";

class AvaliacaoController {
  async index(req, res) {
    const itens = await Avaliacao.find().populate('aluno_id disciplina_id');
    res.status(200).json(itens);
  }
  async show(req, res) {
    const item = await Avaliacao.findById(req.params.id).populate('aluno_id disciplina_id');
    if (!item) return res.status(404).json({ erro: "Avaliação não encontrada" });
    res.status(200).json(item);
  }
  async store(req, res) {
    try {
      await avaliacaoSchemaYup.validate(req.body);
      const item = await Avaliacao.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
  async update(req, res) {
    try {
      await avaliacaoSchemaYup.validate(req.body);
      const item = await Avaliacao.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!item) return res.status(404).json({ erro: "Avaliação não encontrada" });
      res.status(200).json(item);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
  async delete(req, res) {
    const item = await Avaliacao.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ erro: "Avaliação não encontrada" });
    res.status(200).json({ mensagem: "Avaliação removida" });
  }
}

export default new AvaliacaoController();