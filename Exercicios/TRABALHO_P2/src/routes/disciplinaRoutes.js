import { Router } from "express";
import DisciplinaController from "../controllers/DisciplinaController.js";


const router = Router();
router.get("/", DisciplinaController.index);
router.get("/:id", DisciplinaController.show);
router.post("/", DisciplinaController.store);
router.put("/:id", DisciplinaController.update);
router.delete("/:id", DisciplinaController.delete);


export default router;
