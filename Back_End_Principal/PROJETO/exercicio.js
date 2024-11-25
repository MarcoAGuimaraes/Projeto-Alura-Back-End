import express from "express";
import fs from 'fs';
const app = express();

const port = 3000;

const livroData = fs.readFileSync('livro.json');
const livro = JSON.parse(livroData);

app.get('/livro2', (req, res) => {
  res.json(livro);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});