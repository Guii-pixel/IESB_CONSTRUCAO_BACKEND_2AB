import Turma from "../models/Turma.js";
import { turmaSchemaYup } from "../validations/turmaValidation.js";

class TurmaController {
  async index(req, res) {
    const itens = await Turma.find().populate('curso_id professor_id');
    res.status(200).json(itens);
  }
  async show(req, res) {
    const item = await Turma.findById(req.params.id).populate('curso_id professor_id');
    if (!item) return res.status(404).json({ erro: "Turma não encontrada" });
    res.status(200).json(item);
  }
  async store(req, res) {
    try {
      await turmaSchemaYup.validate(req.body);
      const item = await Turma.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
  async update(req, res) {
    try {
      await turmaSchemaYup.validate(req.body);
      const item = await Turma.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!item) return res.status(404).json({ erro: "Turma não encontrada" });
      res.status(200).json(item);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
  async delete(req, res) {
    const item = await Turma.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ erro: "Turma não encontrada" });
    res.status(200).json({ mensagem: "Turma removida" });
  }
}

export default new TurmaController();