import Disciplina from "../models/Disciplina.js";
import { disciplinaSchemaYup } from "../validations/disciplinaValidation.js";

class DisciplinaController {
  async index(req, res) {
    const itens = await Disciplina.find().populate('curso_id professor_id');
    res.status(200).json(itens);
  }
  async show(req, res) {
    const item = await Disciplina.findById(req.params.id).populate('curso_id professor_id');
    if (!item) return res.status(404).json({ erro: "Disciplina não encontrada" });
    res.status(200).json(item);
  }
  async store(req, res) {
    try {
      await disciplinaSchemaYup.validate(req.body);
      const item = await Disciplina.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
  async update(req, res) {
    try {
      await disciplinaSchemaYup.validate(req.body);
      const item = await Disciplina.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!item) return res.status(404).json({ erro: "Disciplina não encontrada" });
      res.status(200).json(item);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
  async delete(req, res) {
    const item = await Disciplina.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ erro: "Disciplina não encontrada" });
    res.status(200).json({ mensagem: "Disciplina removida" });
  }
}

export default new DisciplinaController();