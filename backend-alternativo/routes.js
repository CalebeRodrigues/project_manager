const express= require('express');
const route = express.Router();

const UserController = require('./src/controllers/UserController');
const ProjController = require('./src/controllers/ProjController');
const EtapaController = require('./src/controllers/EtapaController');
const AtividadeController = require('./src/controllers/AtividadeController');
// const AuthController = require('./src/controllers/AuthController');
// const ActivityController = require('./src/controllers/ActivityController');
// const MemberController = require('./src/controllers/MemberController');
// const PerfilController = require('./src/controllers/PerfilController');

route.get('/', (req, res) => {
  res.status(200).send('API for project TCC (Manager project)');
});

route.get('/users', UserController.findAllUsers);
route.get('/user/:id', UserController.findUserById);

route.post('/user/register', UserController.register);

route.post('/user/login', UserController.login);

route.put('/user/update/:id', UserController.update);

route.delete('/user/delete/:id', UserController.delete);

// Projeto
route.get('/projs/:idUser', ProjController.findAll);
route.get('/proj/:id', ProjController.findOne);
route.get('/proj/member/:idUser', ProjController.isMember);

route.post('/proj/create', ProjController.create);

route.put('/proj/update/:id', ProjController.update);

// Etapa
route.get('/etapas', EtapaController.findAll);
route.get('/etapas/:idProj', EtapaController.findAll);
route.get('/etapa/:id', EtapaController.findOne);

route.post('/etapa/create', EtapaController.create);

route.put('/etapa/update/:id', EtapaController.update);

// Atividades
route.get('/atividades', AtividadeController.findAll);
route.get('/atividades/:idEtapa', AtividadeController.findAll);
route.get('/atividade/:id', AtividadeController.findOne);

route.post('/atividade/create', AtividadeController.create);

route.put('/atividade/update/:id', AtividadeController.update);


module.exports = route;
