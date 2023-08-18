const { Sequelize } = require('sequelize');

const database = require('../../db');


const UserModel = database.define('user', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

const ProjModel = database.define('proj', {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
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
  }
});

const ActivityModel = database.define('activity', {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
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
    allowNull: false,
  },
  dataFim: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING, 
    allowNull: false
  },
  dataInicioReal: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dataEntrega: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const AuthModel = database.define('auth_code', {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: Sequelize.INTEGER
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const EtapaModel = database.define('etapa', {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: Sequelize.INTEGER
  },
  nome: {
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

const MemberModel = database.define('member', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  idUser: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  idProj: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

MemberModel.belongsTo(UserModel, {
  foreignKey: 'idUser',
  allowNull: true
});

MemberModel.belongsTo(ProjModel, {
  foreignKey: 'idProj',
  allowNull: false
});

exports.ActivityModel = ActivityModel;
exports.AuthModel = AuthModel;
exports.EtapaModel = EtapaModel;
exports.MemberModel = MemberModel;
exports.ProjModel = ProjModel;
exports.UserModel = UserModel;
