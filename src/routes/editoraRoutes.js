import express from "express";
import EditoraController from "../controllers/editoraCotntrollers.js";

const routes = express.Router();


routes.get("/editoras", EditoraController.listarEditoras);
routes.get("/editoras/:id", EditoraController.listarEditoraPorId);
routes.post("/editoras", EditoraController.criarEditora);
routes.put("/editoras/:id", EditoraController.atualizarEditora);
routes.delete("/editoras/:id", EditoraController.deletarEditora);

export default routes;