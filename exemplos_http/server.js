const express = require("express");
const app = express();
app.use(express.json());

let id = 3;
const alunos = [
  {
    id: 1,
    nome: "João",
    fone: "11223344",
    email: " joao@email.com",
  },
  {
    id: 2,
    nome: "Maria",
    fone: "77884499",
    email: "maria@email.com",
  },
];

//Post /alunos
app.post("/alunos", function (req, res) {
  const { nome, fone, email } = req.body;
  const aluno = {
    id: id++,
    nome,
    fone,
    email: email,
  };
  alunos.push(aluno);
  res.status(201).json(aluno);
});

//GET /alunos
app.get("/alunos", (req, res) => {
  Promise.resolve(alunos).then((alunos) => res.status(200).json(alunos));
});

app.get("/hello-express", (req, res) => {
  console.log(red.body);
  console.log("Sim, funcionou");
  res.send("Hello from Express");
});

app.listen(3000, () => console.log("Começou"));
