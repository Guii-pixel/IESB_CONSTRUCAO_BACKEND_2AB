import Usuario from "../models/Usuario.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const index = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar usuários", error });
  }
};

export const show = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) return res.status(404).json({ message: "Usuário não encontrado" });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuário", error });
  }
};

export const store = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const senhaHash = await bcrypt.hash(senha, 10);
    const novoUsuario = await Usuario.create({ nome, email, senha: senhaHash });
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(400).json({ message: "Erro ao criar usuário", error });
  }
};

export const login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ email });
    if (!usuario) return res.status(404).json({ message: "Usuário não encontrado" });

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    if (!senhaCorreta) return res.status(401).json({ message: "Senha incorreta" });

    const token = jwt.sign(
      { id: usuario._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION }
    )
    res.json({ message: "Login realizado com sucesso", token });
  } catch (error) {
    res.status(500).json({ message: "Erro ao realizar login", error });
  }
};

export const update = async (req, res) => {
  try {
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!usuarioAtualizado) return res.status(404).json({ message: "Usuário não encontrado" });
    res.json(usuarioAtualizado);
  } catch (error) {
    res.status(400).json({ message: "Erro ao atualizar usuário", error });
  }
};


const deletar = async (req, res) => {
  try {
    const usuarioRemovido = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuarioRemovido) return res.status(404).json({ message: "Usuário não encontrado" });
    res.json({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar usuário", error });
  }
};


export { deletar as delete };
