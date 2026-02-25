import { Router } from "express";
import entrevistasController from "../controller/entrevistasController.js";

const router = Router();

router.get("/home", async (req, res) => {
    try{
        const respota = await entrevistasController.get();
        res.status(200).json(respota);
    }
    catch(err){
        res.status(400);
        console.log(err); 
    }
});

router.post("/home", async (req, res) => {
    try{
        const respota = await entrevistasController.post(req.body);
        res.status(201).json(respota);
    }
    catch(err){
        res.status(400);
        console.log(err);
    }
});

router.put("/home", (req, res) => {
    res.send("Atualizado com sucesso");
});

router.delete("/home", (req, res) => {
    res.send("Deletado com sucesso");
});

export default router;