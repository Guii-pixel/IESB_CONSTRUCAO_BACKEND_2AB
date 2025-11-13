import { Router } from "express";
import TurmaController from "../controllers/TurmaController.js";


const router = Router();
router.get("/", TurmaController.index);
router.get("/:id", TurmaController.show);
router.post("/", TurmaController.store);
router.put("/:id", TurmaController.update);
router.delete("/:id", TurmaController.delete);


export default router;