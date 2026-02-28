import entrevistasModel from "../models/entrevistasModel.js";

class EntrevistasController {
    async get(req, res){
        try{
            const response = await entrevistasModel.get();
            res.status(200).json(response);
        }catch(err){
            res.status(400);
            console.log(err);
        }
        
    }

    async post(req, res){
        const parames = req.body;
        try{
            const response = await entrevistasModel.post(req.body);
            res.status(201).json(response);
        }catch(err){
            console.log(err);
            res.status(404);
        }
    }

    async put(req, res){
        try{
            const response = await entrevistasModel.put(req.body, req.params.id);
            res.status(201).json(response);
        }catch(err){
            console.log(err);
            res.status(404);
        }
    }

    async delete(req, res){
        try{
            const response = await entrevistasModel.delete(req.params.id);
            res.status(200).json(response);
        }catch(err){
            console.log(err);
            res.status(404);
        }
    }
}

export default new EntrevistasController();