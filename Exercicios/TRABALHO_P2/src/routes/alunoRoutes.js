import { Router } from "express";
import AlunoController from "../controllers/AlunoController.js";


const router = Router();
router.get("/", AlunoController.index);
router.get("/:id", AlunoController.show);
router.post("/", AlunoController.store);
router.put("/:id", AlunoController.update);
router.delete("/:id", AlunoController.delete);


export default router;