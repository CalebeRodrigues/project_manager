const { EtapaModel, UserModel, AtividadeModel } = require('./migrations');

class Activity {
  constructor(body) {
    this.body = body;
    this.atividade = null;
  }

  async create() {
    this.cleanUp();

    if(!this.body.idEtapa) throw new Error('É necessário uma etapa atrelada a atividade para prosseguir');

    if(!this.body.idUser) throw new Error('É necessário inserir um responsável pela atividade para prosseguir');

    const etapa = await EtapaModel.findOne({
      where: { id: this.body.idEtapa }
    });

    const user = await UserModel.findOne({
      where: { id: this.body.idUser }
    });

    if(!etapa) throw new Error('Não foi encontrado nenhum projeto atrelado a este ID.');
    if(!user) throw new Error('Não foi encontrado nenhum usuário atrelado a este ID.');

    this.atividade = await AtividadeModel.create(this.body);
  }

  async update(id) {
    this.cleanUp();

    const atividadeTemp = await AtividadeModel.findOne({ where: { id } });

    if(!atividadeTemp) throw new Error('Não foi encontrada nenhuma atividade atrelada a este ID');

    await atividadeTemp.update({
      ...this.body
    });

    await atividadeTemp.save();

    this.atividade = atividadeTemp;
  }

  async findOne(id) {
    this.atividade = await AtividadeModel.findOne({ where: { id }, include: [{
      model: UserModel,
      attributes: ['nome']
    }] });

    if(!this.atividade) throw new Error('Não existe nenhuma atividade atrelada a este ID');

    return this.atividade;
  }

  async findByUser(idUser) {
    this.atividade = await AtividadeModel.findAll({ where: {
      idUser: idUser
    } });

    if(!this.atividade) throw new Error('Ainda não foram atribuidas atividades para este usuário');

    return this.atividade;
  }

  async findAll(idEtapa = null) {
    this.atividade = 
        (!idEtapa) ? 
          await AtividadeModel.findAll() :
          await AtividadeModel.findAll({ where: { idEtapa }, include: [{ model: UserModel, attributes: ['id', 'nome'] }] });

    if(!this.atividade.length > 0) throw new Error('Não existem atividades criadas na base de dados');

    return this.atividade;
  }

  async countAtividadeByEtapa (idEtapa) {
    const total = await AtividadeModel.count({
      where: {
        idEtapa
      }
    });

    const andamento = await AtividadeModel.count({
      where: {
        idEtapa,
        kanban: 'does'
      }}); 

    return {
      andamento,
      total
    };
  }

  // Garante que tudo que vier no formulário seja uma string
  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }

    this.body = {
      titulo: this.body.titulo,
      descricao: this.body.descricao,
      prazo: this.body.prazo,
      kanban: this.body.kanban,
      idUser: this.body.idUser,
      idEtapa: this.body.idEtapa
    };
  }
}

exports.Activity = Activity;
