const porta = 3003

const express = require('express')
const app = express()
const data = require('./data')
const bodyParser = require('body-parser')

//Middleware

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/cursos', (req, res, next) => {
    res.send(data.getCursos())
})

app.get('/cursos/:id', (req, res, next) => {
    res.send(data.getCurso(req.params.id))
})

app.post('/cursos', (req, res, next) => {
    const curso = data.salvarCurso({
        curso: req.body.curso,
        local: req.body.local
    })
    res.send(curso)
})

app.put('/cursos/:id', (req, res, next) => {
    const curso = data.salvarCurso({
        id: req.params.id,
        curso: req.body.curso,
        local: req.body.local
    })
    res.send(curso)
})

app.delete('/cursos/:id', (req, res, next) => {
    const curso = data.excluirCurso(req.params.id)
    res.send(curso)
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}!`)
})