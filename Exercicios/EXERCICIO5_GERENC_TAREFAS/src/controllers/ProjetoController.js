import express from "express";
import Projeto from "../models/ProjetoModel.js";
import { projetoCreateSchema, projetoUpdateSchema } from "../validators/ProjetoValidator.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    await projetoCreateSchema.validate(req.body, { abortEarly: false });
    const novo = await Projeto.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(400).json({ erros: err.errors });
  }
});

router.get("/", async (_, res) => {
  const lista = await Projeto.find();
  res.json(lista);
});

router.get("/:id", async (req, res) => {
  const item = await Projeto.findById(req.params.id);
  if (!item) return res.status(404).json({ erro: "Projeto não encontrado" });
  res.json(item);
});

router.put("/:id", async (req, res) => {
  try {
    await projetoUpdateSchema.validate(req.body, { abortEarly: false });
    const atualizado = await Projeto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(atualizado);
  } catch (err) {
    res.status(400).json({ erros: err.errors });
  }
});

router.delete("/:id", async (req, res) => {
  await Projeto.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

export default router;
