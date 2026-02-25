import express from "express";
import router from "./routes/index.js";
import conexao from "./dataBase/conexaoDB.js";
import tabela from "./dataBase/tabela.js";

const app = express();
const PORT = 3000;

tabela.init(conexao);
app.use(express.json());
router(app);

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});