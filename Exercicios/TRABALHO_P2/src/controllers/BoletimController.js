import Boletim from "../models/Boletim.js";
import { boletimSchemaYup } from "../validations/boletimValidation.js";

class BoletimController {
  async index(req, res) {
    const itens = await Boletim.find().populate('aluno_id curso_id');
    res.status(200).json(itens);
  }
  async show(req, res) {
    const item = await Boletim.findById(req.params.id).populate('aluno_id curso_id');
    if (!item) return res.status(404).json({ erro: "Boletim não encontrado" });
    res.status(200).json(item);
  }
  async store(req, res) {
    try {
      await boletimSchemaYup.validate(req.body);
      const item = await Boletim.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
  async update(req, res) {
    try {
      await boletimSchemaYup.validate(req.body);
      const item = await Boletim.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!item) return res.status(404).json({ erro: "Boletim não encontrado" });
      res.status(200).json(item);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
  async delete(req, res) {
    const item = await Boletim.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ erro: "Boletim não encontrado" });
    res.status(200).json({ mensagem: "Boletim removido" });
  }
}

export default new BoletimController();