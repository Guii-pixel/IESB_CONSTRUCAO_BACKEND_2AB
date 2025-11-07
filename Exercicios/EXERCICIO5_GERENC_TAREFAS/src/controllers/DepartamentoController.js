import express from "express";
import Departamento from "../models/DepartamentoModel.js";
import { departamentoCreateSchema, departamentoUpdateSchema } from "../validators/DepartamentoValidator.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    await departamentoCreateSchema.validate(req.body, { abortEarly: false });
    const novo = await Departamento.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(400).json({ erros: err.errors });
  }
});

router.get("/", async (req, res) => {
  const lista = await Departamento.find();
  res.json(lista);
});

router.get("/:id", async (req, res) => {
  const item = await Departamento.findById(req.params.id);
  if (!item) return res.status(404).json({ erro: "Departamento não encontrado" });
  res.json(item);
});

router.put("/:id", async (req, res) => {
  try {
    await departamentoUpdateSchema.validate(req.body, { abortEarly: false });
    const atualizado = await Departamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(atualizado);
  } catch (err) {
    res.status(400).json({ erros: err.errors });
  }
});

router.delete("/:id", async (req, res) => {
  await Departamento.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

export default router;
