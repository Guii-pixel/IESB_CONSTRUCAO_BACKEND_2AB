import express from "express";
import Tarefa from "../models/TarefaModel.js";
import { tarefaCreateSchema, tarefaUpdateSchema } from "../validators/TarefaValidator.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    await tarefaCreateSchema.validate(req.body, { abortEarly: false });
    const novo = await Tarefa.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(400).json({ erros: err.errors });
  }
});

router.get("/", async (_, res) => {
  const lista = await Tarefa.find().populate(["responsavel", "projeto"]);
  res.json(lista);
});

router.get("/:id", async (req, res) => {
  const item = await Tarefa.findById(req.params.id).populate(["responsavel", "projeto"]);
  if (!item) return res.status(404).json({ erro: "Tarefa não encontrada" });
  res.json(item);
});

router.put("/:id", async (req, res) => {
  try {
    await tarefaUpdateSchema.validate(req.body, { abortEarly: false });
    const atualizado = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(atualizado);
  } catch (err) {
    res.status(400).json({ erros: err.errors });
  }
});

router.delete("/:id", async (req, res) => {
  await Tarefa.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

export default router;
