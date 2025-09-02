//import o express
const express = require('express')

// Criar uma instancia no meu backend com o express
const app = express()

// intermediarios (Middlewares)
//intermediario de log
// toda requisicao passara por ele e imprmir no terminal
//informacao de requisicao
app.use((req, res, next) => {
    console.log("Time: ", new Date().toLocaleString())
    console.log("Metodo: ", req.method)
    console.log("Rota: ", req.url)
    next()
})





// Hello World
// res -> a requisicao (os dados da requisicao)
// res -> manipulador de resposta
// next -> chama o proximo intermediario
app.get('/hello' , (req, res, next) => {
    // envio da respostas
    res.send('Hello World!!!!!')
})


//endpoint da minha API
app.get('/pessoas', (req, res, next) => {
    const pessoas = [
        {
            id: 1, 
            nome:"Joao Pedro"
        },
        {
            id: 2,
            nome: "Ana Paula"
        }
    ]
    res.json(pessoas)
})





// Executar a aplicação escolhendo a porta que ela vai escutar
app.listen(3000, () => {
    console.log("Minha aplicação está rodando em http://localhost:3000")
})