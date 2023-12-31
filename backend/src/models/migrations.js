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

const PerfilModel = database.define('perfil_acess', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const AcessModel = database.define('acess', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  idPerfil: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  idAuthCode: {
    type: Sequelize.INTEGER,
    allowNull: false
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
  },
  idPerfil: {
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

MemberModel.belongsTo(PerfilModel, {
  foreignKey: 'idPerfil',
  allowNull: false
});

PerfilModel.hasMany(AcessModel, {
  foreignKey: 'idPerfil',
  allowNull: false
});

AcessModel.belongsTo(PerfilModel, {
  foreignKey: 'idPerfil',
  allowNull: false
});
  
AcessModel.belongsTo(AuthModel, {
  foreignKey: 'idAuthCode',
  allowNull: false
});

exports.ActivityModel = ActivityModel;
exports.AuthModel = AuthModel;
exports.EtapaModel = EtapaModel;
exports.MemberModel = MemberModel;
exports.ProjModel = ProjModel;
exports.UserModel = UserModel;
exports.PerfilModel = PerfilModel;
exports.AcessModel = AcessModel;
