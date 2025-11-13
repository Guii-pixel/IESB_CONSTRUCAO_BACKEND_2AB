import { Router } from "express";
import ProfessorController from "../controllers/ProfessorController.js";


const router = Router();
router.get("/", ProfessorController.index);
router.get("/:id", ProfessorController.show);
router.post("/", ProfessorController.store);
router.put("/:id", ProfessorController.update);
router.delete("/:id", ProfessorController.delete);


export default router;