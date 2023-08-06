const express= require('express');
const route = express.Router();

const UserController = require('./src/controllers/UserController');
const ProjController = require('./src/controllers/ProjController');
const EtapaController = require('./src/controllers/EtapaController');
const AuthController = require('./src/controllers/AuthController');
const ActivityController = require('./src/controllers/ActivityController');

route.get('/', (req, res) => {
  res.status(200).send('API for project TCC (Manager project)');
});

// User
route.post('/user/login', UserController.login);

route.get('/user', UserController.findAllUsers);
route.get('/user/:id', UserController.findUserById);

route.post('/user/register', UserController.register);

route.put('/user/update/:id', UserController.update);

route.delete('/user/delete/:id', UserController.delete);

// Projeto
route.get('/proj', ProjController.findAll);
route.get('/proj/:id', ProjController.findOne);

route.post('/proj/create', ProjController.create);  

route.put('/proj/update/:id', ProjController.update);

route.delete('/proj/delete/:id', ProjController.delete);  

// Etapa
route.get('/etapa', EtapaController.findAll);
route.get('/etapa/:id', EtapaController.findOne);

route.post('/etapa/create', EtapaController.create);  

route.put('/etapa/update/:id', EtapaController.update);

route.delete('/etapa/delete/:id', EtapaController.delete); 

// Auth
route.get('/auth_code', AuthController.findAll);
route.get('/auth_code/:id', AuthController.findOne);

route.post('/auth_code/create', AuthController.create);  

route.put('/auth_code/update/:id', AuthController.update);

route.delete('/auth_code/delete/:id', AuthController.delete);

// Activity
route.get('/activity', ActivityController.findAll);
route.get('/activity/:id', ActivityController.findOne);

route.post('/activity/create', ActivityController.create);  

route.put('/activity/update/:id', ActivityController.update);

route.delete('/activity/delete/:id', ActivityController.delete); 

module.exports = route;
