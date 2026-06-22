const express = require('express');

const server = express();

// ================================
// Entendendo query e route params:
// ================================

//Query params = ?nome=Nodejs
//Route Params = /curso/2
//Request Body = { "name": "Nodejs", tipo: "Backend" }

server.get('/curso/:nome', (req, res) => {
    const nome = req.params.nome
    return res.json({ curso: `Aprendendo${nome}` });

});

server.listen(3003, () => {
    console.log('Servidor rodando na porta 3003');
});