import dotenv from "dotenv";
dotenv.config();
import express from "express";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const app = express();
app.use(express.json());

interface Observacao {
  id: string;
  texto: string;
}
const { PORT } = process.env;
const base: Record<string, Observacao[]> = {};

app.post("/lembretes/:id/observacoes", (req, res) => {
  const idObs = uuidv4();
  const { texto } = req.body;
  const observacoes: Observacao[] = base[req.params.id] || [];
  const observacao: Observacao = { id: idObs, texto };
  observacoes.push(observacao);
  base[req.params.id] = observacoes;
  res.status(201).json(observacao);
});

app.get("/lembretes/:id/observacoes", (req, res) => {
  res.status(200).send(base[req.params.id] || []);
});

app.listen(PORT, () => console.log(`Observacoes. Porta ${PORT}`));
