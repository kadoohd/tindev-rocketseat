const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); //./ pra referecniar a propria pasta
const cors = require('cors'); // permite acesso do react

const server = express();

mongoose.connect('mongodb+srv://caduhd:omnistack@cluster0-d6ec3.mongodb.net/omnistack8?retryWrites=true&w=majority', { useNewUrlParser: true })

/*pro express saber que ele tem que entender requisicoes json*/
server.use(express.json()) // for parsing application/json
server.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

server.use(cors());
server.use(routes);

server.listen(3333);