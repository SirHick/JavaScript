const express = require('express');

const server = express();

server.get('/professor', (req, res) => {

    return res.json({ "nome": "Maria", "disciplina": "Node.js" });

});

server.listen(3003, () => {
    console.log('Servidor rodando na porta 3003');
});