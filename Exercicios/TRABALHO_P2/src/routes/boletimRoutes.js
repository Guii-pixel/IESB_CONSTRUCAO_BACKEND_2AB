import { Router } from "express";
import BoletimController from "../controllers/BoletimController.js";


const router = Router();
router.get("/", BoletimController.index);
router.get("/:id", BoletimController.show);
router.post("/", BoletimController.store);
router.put("/:id", BoletimController.update);
router.delete("/:id", BoletimController.delete);


export default router;