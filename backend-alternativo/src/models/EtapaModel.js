const { ProjModel, EtapaModel } = require('./migrations');

class Etapa {
  constructor(body) {
    this.body = body;
    this.etapa = null;
  }

  async create() {
    this.cleanUp();

    if(!this.body.idProj) throw new Error('É necessário um projeto atrelado a esta etapa para prosseguir');

    const proj = await ProjModel.findOne({
      where: { id: this.body.idProj }
    });

    if(!proj) throw new Error('Não foi encontrado nenhum projeto atrelado a este ID.');

    this.etapa = await EtapaModel.create(this.body);
  }

  async update() {

  }

  async findOne() {
    
  }

  async findAll() {

  }

  // Garante que tudo que vier no formulário seja uma string
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
      dataInicioReal: this.body.dataInicioReal,
      dataEntrega: this.body.dataEntrega,
      idProj: this.body.idProj ? this.body.idProj : null
    };
  }
}

exports.Etapa = Etapa;
