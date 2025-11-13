import { Router } from "express";
import CursoController from "../controllers/CursoController.js";

const router = Router();
router.get("/", CursoController.index);
router.get("/:id", CursoController.show);
router.post("/", CursoController.store);
router.put("/:id", CursoController.update);
router.delete("/:id", CursoController.delete);

export default router;