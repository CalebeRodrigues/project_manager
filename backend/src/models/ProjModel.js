const { Sequelize } = require('sequelize');

const database = require('../../db');

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

class Proj {
  constructor(body){
    this.proj = null;
    this.body = body;

    this.cleanUp();
  }

  async create() {
    this.proj = await ProjModel.create(this.body);
  }

  async update(id) {
    this.proj = await ProjModel.findOne({ where: { id } });

    if(!this.proj) throw new Error('Não foi encontrado nenhum projeto com este ID.');

    this.proj.nome = this.body.nome;
    this.proj.descricao = this.body.descricao;
    this.proj.status = this.body.status;

    await this.proj.save();
  }

  async delete(id) {
    const projDel = await ProjModel.findOne({ where: { id } });

    if(!projDel) throw new Error('Nâo foi encontrado nenhum projeto atrelado a este ID.');

    this.proj = await projDel.destroy();
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
      status: this.body.status,
    };
  }

  static async findOne(id) {
    const proj = await ProjModel.findOne({ where: { id } });

    if(!proj) throw new Error('Não existe nenhum projeto atrelado a este ID.');

    return proj;
  }

  static async findAll() {
    const projs = await ProjModel.findAll();

    if(!(projs.length > 0)) throw new Error('Não existem projetos criados.');

    return projs;
  }
}

exports.Proj = Proj;
