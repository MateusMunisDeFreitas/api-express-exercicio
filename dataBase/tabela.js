    class Tabelas {
        init(conexao){
            this.conexao = conexao;
            this.criarTabelaEntrevistas();
        }// --allow-unrelated-histories

        criarTabelaEntrevistas(){
            const sql = `
            CREATE TABLE IF NOT EXISTS pessoas(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
             nome VARCHAR(100), idade VARCHAR(100));
            `;

            this.conexao.query(sql, (error) => {
                if(error){
                    console.log("Erro no servidor");
                    console.log(error);
                    return;
                }
                console.log("Tabela criada com sucesso!");
            });
        }
    }

export default new Tabelas;