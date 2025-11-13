import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

// routes
import cursoRoutes from "./routes/cursoRoutes.js";
import enderecoRoutes from "./routes/enderecoRoutes.js";
import professorRoutes from "./routes/professorRoutes.js";
import disciplinaRoutes from "./routes/disciplinaRoutes.js";
import turmaRoutes from "./routes/turmaRoutes.js";
import alunoRoutes from "./routes/alunoRoutes.js";
import matriculaRoutes from "./routes/matriculaRoutes.js";
import avaliacaoRoutes from "./routes/avaliacaoRoutes.js";
import boletimRoutes from "./routes/boletimRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

// connect
connectDB();

// mount routes
app.use('/cursos', cursoRoutes);
app.use('/enderecos', enderecoRoutes);
app.use('/professores', professorRoutes);
app.use('/disciplinas', disciplinaRoutes);
app.use('/turmas', turmaRoutes);
app.use('/alunos', alunoRoutes);
app.use('/matriculas', matriculaRoutes);
app.use('/avaliacoes', avaliacaoRoutes);
app.use('/boletins', boletimRoutes);
app.use('/usuarios', usuarioRoutes);

app.get('/', (req, res) => res.json({ ok: true, mensagem: 'SchoolManager API' }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
