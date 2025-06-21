import mongoose, { mongo } from "mongoose";

const editoraSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, require: true}
} {versionKey: false});


const editora = mongoose.model("editora", editoraSchema);
export default editora;