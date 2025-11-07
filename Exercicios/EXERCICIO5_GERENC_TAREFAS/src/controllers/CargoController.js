import express from "express";
import Cargo from "../models/CargoModel.js";
import { cargoCreateSchema, cargoUpdateSchema } from "../validators/CargoValidator.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    await cargoCreateSchema.validate(req.body, { abortEarly: false });
    const novo = await Cargo.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(400).json({ erros: err.errors });
  }
});

router.get("/", async (_, res) => {
  const lista = await Cargo.find();
  res.json(lista);
});

router.get("/:id", async (req, res) => {
  const item = await Cargo.findById(req.params.id);
  if (!item) return res.status(404).json({ erro: "Cargo não encontrado" });
  res.json(item);
});

router.put("/:id", async (req, res) => {
  try {
    await cargoUpdateSchema.validate(req.body, { abortEarly: false });
    const atualizado = await Cargo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(atualizado);
  } catch (err) {
    res.status(400).json({ erros: err.errors });
  }
});

router.delete("/:id", async (req, res) => {
  await Cargo.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

export default router;
