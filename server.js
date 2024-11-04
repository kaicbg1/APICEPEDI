const express = require('express');
const { create, update, remove, findAll } = require('./repositories/alunoRepository');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/alunos', (req, res) => {
    const { Nome, Email, Nome_curso } = req.body;
    const aluno = create({ Nome, Email, Nome_curso });
    res.status(201).json(aluno);
});

app.get('/alunos', (req, res) => {
    const alunos = findAll();
    res.json(alunos);
});

app.put('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const { Nome, Email, Nome_curso } = req.body;
    const aluno = update(id, { Nome, Email, Nome_curso });
    res.json(aluno);
});

app.delete('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const sucesso = remove(id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`); 
});
