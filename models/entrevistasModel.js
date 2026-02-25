import conexao from "../dataBase/conexaoDB.js";

class EntrevistasModel{
    get(){
        const sql = "SELECT * FROM pessoas;";
        return new Promise((resolve, reject) => {
            conexao.query(sql, {}, (err, res) => {
                if(err){
                    console.log("Erro na consulta");
                    reject(err);     
                }
                console.log("Ok 200");
                resolve(res);
            });
        });
    }

    post(addPessoa){
        const sql = "INSERT INTO pessoas SET ?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, addPessoa, (err, res) => {
                if(err){
                    console.log("Erro ao inserir no DB");
                    reject(err);
                }
                console.log("Adcionado com sucesso");
                resolve(res);
            });
        });
    }
}

export default new EntrevistasModel();