const express= require('express');
const route = express.Router();

const UserController = require('./src/controllers/UserController');
const ProjController = require('./src/controllers/ProjController');
const EtapaController = require('./src/controllers/EtapaController');
const AtividadeController = require('./src/controllers/AtividadeController');
const ComentariosController = require('./src/controllers/ComentariosController');
// const AuthController = require('./src/controllers/AuthController');
// const ActivityController = require('./src/controllers/ActivityController');
// const MemberController = require('./src/controllers/MemberController');
// const PerfilController = require('./src/controllers/PerfilController');

route.get('/', (req, res) => {
  res.status(200).send('API for project TCC (Manager project)');
});

route.get('/users', UserController.findAllUsers);
route.get('/user/:id', UserController.findUserById);
route.get('/user/email/:email', UserController.findUser);

route.post('/user/register', UserController.register);

route.post('/user/login', UserController.login);

route.put('/user/update/:id', UserController.update);

route.delete('/user/delete/:id', UserController.delete);

// Projeto
route.get('/projs/:idUser', ProjController.findAll);
route.get('/proj/:id', ProjController.findOne);
route.get('/proj/member/:idUser', ProjController.isMember);
route.get('/proj/members/:idProj', ProjController.members);

route.post('/proj/create', ProjController.create);
route.post('/proj/member/new/:idUser', ProjController.includeMembers);

route.put('/proj/update/:id', ProjController.update);

// Etapa
route.get('/etapas', EtapaController.findAll);
route.get('/etapas/:idProj', EtapaController.findAll);
route.get('/etapa/:id', EtapaController.findOne);

route.post('/etapa/create', EtapaController.create);

route.put('/etapa/update/:id', EtapaController.update);

// Atividades
route.get('/atividades', AtividadeController.findAll);
route.get('/atividades/user/:idUser', AtividadeController.findByUser);
route.get('/atividades/:idEtapa', AtividadeController.findAll);
route.get('/atividade/:id', AtividadeController.findOne);
route.get('/atividade/count/:idEtapa', AtividadeController.countAtividadesByEtapa);

route.post('/atividade/create', AtividadeController.create);

route.put('/atividade/update/:id', AtividadeController.update);

// Comentarios
route.get('/comentarios', ComentariosController.findAll);
route.get('/comentarios/:idAtividade', ComentariosController.findAll);
route.get('/comentario/:id', ComentariosController.findOne);

route.post('/comentario/create', ComentariosController.create);

route.put('/comentarios/update/:id', ComentariosController.update);


module.exports = route;
