const express = require('express');

const server = express();

// ================================
// Entendendo query e route params:
// ================================

//Query params = ?nome=Nodejs
//Route Params = /curso/2
//Request Body = { "name": "Nodejs", tipo: "Backend" }

server.get('/curso', (req, res) => {

    return res.json({ curso: 'Node.js' });

});

server.listen(3003, () => {
    console.log('Servidor rodando na porta 3003');
});