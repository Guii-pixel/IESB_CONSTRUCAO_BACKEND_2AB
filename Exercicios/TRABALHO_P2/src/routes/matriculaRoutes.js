import { Router } from "express";
import MatriculaController from "../controllers/MatriculaController.js";


const router = Router();
router.get("/", MatriculaController.index);
router.get("/:id", MatriculaController.show);
router.post("/", MatriculaController.store);
router.put("/:id", MatriculaController.update);
router.delete("/:id", MatriculaController.delete);


export default router;
