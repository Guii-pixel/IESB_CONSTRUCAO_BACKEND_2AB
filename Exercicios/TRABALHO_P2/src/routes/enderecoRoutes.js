import { Router } from "express";
import EnderecoController from "../controllers/EnderecoController.js";


const router = Router();
router.get("/", EnderecoController.index);
router.get("/:id", EnderecoController.show);
router.post("/", EnderecoController.store);
router.put("/:id", EnderecoController.update);
router.delete("/:id", EnderecoController.delete);


export default router;