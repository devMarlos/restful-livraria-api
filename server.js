import "dotenv/config";
import app from "./src/app.js";

// Porta local
const PORT = 3000;


app.listen(PORT, () => {
    console.log("Servidor escutando");
});