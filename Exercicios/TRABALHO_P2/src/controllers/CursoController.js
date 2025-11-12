import Curso from "../models/Curso.js";
import { cursoSchemaYup } from "../validations/cursoValidation.js";

class CursoController {
  async index(req, res) {
    const cursos = await Curso.find();
    return res.status(200).json(cursos);
  }
  async show(req, res) {
    const curso = await Curso.findById(req.params.id);
    if (!curso) return res.status(404).json({ erro: "Curso não encontrado" });
    return res.status(200).json(curso);
  }
  async store(req, res) {
    try {
      await cursoSchemaYup.validate(req.body);
      const curso = await Curso.create(req.body);
      return res.status(201).json(curso);
    } catch (err) {
      return res.status(400).json({ erro: err.message });
    }
  }
  async update(req, res) {
    try {
      await cursoSchemaYup.validate(req.body);
      const curso = await Curso.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!curso) return res.status(404).json({ erro: "Curso não encontrado" });
      return res.status(200).json(curso);
    } catch (err) {
      return res.status(400).json({ erro: err.message });
    }
  }
  async delete(req, res) {
    const curso = await Curso.findByIdAndDelete(req.params.id);
    if (!curso) return res.status(404).json({ erro: "Curso não encontrado" });
    return res.status(200).json({ mensagem: "Curso removido" });
  }
}

export default new CursoController();