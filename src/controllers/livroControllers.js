import mongoose from "mongoose";
import { autor } from "../models/Autor.js";
import { editora } from "../models/Editora.js";
import livro from "../models/Livro.js";

class LivroController {

    // Listando todos os livros através do método GET
    static async listarLivros (req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

    // Listando um livro pelo seu ID através do método GET
    static async listaLivroPorId (req, res) {
        try {
            const id = req.params.id;
            const listaLivro = await livro.findById(id);
            res.status(200).json(listaLivro);

        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    }

    // Cadastrando um livro com o método POST
    static async cadastrarLivro (req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const editoraEncontrada = await editora.findById(novoLivro.editora);
            const livroCompleto = {
                ...novoLivro, autor: { ...autorEncontrado._doc },
                ...editoraEncontrada, editora: {...editoraEncontrada._doc}
            }
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: "Criado com sucesso", livro: livroCriado });

        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`});
        }
    }

    // Atualizando um livro com o método PUT
    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Livro atualizado"});

        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na atualização`});
        }
    }

    // Deletando um livro com o método DELETE
    static async deletarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id, req.body);
            res.status(200).json({message: "Livro removido com sucesso"});

        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao deletar o livro`});
        }
    }

    // Query por parâmetros
    static async listarLivrosPorEditora(req, res) {
        const editora = req.query.editora.nome
        try {
            const livrosPorEditoras = await livro.find({ 'editora._nome': editora});
            res.status(200).json(livrosPorEditoras);

        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    }

};

export default LivroController;