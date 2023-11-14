const { AtividadeModel, UserModel, ComentariosModel } = require('./migrations');

class Comentarios {
  constructor(body) {
    this.body = body;
    this.comentario = null;
  }

  async create() {
    this.cleanUp();

    const atividade = await AtividadeModel.findOne({ where: { id: this.body.idAtividade } });

    if(!atividade) throw new Error('É necessário ter uma atividade válida atrelada ao comentário');

    const user = await UserModel.findOne({where: { id: this.body.idUser }});

    if(!user) throw new Error('Não foi encontrado nenhum usuário atrelado a este ID.');
    

    this.comentario = await ComentariosModel.create(this.body);
  }

  async update(id) {
    this.cleanUp();

    const comentarioTemp = await ComentariosModel.findOne({ where: { id } });

    if(!comentarioTemp) throw new Error('Não foi encontrada nenhum comentário atrelado a este ID');

    await comentarioTemp.update({
      ...this.body
    });

    await comentarioTemp.save();

    this.comentario = comentarioTemp;
  }

  async findOne(id) {
    this.comentario = await ComentariosModel.findOne({ where: { id }, include: [{
      model: UserModel,
      attributes: ['nome']
    }] });

    if(!this.comentario) throw new Error('Não existe nenhuma comentario atrelado a este ID');

    return this.comentario;
  }

  async findAll(idAtividade = null) {
    this.comentario = 
        (!idAtividade) ? 
          await ComentariosModel.findAll() :
          await ComentariosModel.findAll({ where: { idAtividade }, include: [{ model: UserModel, attributes: ['nome'] }], order: [[
            'createdAt', 'DESC'
          ]] });

    if(!this.comentario.length > 0) throw new Error('Não existem comentarios criados na base de dados');

    return this.comentario;
  }

  // Garante que tudo que vier no formulário seja uma string
  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }

    this.body = {
      conteudo: this.body.conteudo,
      data: this.body.data,
      idAtividade: this.body.idAtividade,
      idUser: this.body.idUser
    };
  }
}

exports.Comentarios = Comentarios;
