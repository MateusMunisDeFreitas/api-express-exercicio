import { Router } from "express";

const router = Router();

router.get("/home", (req, res) => {
    res.send("Pagina Home");
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