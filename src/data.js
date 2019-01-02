const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const cursos = {}

function salvarCurso(curso) {
    if (!curso.id) curso.id = sequence.id
    cursos[curso.id] = curso
    return curso
}

function getCurso(id) {
    return cursos[id] || {} // se não tiver nenhum curso no array, retorna um objeto vazio
}

function getCursos(){
    return Object.values(cursos)
}

module.exports = { salvarCurso, getCurso, getCursos }