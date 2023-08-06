const { Sequelize } = require('sequelize');

const database = require('../../db');

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

class Activity {
  constructor(body){
    this.activity = null;
    this.body = body;

    this.cleanUp();
  }

  async create() {
    this.activity = await ActivityModel.create(this.body);
  }

  async update(id) {
    this.activity = await ActivityModel.findOne({ where: { id } });

    if(!this.activity) throw new Error('Não foi encontrado nenhuma atividade com este ID.');

    this.activity.nome = this.body.nome;
    this.activity.descricao = this.body.descricao;
    this.activity.dataInicio = this.body.dataInicio;
    this.activity.dataFim = this.body.dataFim;
    this.activity.status = this.body.status;
    this.activity.dataInicioReal = this.body.dataInicioReal;
    this.activity.dataEntrega = this.body.dataEntrega;

    await this.activity.save();
  }

  async delete(id) {
    const activityDel = await ActivityModel.findOne({ where: { id } });

    if(!activityDel) throw new Error('Nâo foi encontrado nenhum atividade atrelado a este ID.');

    this.activity = await activityDel.destroy();
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }
      
    this.body = {
      nome: this.body.nome,
      descricao: this.body.descricao,
      dataInicio: this.body.dataInicio,
      dataFim: this.body.dataFim,
      status: this.body.status,
      dataInicioReal: this.body.dataInicioReal,
      dataEntrega: this.body.dataEntrega,
    };
  }

  static async findOne(id) {
    const activity = await ActivityModel.findOne({ where: { id } });

    if(!activity) throw new Error('Não existe nenhum atividade atrelado a este ID.');

    return activity;
  }

  static async findAll() {
    const activits = await ActivityModel.findAll();

    if(!(activits.length > 0)) throw new Error('Não existem atividades criados.');

    return activits;
  }
}

exports.Activity = Activity;
