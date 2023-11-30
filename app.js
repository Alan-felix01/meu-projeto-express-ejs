const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id:1,titulo: "Camisa de Preta",preco:"R$1000",descricao:"descrição do produto",imagem: "camisa.jpg"},
  {id:2,titulo: "Caneleira Preta",preco:"R$1000",descricao:"descrição do produto",imagem: "CANALEIRA PRETA 01.png"},
  {id:3,titulo: "Caneleira Branca",preco:"R$1000",descricao:"descrição do produto",imagem: "CANELEIRA BRANCA 01.png"},
  {id:4,titulo: "Kit Faixas",preco:"R$1000",descricao:"descrição do produto",imagem: "kit fAIXAS.jpg"},
  {id:5,titulo: "Kit Kimono Azul",preco:"R$1000",descricao:"descrição do produto",imagem: "kit kimono azul.jpg"},
  {id:6,titulo: "Kit Kimono Branco",preco:"R$1000",descricao:"descrição do produto",imagem: "kit kimono branco.jpg"},
  {id:7,titulo: "Luva Branca 01",preco:"R$1000",descricao:"descrição do produto",imagem: "LUVA BRANCA 01.jpg"},
  {id:8,titulo: "Luva Branca 02",preco:"R$1000",descricao:"descrição do produto",imagem: "LUVA BRANCA 02.png"},
  {id:9,titulo: "Luva Preta 01",preco:"R$1000",descricao:"descrição do produto",imagem: "LUVA PRETA 03.jpg"},
  {id:10,titulo: "Luva Preta 02",preco:"R$1000",descricao:"descrição do produto",imagem: "LUVA PRETA02.png"},
  {id:11,titulo: "Luva Preta 03",preco:"R$1000",descricao:"descrição do produto",imagem: "LUVA PRETA01.jpg"},
  {id:12,titulo: "Luva Preta 04",preco:"R$1000",descricao:"descrição do produto",imagem: "LUVA PRETO 04.png"},
  
]

function BuscarProdutosPorID(id){
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}

app.get('/', (req, res) => {
  res.render('index', { produtos });
});

app.get('/produtos/:id',(req, res) => {
  const produto = BuscarProdutosPorID(req.params.id)
  res.render('produtos', { produto });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});