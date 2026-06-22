const express = require('express');

const server = express();

server.get('/aluno', (req, res) => {

    return res.json({ "nome": "Maria", "curso": "Desenvolvimento de Sistemas" });

});

server.listen(3003, () => {
    console.log('Servidor rodando na porta 3003');
});