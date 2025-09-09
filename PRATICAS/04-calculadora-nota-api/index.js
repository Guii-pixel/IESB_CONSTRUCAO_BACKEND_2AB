//importa o express
const express = require('express')

//Cria uma aplicação com express
const app = express()

//importa o intermediario que configura o cors
const cors = require('cors')
// Habilite para chegar requisicao de qualquer origem
app.use(cors())

// Configuração e Intermediar(Middleware)
// Intermediario de log
app.use((req, res, next) => { 
    console.log("-------##### Requisição Chegou ####")
    console.log("Time: ", new Date().toLocaleString())
    console.log("Metodo: ", req.method)
    console.log("Rota: ", req.url)
    next()
})

app.get("/hello", (req, res, next) => {
    res.send("Hello Atualizado!!")
})

// Importar o roteador calculadoaraNota
const calculadoraNotaRouter = require('./routes/CalculadoraNota')
// Configuro a minha aplicação para usar o router (calculadoranota) como intermediario
app.use("/", calculadoraNotaRouter)


// Executo a aplicação (Minha api)
app.listen(3000, () => {
    console.log("API rodando em http://localhost:3000")
})