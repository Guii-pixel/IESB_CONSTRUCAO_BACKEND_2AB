const express = require('express')
const router = express.Router()

// mapeamento dos endpoints e a lógica
// Lista de pessoas para simular o banco de dados 
let pessoas = [
    {
        id: 1, 
        nome:" Joao Peddro",
        cpf:"123456789",
        email:"joaopedro.com",
        dataNascimento:"01/01/2025"    
    },
    {
        id: 2, 
        nome:" Maria Peddro",
        cpf:"123456789",
        email:"mariapedro.com",
        dataNascimento:"01/01/2025"    
    }
]



// Criar
// - POST /pessoas
router.post('/pessoas', (req, res, next) => {

})
// Listar Todos
// - GET / pessoas
router.get('/pessoas', (req, res, next) => {
    res.json(pessoas)
})
//Buscar um
// - GET/ pessoas/{id}
router.get('/pessoas/:id', (req, res, next) => {
    const idRecebido = req.params.id
    const pessoa = pessoas.find(p => p.id == idRecebido)
    if (!pessoaa) {
        return res.status(404).json({ error: "Pessoa não encontrada!!!"})
    }

    res.json(pessoa)
})

//Editar
// - PUT / pessoas/ {id}
router.put('/pessoas/:id', (req, res, next) => {

})

//Deletar
// - DELETE/ pessoas/{id}
router.delete('/pessoas/:id', (req, res, next) => {

})








module.exports = router