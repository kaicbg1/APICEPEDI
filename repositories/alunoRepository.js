const { v4: uuidv4 } = require('uuid');

let alunos = [];

function create({ Nome, Email, Nome_curso }) {
    const aluno = {
        id: uuidv4(),
        Nome,
        Email,
        Nome_curso
    };
    alunos.push(aluno); 
    return aluno;
}

function update(id, { Nome, Email, Nome_curso }) {
    const index = alunos.findIndex(aluno => aluno.id === id);
    if (index === -1) {
        return null;
    }
    alunos[index] = { 
        id,
        Nome,
        Email,
        Nome_curso
    };
    return alunos[index];
}

function remove(id) {
    const index = alunos.findIndex(aluno => aluno.id === id);
    if (index === -1) {
        return false;
    }
    alunos.splice(index, 1);
    return true;
}

function findAll() {
    return alunos;
}

module.exports = {
    create,
    update,
    remove,
    findAll
};
