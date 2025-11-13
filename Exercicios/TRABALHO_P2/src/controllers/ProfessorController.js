import Professor from "../models/Professor.js";
import { professorSchemaYup } from "../validations/professorValidation.js";

class ProfessorController {
  async index(req, res) {
    const itens = await Professor.find().populate('endereco_id');
    res.status(200).json(itens);
  }
  async show(req, res) {
    const item = await Professor.findById(req.params.id).populate('endereco_id');
    if (!item) return res.status(404).json({ erro: "Professor não encontrado" });
    res.status(200).json(item);
  }
  async store(req, res) {
    try {
      await professorSchemaYup.validate(req.body);
      const item = await Professor.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
  async update(req, res) {
    try {
      await professorSchemaYup.validate(req.body);
      const item = await Professor.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!item) return res.status(404).json({ erro: "Professor não encontrado" });
      res.status(200).json(item);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
  async delete(req, res) {
    const item = await Professor.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ erro: "Professor não encontrado" });
    res.status(200).json({ mensagem: "Professor removido" });
  }
}

export default new ProfessorController();