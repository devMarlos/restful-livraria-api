import mongoose from "mongoose";

// Criando conexão com o banco de dados
async function conectaNaDatabBase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
};

export default conectaNaDatabBase;

