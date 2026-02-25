import entrevistasModel from "../models/entrevistasModel.js";

class EntrevistasController {
    get(){
        return entrevistasModel.get();
    }

    post(novaPessoa){
        return entrevistasModel.post(novaPessoa);
    }

    put(){

    }

    delete(){

    }
}

export default new EntrevistasController();