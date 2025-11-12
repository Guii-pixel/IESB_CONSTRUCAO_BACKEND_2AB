import Matricula from "../models/Matricula.js";
import { matriculaSchemaYup } from "../validations/matriculaValidation.js";

class MatriculaController {
  async index(req, res) {
    const itens = await Matricula.find().populate('aluno_id turma_id');
    res.status(200).json(itens);
  }
  async show(req, res) {
    const item = await Matricula.findById(req.params.id).populate('aluno_id turma_id');
    if (!item) return res.status(404).json({ erro: "Matrícula não encontrada" });
    res.status(200).json(item);
  }
  async store(req, res) {
    try {
      await matriculaSchemaYup.validate(req.body);
      const item = await Matricula.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
  async update(req, res) {
    try {
      await matriculaSchemaYup.validate(req.body);
      const item = await Matricula.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!item) return res.status(404).json({ erro: "Matrícula não encontrada" });
      res.status(200).json(item);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
  async delete(req, res) {
    const item = await Matricula.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ erro: "Matrícula não encontrada" });
    res.status(200).json({ mensagem: "Matrícula removida" });
  }
}

export default new MatriculaController();