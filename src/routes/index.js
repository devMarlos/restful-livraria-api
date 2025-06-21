import express from "express";
import livros from "../routes/livroRoutes.js";
import autores from "../routes/autorRoutes.js";

// // Middleware permite que sua aplicação consiga entender e processar
//  dados em formato JSON
const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Aplicação de Node.js"));

    app.use(express.json(), livros, autores);
};




export default routes