const express = require('express');
const routes = require('./routes'); //./ pra referecniar a propria pasta

const server = express();

// server.get('/', (req, res) => {
//     return res.json({ message: `Olá world ${req.query.name}` });
// });
server.use(routes);

server.listen(3333);