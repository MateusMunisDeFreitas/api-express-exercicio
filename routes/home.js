import { Router } from "express";
import entrevistasController from "../controller/entrevistasController.js";

const router = Router();

router.get("/home", entrevistasController.get);

router.post("/home", entrevistasController.post);

router.put("/home/:id", entrevistasController.put);

router.delete("/home/:id", entrevistasController.delete);

export default router;