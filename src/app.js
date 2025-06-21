import express from "express";
import conectaNaDatabBase from "./config/dbConnect.js";
import routes from "./routes/index.js"


// Instanciando conexão com o banco de dados
const conexao = await conectaNaDatabBase();
conexao.on("error",(erro) => {
    console.error("erro de conexão", erro);
});
conexao.once("open", () => {
    console.log("Conexão DB bem sucedida!");
})

// Iniciando o express
const app = express();
routes(app);


export default app;