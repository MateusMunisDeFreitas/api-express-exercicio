import conexao from "../dataBase/conexaoDB.js";

class EntrevistasModel{
    excutar(sql, parames = {}){
            return new Promise((resolve, reject)=>{
                conexao.query(sql, parames, (err, res)=>{
                    if(err) reject(err);
                    resolve(res);
                });
            });
    }
    get(){
        const sql = "SELECT * FROM pessoas;";
        return this.excutar(sql);
    }

    post(obj){
        const sql = "INSERT INTO pessoas SET ?";
        return this.excutar(sql, obj);
    }

    put(obj, nome){
        const sql = "UPDATE pessoas SET ? WHERE nome = ?"
        return this.excutar(sql, [obj, nome]);
    }

    delete(nome){
        const sql = "DELETE FROM pessoas WHERE nome = ?";
        return this.excutar(sql, nome);
    }
}

export default new EntrevistasModel();