import { Router } from "express";
import AvaliacaoController from "../controllers/AvaliacaoController.js";


const router = Router();
router.get("/", AvaliacaoController.index);
router.get("/:id", AvaliacaoController.show);
router.post("/", AvaliacaoController.store);
router.put("/:id", AvaliacaoController.update);
router.delete("/:id", AvaliacaoController.delete);


export default router;