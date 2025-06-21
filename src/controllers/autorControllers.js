import { autor } from "../models/Autor.js";


class AutorController {

    // Listando todos os autores através do método GET
    static async listarAutores (req, res) {
        try{
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (erro){
            res.status(500).json({message : `${erro.message} - Falha na requisição`});
        }
    }

    // Listando autor pelo seu id através do método GET
    static async listaAutoresID (req, res) {
        try {
            const id = req.params.id;
            const listaAutorId = await autor.findById(id);
            res.status(200).json(listaAutorId);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na requisição`});
        }
    }

    // Cadastrando um autor com o método POST
    static async cadastrarAutor (req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(200).json({message: "Criado com sucesso", autor: novoAutor})

        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao criar o produto`});
        }
    }

    // Atualizando um autor com o método PUT
    static async atualizarAutor (req, res) {
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: `Autor atualizado`})

        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao atualizar`});
        }
    }

    // Deletando o autor com o método DELETE
    static async deletarAutor(req, res) {
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id, req.body);
            res.status(200).json({message: "Cadastro do autor deletado"})

        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao deletar`})
        }
    }
}


export default AutorController;