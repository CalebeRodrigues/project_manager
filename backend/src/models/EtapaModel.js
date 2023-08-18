const { EtapaModel } = require('./migrations');

class Etapa {
  constructor(body){
    this.etapa = null;
    this.body = body;

    this.cleanUp();
  }

  async create() {
    this.etapa = await EtapaModel.create(this.body);
  }

  async update(id) {
    this.etapa = await EtapaModel.findOne({ where: { id } });

    if(!this.etapa) throw new Error('Não foi encontrada nenhuma etapa atrelada a este ID.');

    this.etapa.nome = this.body.nome; 
    this.etapa.dataInicio = this.body.dataInicio; 
    this.etapa.dataFim = this.body.dataFim; 
    this.etapa.dataInicioReal = this.body.dataInicioReal; 
    this.etapa.dataEntrega = this.body.dataEntrega; 

    await this.etapa.save();
  }

  async delete(id) {
    const etapaDel = await EtapaModel.findOne({ where: { id } });

    if(!etapaDel) throw new Error('Não foi encontrada nenhuma etapa atrelada a este ID.');

    this.etapa = await etapaDel.destroy();
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }
      
    this.body = {
      nome: this.body.nome,
      dataInicio: this.body.dataInicio,
      dataFim: this.body.dataFim,
      dataInicioReal: this.body.dataInicioReal,
      dataEntrega: this.body.dataEntrega
    };
  }

  static async findOne(id) {
    const etapa = await EtapaModel.findOne({ where: { id } });

    if(!etapa) throw new Error('Não existe nenhuma etapa atrelada a este ID.');

    return etapa;
  }

  static async findAll() {
    const etapas = await EtapaModel.findAll();

    if(!(etapas.length > 0)) throw new Error('Não existem etapas criadas.');

    return etapas;
  }
}

exports.Etapa = Etapa;
