import express from "express";

const app = express();
const PORT = 3000;


// Configuração do EJS
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));  
// Dados dos times
const times = [
  {
    id: 1,
    nome: "Grêmio",
    estadio: "Arena do Grêmio",
    cidade: "Porto Alegre"
  },
  {
    id: 2,
    nome: "Internacional",
    estadio: "Beira-Rio",
    cidade: "Porto Alegre"
  },
  {
    id: 3,
    nome: "Flamengo",
    estadio: "Maracanã",
    cidade: "Rio de Janeiro"
  }
];

// Página inicial
app.get("/", (req, res) => {
  res.render("index");
});

// Lista de times
app.get("/times", (req, res) => {
  res.render("times", { times });
});

// Detalhes de um time
app.get("/times/:id", (req, res) => {
  const id = Number(req.params.id);

  const time = times.find(t => t.id === id);

  if (!time) {
    return res.status(404).send("Time não encontrado");
  }

  res.render("detalhe", { time });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor executando em http://localhost:${PORT}`);
});