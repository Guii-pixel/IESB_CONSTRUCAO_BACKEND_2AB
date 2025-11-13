import { Router } from "express";
import * as UsuarioController from "../controllers/UsuarioController.js";

const router = Router();

router.get("/", UsuarioController.index);
router.get("/:id", UsuarioController.show);
router.post("/", UsuarioController.store);
router.post("/login", UsuarioController.login);
router.put("/:id", UsuarioController.update);
router.delete("/:id", UsuarioController.delete); 

export default router;