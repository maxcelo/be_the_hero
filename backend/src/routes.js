const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Rota de login
routes.post('/sessions', SessionController.create);

// Rotas de ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// Rotas de listagem de incidents
routes.get('/profile', ProfileController.index);


// Rotas de incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;