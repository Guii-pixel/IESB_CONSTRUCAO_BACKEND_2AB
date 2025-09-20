const express = require('express')
const router = express.Router()

// mapeamento dos endpoints e a lógica
// Lista de pessoas para simular o banco dados
let pessoas = [
  {
    id: 1,
    nome: "João Pedro",
    cpf: "12312345678",
    email: "joao@pedro.com",
    dataNascimento: "01/01/2000"
  },
  {
    id: 2,
    nome: "Maria Pedro",
    cpf: "12312345690",
    email: "maria@pedro.com",
    dataNascimento: "01/01/1990"
  }
]

// Criar
// - POST /pessoas
router.post('/pessoas', (req, res, next) => {
       const { nome, cpf, dataNascimento } = req.body
// Validar se os dados vinheram
if(nome || cpf || dataNascimento) {
    return res.status(400).json({ erro: "nome, cpf, email e data de nascimento são obrigatórios!!!"})
}
// VALIDAR SE O CPF JA EXISTE
const pessoa = pessoas.find(pessoa => pessoa.cpf == pf)
if(pessoa) {
    return res.status(409).json({ error: "CPF já cadastrado!!!"})
}
// Cadastrar a nova pessoa na lista
const novaPessoa = {
    id: Date.now(),
    nome,
    cpf,
    email,
    dataNascimento
}
// Inserir a nova pessoa contada na lista
pessoas.push(novaPessoa)
res.status(201).json({ message: "Pessoa cadastrada!!!", novaPessoa })
})

// Listar Todos
// - GET /pessoas
router.get('/pessoas', (req, res, next) => {
  res.json(pessoas)
})

// Buscar um
// - GET /pessoas/{id}
router.get('/pessoas/:id', (req, res, next) => {
  const idRecebido = req.params.id
  const pessoa = pessoas.find(p => p.id == idRecebido)
  if (!pessoa) {
    return res.status(404).json({ error: "Pessoa não encontrada!!!" })
  }
  res.json(pessoa)
})

// Atualizar
// - PUT /pessoas/{id}
router.put('/pessoas/:id', (req, res, next) => {
const idRecebido = req.params.id
const { nome, email, dataNascimento } = req.body
// Validar se os dados vinheram
if(nome || email || dataNascimento) {
    return res.status(400).json({ error: "nome, email e dataNascimento são obrigatórios"})
}
// validar se a pessoa com aquele ID existe na lista
const pessoa = pessoas.find(pessoa => pessoa.id == idRecebido)
if(!pessoa) {
    return res.status(404).json({ error: "Pessoa não encontrada!!!"})
}
// Sobrescrevo os dados da pessoa para atualizar
pessoa.nome = nome
pessoa.email = email
pessoa.dataNascimento = dataNascimento
res.json({ message: "Pessoa atualizada com sucesso!!!"})
})

// Deletar
// - DELETE /pessoas/{id}
router.delete('/pessoas/:id', (req, res, next) => {
const idRecebido = req.params.id
const pessoa = pessoas.find(pessoa => pessoa.id == idRecebido)
if(!pessoa) {
    return res.status(404).json({ error: "Pessoa não encontrada"})

}
// Sobrescreve a lista com uma nova sem a pessoa de idRecebido
pessoas = pessoas.filter(pessoa => pessoa.id != idRecebido)

res.json({ message: "Pessoa excluido com sucesso!!!" })
})


module.exports = router