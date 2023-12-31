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

  async update(id) {
    this.cleanUp();

    const etapaTemp = await EtapaModel.findOne({ where: { id } });

    if(!etapaTemp) throw new Error('Não foi encontrada nenhuma etapa atrelada a este ID');

    await etapaTemp.update({
      ...this.body,
      idProj: etapaTemp.dataValues.idProj
    });

    await etapaTemp.save();

    this.etapa = etapaTemp;
  }

  async findOne(id) {
    this.etapa = await EtapaModel.findOne({ where: { id } });

    if(!this.etapa) throw new Error('Não existe nenhuma etapa atrelada a este ID');

    return this.etapa;
  }

  async findAll(idProj = null) {
    this.etapa = 
        (!idProj) ? 
          await EtapaModel.findAll() :
          await EtapaModel.findAll({ where: { idProj } });

    if(!this.etapa.length > 0) throw new Error('Não existem etapas criadas na base de dados');

    return this.etapa;
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
