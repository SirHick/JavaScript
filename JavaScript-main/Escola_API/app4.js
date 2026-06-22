const express = require('express');

const server = express();

server.get('/escola', (req, res) => {

    return res.json({ "nome":"Tech School",
    "cidade":"Joinville" });

});

server.listen(3003, () => {
    console.log('Servidor rodando na porta 3003');
});