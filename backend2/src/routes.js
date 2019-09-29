const express = require('express');
const devController = require('./Controllers/DevController');

const routes = express.Router();

routes.post('/devs', devController.store);

module.exports = routes;