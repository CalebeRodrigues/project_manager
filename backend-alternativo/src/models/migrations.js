const { Sequelize } = require('sequelize');

const database = require('../../db');


const UserModel = database.define('user', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const ProjModel = database.define('proj', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

const ProjUserModel = database.define('proj_user', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER
  },
});

const PerfilModel = database.define('perfil', {    
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const EtapaModel = database.define('etapa', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dataInicio: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dataFim: {
    type: Sequelize.STRING, 
    allowNull: false
  },
  dataInicioReal: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dataEntrega: {
    type: Sequelize.STRING
  }
});

const AtividadeModel = database.define('atividade', {    
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false
  },
  prazo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  kanban: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const ComentariosModel = database.define('comentarios', {    
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER
  },
  conteudo: {
    type: Sequelize.STRING,
    allowNull: false
  }
});


ProjUserModel.belongsTo(UserModel, {
  foreignKey: 'idUser'
});

ProjUserModel.belongsTo(ProjModel, {
  foreignKey: 'idProj'
});

ProjModel.belongsTo(UserModel, {
  foreignKey: 'idCriador'
});

ProjUserModel.belongsTo(PerfilModel, {
  foreignKey: 'idPerfil'
});

AtividadeModel.belongsTo(UserModel, {
  foreignKey: 'idUser'
});

AtividadeModel.hasMany(ComentariosModel, {
  foreignKey: 'idAtividade'
});

ComentariosModel.belongsTo(UserModel, {
  foreignKey: 'idUser'
});

EtapaModel.belongsTo(ProjModel, {
  foreignKey: 'idProj'
});

EtapaModel.hasMany(AtividadeModel, {
  foreignKey: 'idEtapa'
});

exports.UserModel = UserModel;
exports.ProjModel = ProjModel;
exports.ProjUserModel = ProjUserModel;
exports.PerfilModel = PerfilModel;
exports.EtapaModel = EtapaModel;
exports.AtividadeModel = AtividadeModel;
exports.ComentariosModel = ComentariosModel;
