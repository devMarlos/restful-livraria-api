import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";
import { editoraSchema } from "./Editora.js";

const livroSchema = new mongoose.Schema({
    // Primary Key com Mongoose
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: true},
    editora: editoraSchema,
    preco: {type: Number, required: true},
    paginas: {type: Number, required: true},
    autor: autorSchema

}, {versionKey: false});


const livro = mongoose.model("livros", livroSchema);

export default livro;
