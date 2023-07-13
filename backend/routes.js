const express= require('express');
const route = express.Router();

const UserController = require('./src/controllers/UserController');

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

module.exports = route;
