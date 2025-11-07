import express from "express";
import Funcionario from "../models/FuncionarioModel.js";
import { funcionarioCreateSchema, funcionarioUpdateSchema } from "../validators/FuncionarioValidator.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    await funcionarioCreateSchema.validate(req.body, { abortEarly: false });
    const novo = await Funcionario.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(400).json({ erros: err.errors });
  }
});

router.get("/", async (_, res) => {
  const lista = await Funcionario.find().populate(["cargo", "departamento"]);
  res.json(lista);
});

router.get("/:id", async (req, res) => {
  const item = await Funcionario.findById(req.params.id).populate(["cargo", "departamento"]);
  if (!item) return res.status(404).json({ erro: "Funcionário não encontrado" });
  res.json(item);
});

router.put("/:id", async (req, res) => {
  try {
    await funcionarioUpdateSchema.validate(req.body, { abortEarly: false });
    const atualizado = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(atualizado);
  } catch (err) {
    res.status(400).json({ erros: err.errors });
  }
});

router.delete("/:id", async (req, res) => {
  await Funcionario.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

export default router;
