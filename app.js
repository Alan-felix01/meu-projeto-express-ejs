const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id:376,titulo: "nome do produto",preço:"R$1000",descricao:"descrição do produto",imagem: "camisa.jpg"},
  {id:376,titulo: "nome do produto",preço:"R$1000",descricao:"descrição do produto",imagem: "camisa.jpg"},
]

app.get('/', (req, res) => {
  res.render('index', { message: 'Olá, Mundo!' });
});

app.get('/produtos', (req, res) => {
  res.render('produtos', { message: 'Olá, Mundo!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});