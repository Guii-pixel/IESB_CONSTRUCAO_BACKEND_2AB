import Usuario from "../models/Usuario.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { usuarioSchemaYup } from "../validations/usuarioValidation.js";

class UsuarioController {
  async index(req, res) {
    const itens = await Usuario.find().populate('aluno_id professor_id');
    res.status(200).json(itens);
  }
  async show(req, res) {
    const item = await Usuario.findById(req.params.id).populate('aluno_id professor_id');
    if (!item) return res.status(404).json({ erro: "Usuário não encontrado" });
    res.status(200).json(item);
  }
  async store(req, res) {
    try {
      await usuarioSchemaYup.validate(req.body);
      const hashed = await bcrypt.hash(req.body.senha, 10);
      const user = await Usuario.create({ ...req.body, senha: hashed });
      res.status(201).json({ id: user._id, email: user.email, role: user.role });
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
  async login(req, res) {
    try {
      const { email, senha } = req.body;
      const user = await Usuario.findOne({ email });
      if (!user) return res.status(404).json({ erro: "Usuário não encontrado" });
      const ok = await bcrypt.compare(senha, user.senha);
      if (!ok) return res.status(401).json({ erro: "Senha inválida" });
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '8h' });
      res.status(200).json({ token });
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
  async update(req, res) {
    try {
      const update = { ...req.body };
      if (update.senha) update.senha = await bcrypt.hash(update.senha, 10);
      const item = await Usuario.findByIdAndUpdate(req.params.id, update, { new: true });
      if (!item) return res.status(404).json({ erro: "Usuário não encontrado" });
      res.status(200).json(item);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
  async delete(req, res) {
    const item = await Usuario.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ erro: "Usuário não encontrado" });
    res.status(200).json({ mensagem: "Usuário removido" });
  }
}

export default new UsuarioController();