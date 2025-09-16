const express = require('express')
const app = express()

// intermediarios
const cors = require('cors')
// habilita o Browser para mandar uma requisição
app.use(cors()) 
// habilita receber o json como corpo da requisicao
app.use(express.json())
//Log
app.use((req, res, next) => {
    console.log("-------#### Log de requisição ### ------")
    console.log("TIME: ", new Date().toLocaleString())
    console.log("METODO, ", req.method)
    console.log("ROTA: ", req.url)
    next()
}) 
    


// Roteadores
const PessoaController = require('./routes/PessoaController')
app.use(PessoaController)


// executa
app.listen(3000, () => {
    console.log("Api rodou em http://localhost:3000")
})