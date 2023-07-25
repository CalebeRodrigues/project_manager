const express= require('express');
const route = express.Router();

const UserController = require('./src/controllers/UserController');
const ProjController = require('./src/controllers/ProjController');

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

module.exports = route;
