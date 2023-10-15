const express= require('express');
const route = express.Router();

const UserController = require('./src/controllers/UserController');
const ProjController = require('./src/controllers/ProjController');
// const EtapaController = require('./src/controllers/EtapaController');
// const AuthController = require('./src/controllers/AuthController');
// const ActivityController = require('./src/controllers/ActivityController');
// const MemberController = require('./src/controllers/MemberController');
// const PerfilController = require('./src/controllers/PerfilController');

route.get('/', (req, res) => {
  res.status(200).send('API for project TCC (Manager project)');
});

route.get('/users', UserController.findAllUsers);


route.get('/proj/:id', ProjController.findOne);

module.exports = route;
