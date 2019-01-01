const porta = 3003

const express = require('express')
const app = express()

//Middleware
app.get('/cursos', (req, res, next) => {
    res.send({
        curso: 'Engenharia de Software',
        local: 'UFG'
    })
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}!`)
})