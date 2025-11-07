import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import DepartamentoController from "./controllers/DepartamentoController.js";
import CargoController from "./controllers/CargoController.js";
import FuncionarioController from "./controllers/FuncionarioController.js";
import ProjetoController from "./controllers/ProjetoController.js";
import TarefaController from "./controllers/TarefaController.js";

dotenv.config();
const app = express();
app.use(express.json());

// Conexão com MongoDB
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
)
.then(() => console.log("✅ MongoDB conectado com sucesso"))
.catch((err) => console.error("Erro ao conectar no MongoDB:", err));

// Rotas
app.use("/departamentos", DepartamentoController);
app.use("/cargos", CargoController);
app.use("/funcionarios", FuncionarioController);
app.use("/projetos", ProjetoController);
app.use("/tarefas", TarefaController);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));