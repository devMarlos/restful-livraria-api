import { editora } from "../models/Editora.js";

class EditoraController {

    // Listando todos as editoras através do método GET
    static async listarEditoras (req, res) {
        try {
            const listarEditoras = await editora.find({});
            res.status(200).json(listarEditoras);
         } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`});
         }
    }

    // Listando as editoras por id através do método GET
    static async listarEditoraPorId (req, res) {
       try {
        const id = req.params.id;
        const listarEditoraPorId = await editora.findById(id);
        res.status(200).json(listarEditoraPorId);
       } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na requisição`});
       }
    }

    // Criando a editora com create
    static async criarEditora (req, res) {
        try {
            const novaEditora = await editora.create(req.body);
            res.status(201).json({message: "Criado com sucesso", editora: novaEditora});

        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao criar a editora`});
        }
    }

    // Atualizando editora com método PUT
    static async atualizarEditora (req, res) {
        try {
            const id = req.params.id;
            await editora.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Atualizado com sucesso"});

        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao atualizar editora`});
        }
    }

    // Deletando editora com método DELETE
    static async deletarEditora (req, res) {
        try {
            const id = req.params.id;
            await editora.findByIdAndDelete(id);
            res.status(200).json({message: "Deletado com sucesso"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao deletar o livro`})
        }
    }

}

export default EditoraController;