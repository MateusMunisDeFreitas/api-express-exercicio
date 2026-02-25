import { Router } from "express";
import entrevistasController from "../controller/entrevistasController.js";

const router = Router();

router.get("/home", (req, res) => {
    const reposta = entrevistasController.get();
    res.send("Pagina Home" + reposta);
});

router.post("/home", (req, res) => {
    res.send("Cadastro com sucesso");
    res.status(200);
    const dados  = req.body;
    console.log(dados);
});

router.put("/home", (req, res) => {
    res.send("Atualizado com sucesso");
});

router.delete("/home", (req, res) => {
    res.send("Deletado com sucesso");
});

export default router;