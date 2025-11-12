import Endereco from "../models/Endereco.js";
import { enderecoSchemaYup } from "../validations/enderecoValidation.js";

class EnderecoController {
  async index(req, res) {
    const itens = await Endereco.find();
    res.status(200).json(itens);
  }
  async show(req, res) {
    const item = await Endereco.findById(req.params.id);
    if (!item) return res.status(404).json({ erro: "Endereço não encontrado" });
    res.status(200).json(item);
  }
  async store(req, res) {
    try {
      await enderecoSchemaYup.validate(req.body);
      const item = await Endereco.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
  async update(req, res) {
    try {
      await enderecoSchemaYup.validate(req.body);
      const item = await Endereco.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!item) return res.status(404).json({ erro: "Endereço não encontrado" });
      res.status(200).json(item);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
  async delete(req, res) {
    const item = await Endereco.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ erro: "Endereço não encontrado" });
    res.status(200).json({ mensagem: "Endereço removido" });
  }
}

export default new EnderecoController();